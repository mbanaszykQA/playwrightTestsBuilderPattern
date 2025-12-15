import { Page } from "@playwright/test";
import { Field } from "@interfaces/IField";

export class LoginBuilder {
  private username!: Field;
  private password!: Field;
  private loginButton!: Field;

  constructor(private page: Page) {}

  withUsernameField(selector: string) {
    this.username = new Field(this.page, { locator: selector, editable: true});
    return this;
  }

  withPasswordField(selector: string) {
    this.password = new Field(this.page, { locator: selector, editable: true});
    return this;
  }

  withLoginButton(selector: string) {
    this.loginButton = new Field(this.page, { locator: selector, clickable: true });
    return this;
  }

  async login(username: string, password: string) {
    await this.username.type(username);
    await this.password.type(password);
    await this.loginButton.click();
  }
}