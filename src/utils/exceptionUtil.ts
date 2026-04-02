import {Page} from "@playwright/test"; 
import { ScreenshotUtil } from "./screenshotUtil";

export class ExceptionUtil {

    static async handleException(error: Error, page?: Page) {

        console.error("=== EXCEPTION OCCURED ===");
        console.error(`Message: ${error.message}`);
        console.error(`Stack: ${error.stack}`);
        console.error("====");

        if(page){
            try{
                let filename = `error-${Date.now()}.png`;
                await ScreenshotUtil.takeScreenshot(page, filename);
                console.log(`Screenshot captured: ${filename}`);
            }
            catch(Screenshoterror){
                console.error("Screenshot capture Fail");
            }
        }

        throw error;

    }

}