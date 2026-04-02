import {chromium,Browser,BrowserContext,Page} from "@playwright/test";
export class BrowserFactory {

    static async createBrowser(): Promise<Browser> {
        return await chromium.launch({headless: true});
    }

    static async createContext(browser:Browser): Promise<BrowserContext> {
        return await browser.newContext(); 
    }

    static async createPage(context: BrowserContext): Promise<Page> {
        return await context.newPage(); 
    }

}
