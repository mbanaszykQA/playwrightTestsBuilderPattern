import { Page } from "@playwright/test";
import { Field } from "../interfaces/IField";

export class CartBuilder {
  private addButton!: Field;
  private cartIcon!: Field;
  private checkoutButton!: Field;

  constructor(private page: Page) {}

  withAddButton(selector: string) {
    this.addButton = new Field(this.page, { locator: selector, clickable: true });
    return this;
  }

  withCartIcon(selector: string) {
    this.cartIcon = new Field(this.page, { locator: selector, clickable: true });
    return this;
  }

  withCheckoutButton(selector: string) {
    this.checkoutButton = new Field(this.page, { locator: selector, clickable: true })
    return this;
  }

  async addItem() {
    await this.addButton.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }
}