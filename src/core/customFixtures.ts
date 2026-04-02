import {test as base, BrowserContext, Page} from "@playwright/test"; 
import { BrowserFactory } from "./browserFactory";
import { RegisterPage } from "../pages/registerPage";
import { LoginPage } from "../pages/loginwithproductPage";
import { CartPage } from "../pages/cartPage";


interface CustomFixtures {
    context: BrowserContext; 
    page: Page;
    registerPage: RegisterPage; 
    loginPage: LoginPage;
    cartPage: CartPage;
}

export let test = base.extend<CustomFixtures>({
  context: async ({}, use) => {
    const context = await BrowserFactory.createContext(await BrowserFactory.createBrowser());
    await use(context);
    await context.close();
   },
  page: async ({ context }, use) => {

    const page = await BrowserFactory.createPage(context);
    await use(page);
    await page.close();
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

});