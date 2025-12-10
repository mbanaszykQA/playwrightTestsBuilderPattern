import { test, expect } from "@playwright/test";
import { LoginBuilder } from "../builders/LoginBuilder";
import { CartBuilder } from "../builders/CartBuilder";
import { CheckoutFormBuilder } from "../builders/CheckoutBuilder";

test("Full purchase flow on SauceDemo using Builder pattern", async ({ page }) => {

  await page.goto("https://www.saucedemo.com/");

  const login = new LoginBuilder(page)
    .withUsernameField("#user-name")
    .withPasswordField("#password")
    .withLoginButton("#login-button");

  await login.login("standard_user", "secret_sauce");

  const cart = new CartBuilder(page)
    .withAddButton('[id="add-to-cart-sauce-labs-backpack"]')
    //do ustalenia czy używamy 'xxx' czy "xxx", wg mnie lepiej tak jak w linii powyżej
    .withCartIcon("#shopping_cart_container")
    .withCheckoutButton("#checkout");

  await cart.addItem();
  await cart.openCart();
  await cart.clickCheckoutButton()

  const checkout = new CheckoutFormBuilder(page)
    .withFirstNameField("#first-name")
    .withLastNameField("#last-name")
    .withZipField("#postal-code")
    .withContinueButton("#continue")
    .withFinishButton("#finish");

  await checkout.fillForm("John", "Doe", "90210");
  await checkout.submit();

  await expect(page.locator("#back-to-products")).toBeVisible();
});