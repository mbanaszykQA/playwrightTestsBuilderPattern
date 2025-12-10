import { Page, Locator } from "@playwright/test";

export interface FieldConfig {
  locator: string;
  clickable?: boolean;
  editable?: boolean;
  //wg mnie wymagalność, edytowalność itd powinny być sprawdzane tutaj, ale do weryfikacji
}

export class Field {
  private loc: Locator;

  constructor(private page: Page, private cfg: FieldConfig) {
    this.loc = page.locator(cfg.locator);
  }

  async click() {
    await this.loc.click();
  }

  async type(value: string) {
    await this.loc.fill(value);
  }

}
