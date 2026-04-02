import {Page, Locator} from '@playwright/test'; 
import { BasePage } from '../core/basePage';
import { UIActions } from '../actions/uiActions';
//import { Constants } from '../utils/constants';

export class LoginPage extends BasePage {

   private loginemail: Locator; 
   private loginpasswrd: Locator;
   private loginbt: Locator;
   private signinclick:Locator;
   private subscription: Locator;
   private subclick: Locator;
   //private scrollup: Locator;
   private uiActions: UIActions; 
   private addcart: Locator; 
   private viewproduct: Locator;
   private yourname: Locator;
   private emailaddress:Locator; 
   private addreview: Locator;
   private continue: Locator;
   


  constructor(page: Page){
    super(page); 
    this.signinclick = page.locator("//a[text() =' Signup / Login']");
    this.loginemail = page.locator("(//input[@name = 'email'])[1]");
    this.loginpasswrd = page.locator("//input[@name = 'password']");
    this.loginbt = page.locator("//button[text() ='Login']");
    this.subscription = page.locator("//input[@id = 'susbscribe_email']");
    this.subclick = page.locator("//button[@id = 'subscribe']");
    //this.scrollup = page.locator("//a[@id = 'scrollUp']");
    this.viewproduct = page.locator("(//a[i[contains(@class,'fa-plus-square')]])[1]");
    this.addcart = page.locator("//button/i[@class = 'fa fa-shopping-cart']");
    this.yourname = page.locator("//input[@id = 'name']");
    this.emailaddress = page.locator("//input[@id = 'email']");
    this.addreview = page.locator("//textarea[@id = 'review']");
    this.continue = page.getByRole('button', {name: 'Continue Shopping'});
    this.uiActions = new UIActions(page);
   
  } 

   async loginpage() {
    await this.uiActions.click(this.signinclick); 
   }

   async logindetails(email: string, pass: string, mail: string) {
    await this.uiActions.fill(this.loginemail, email);
    await this.uiActions.fill(this.loginpasswrd, pass);
    await this.uiActions.click(this.loginbt);
    await this.uiActions.fill(this.subscription, mail);
    await this.uiActions.click(this.subclick);
    //await this.uiActions.click(this.scrollup);

  } 

  async productdetails(name: string, email: string, review: string) {
    await this.uiActions.click(this.viewproduct);
    await this.uiActions.click(this.addcart);
    await this.uiActions.fill(this.yourname,name);
    await this.uiActions.fill(this.emailaddress, email);
    await this.uiActions.fill(this.addreview, review);
    await this.uiActions.click(this.continue);

  }

}
