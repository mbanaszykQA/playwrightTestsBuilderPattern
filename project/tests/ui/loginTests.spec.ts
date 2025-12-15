import { test, expect } from "@playwright/test";
import { LoginBuilder } from "builders/ui/LoginBuilder";

test.describe('Login tests', () => {

  test('Successful login - standard_user', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    const login = new LoginBuilder(page)
    .withUsernameField("#user-name")
    .withPasswordField("#password")
    .withLoginButton("#login-button");

    await login.login('standard_user', 'secret_sauce');

    await expect(page.locator(".title")).toHaveText('Products');
  });

  test('Unsuccessful login - locked_out_user', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    const login = new LoginBuilder(page)
    .withUsernameField("#user-name")
    .withPasswordField("#password")
    .withLoginButton("#login-button");
    
    await login.login('locked_out_user', 'secret_sauce');
    
    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(
      'Epic sadface: Sorry, this user has been locked out.'
    );
  });

});