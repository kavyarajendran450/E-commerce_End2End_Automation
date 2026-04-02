import {test} from '../../src/core/customFixtures';
import { WaitActions } from "../../src/wrapper/waitAction";
import { Constants } from "../../src/utils/constants";


test.describe('RegisterPage', () => { 
     test('Successful Register Page', async ({ registerPage, page }) => {
        const waitActions = new WaitActions(page);
        await registerPage.navigateTo(); 
        await registerPage.registerpage();
        await waitActions.waitForTimeout(2000);
        await registerPage.signuppage();
        await registerPage.DOB("4","June", "1992");
        await registerPage.letter();
        await registerPage.addressinfo("Kavya", "Rajendran", "CTS", "Adambakkam");
        await page.waitForLoadState('domcontentloaded');
        await registerPage.address2("Canada");
        await registerPage.details("TamilNadu", "Chennai", "600000", "7727777277");
     });
    });

    test.describe('LoginPage', () => { 
     test('Successful Login Page', async ({registerPage,loginPage, page }) => {
        const waitActions = new WaitActions(page);
        await registerPage.navigateTo();
        await loginPage.loginpage();
        await waitActions.waitForTimeout(2000);
        await loginPage.logindetails(Constants.EMAIL, Constants.PASSWORD,Constants.SUBSCRIPTION); 
        await loginPage.productdetails(Constants.REVIEWNAME,Constants.EMAILADDRESS,Constants.ADDREVIEW);
     });
    });


    test.describe('Payment Page', () => { 
     test('Successful Payment Page', async ({registerPage,loginPage, page, cartPage}) => {
        const waitActions = new WaitActions(page);
        await registerPage.navigateTo();
        await loginPage.loginpage();
        await waitActions.waitForTimeout(2000);
        await loginPage.logindetails(Constants.EMAIL, Constants.PASSWORD,Constants.SUBSCRIPTION); 
        await loginPage.productdetails(Constants.REVIEWNAME,Constants.EMAILADDRESS,Constants.ADDREVIEW);
        await cartPage.cartdetails(Constants.REVCOMMENT, Constants.CARD, Constants.NUMBER, Constants.CVV, Constants.EXPIRY, Constants.YEAR);
     });
    });