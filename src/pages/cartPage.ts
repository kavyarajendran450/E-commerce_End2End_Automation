import {Page, Locator} from "@playwright/test";
import { BasePage } from "../core/basePage";
import { UIActions } from "../actions/uiActions";

export class CartPage extends BasePage {

    private cartclick: Locator; 
    private checkoutbtn: Locator;
    private reviewcomment: Locator; 
    private placeorder: Locator;
    private cardname: Locator; 
    private cardnumber: Locator;
    private cvc: Locator;
    private expire: Locator;
    private years: Locator;
    private paybutton: Locator;
    private invoice: Locator; 
    private continuebtn: Locator;
    private uiActions: UIActions;

    constructor(page: Page) {
        super(page);
        this.cartclick = page.locator("//a[normalize-space()='Cart']");
        this.checkoutbtn = page.locator("//a[text() = 'Proceed To Checkout']");
        this.reviewcomment = page.locator("//textarea[@name = 'message']");
        this.placeorder = page.locator("//a[text() = 'Place Order']");
        this.cardname = page.locator("//input[@name = 'name_on_card']");
        this.cardnumber = page.locator("//input[@name = 'card_number']");
        this.cvc = page.locator("//input[@name = 'cvc']");
        this.expire = page.locator("//input[@name = 'expiry_month']");
        this.years = page.locator("//input[@name = 'expiry_year']");
        this.paybutton = page.locator("//button[@id= 'submit']");
        this.invoice = page.locator("//a[text() = 'Download Invoice']");
        this.continuebtn = page.locator("//a[text() = 'Continue']");
        this.uiActions = new UIActions(page);

        }

        async cartdetails(comment: string, cardnam: string,cardnum: string,cvv: string, expiry: string,
            year: string
        ) {
            await this.uiActions.click(this.cartclick);
            await this.uiActions.click(this.checkoutbtn);
            await this.uiActions.fill(this.reviewcomment, comment);
            await this.uiActions.click(this.placeorder);
            await this.uiActions.fill(this.cardname, cardnam);
            await this.uiActions.fill(this.cardnumber,cardnum);
            await this.uiActions.fill(this.cvc, cvv);
            await this.uiActions.fill(this.expire,expiry);
            await this.uiActions.fill(this.years, year);
            await this.uiActions.click(this.paybutton);
            await this.uiActions.click(this.invoice);
            await this.uiActions.click(this.continuebtn);
        }
    }

