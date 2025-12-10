import { Page } from "@playwright/test";
import { Field } from "../interfaces/IField";


export class CheckoutFormBuilder {
  private firstName!: Field;
  private lastName!: Field;
  private zip!: Field;
  private continueButton!: Field;
  private finishButton!: Field;

  constructor(private page: Page) {}

  withFirstNameField(selector: string) {
    this.firstName = new Field(this.page, { locator: selector, editable: true });
    return this;
  }

  withLastNameField(selector: string) {
    this.lastName = new Field(this.page, { locator: selector, editable: true });
    return this;
  }

  withZipField(selector: string) {
    this.zip = new Field(this.page, { locator: selector, editable: true });
    return this;
  }

  withContinueButton(selector: string) {
    this.continueButton = new Field(this.page, { locator: selector, clickable: true });
    return this;
  }

  withFinishButton(selector: string) {
    this.finishButton = new Field(this.page, { locator: selector, clickable: true });
    return this;
  }

  async fillForm(firstName: string, lastName: string, zipCode: string) {
    await this.firstName.type(firstName);
    await this.lastName.type(lastName);
    await this.zip.type(zipCode);
  }

  async submit() {
    await this.continueButton.click();
    await this.finishButton.click();
  }
}