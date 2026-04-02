import {Page, Locator} from '@playwright/test'; 
import { BasePage } from '../core/basePage';
import { UIActions } from '../actions/uiActions';
import { Constants } from '../utils/constants';

export class RegisterPage extends BasePage {

    private signup: Locator; 
    private name: Locator; 
    private email: Locator; 
    private signupbtn: Locator;
    private title: Locator;
    private password: Locator;
    private date: Locator; 
    private month: Locator;
    private year: Locator;
    private newsletter: Locator;
    private specialoffers: Locator; 
    private addressfirstname: Locator; 
    private addresslastname: Locator;
    private company: Locator;
    private address1: Locator;
    private country: Locator;
    private state: Locator;
    private city: Locator;
    private zipcode: Locator;   
    private mobile: Locator;
    private createaccount: Locator;
    //private accountcreated: Locator;
    private continue: Locator;
    private logout: Locator;
    private uiActions: UIActions;

   constructor(page: Page){

    super(page);
    this.uiActions = new UIActions(page);
    this.signup = page.locator("//a[text() =' Signup / Login']");
    this.name = page.locator("//input[@placeholder = 'Name']");
    this.email = page.locator("(//input[@placeholder = 'Email Address'])[2]");
    this.signupbtn = page.getByRole("button", {name: 'Signup'});
    this.title = page.locator("//input[@id = 'id_gender2']");
    this.password = page.locator("//input[@id = 'password']");
    this.date = page.locator("//select[@id = 'days']");
    this.month = page.locator("//select[@id='months']");
    this.year = page.locator("//select[@id='years']");
    this.newsletter = page.locator("//input[@id='newsletter']");
    this.specialoffers = page.locator("//input[@id = 'optin']");
    this.addressfirstname = page.locator("//input[@id = 'first_name']");
    this.addresslastname = page.locator("//input[@id = 'last_name']");
    this.company = page.locator("//input[@id = 'company']");
    this.address1 = page.locator("//input[@id = 'address1']");
    this.country = page.locator("//select[@id = 'country']");
    this.state = page.locator("//input[@id = 'state']");
    this.city = page.locator("//input[@id = 'city']");
    this.zipcode = page.locator("//input[@id = 'zipcode']");
    this.mobile = page.locator("//input[@id = 'mobile_number']");
    this.createaccount = page.getByRole("button", {name: "Create Account"});
    //this.accountcreated = page.getByText('Account Created!', { exact: true })
    this.continue = page.locator("//a[text() = 'Continue']");
    this.logout = page.locator("//div//li//a[text() = ' Logout']");
   }

   async navigateTo() {
    await this.uiActions.navigateTo(Constants.BASE_URL);  
   }

   async registerpage() {
    await this.uiActions.click(this.signup); 
    await this.uiActions.fill(this.name, Constants.USERNAME);
    await this.uiActions.fill(this.email,Constants.EMAIL);
    await this.uiActions.click(this.signupbtn);
   } 

   async signuppage() {
    await this.uiActions.click(this.title);
    await this.uiActions.fill(this.password, Constants.PASSWORD);
}

   async DOB(day: string, month: string, year: string) {
    await this.date.selectOption(day);
    await this.month.selectOption(month);
    await this.year.selectOption(year);
   }

   async letter() {
    await this.uiActions.click(this.newsletter);
    await this.uiActions.click(this.specialoffers);
   }


   async addressinfo(firstname: string, 
                 lastname: string, 
                comp: string, 
                add: string) {
    await this.uiActions.fill(this.addressfirstname, firstname);
    await this.uiActions.fill(this.addresslastname, lastname);
    await this.uiActions.fill(this.company, comp);
    await this.uiActions.fill(this.address1, add); }

    async address2(coun: string){
        await this.country.selectOption(coun);
    }
    async details(stat: string, 
                cit: string,
                zip: string, 
                mob: string) {

     
    await this.uiActions.fill(this.state,stat);
    await this.uiActions.fill(this.city,cit);
    await this.uiActions.fill(this.zipcode,zip);
    await this.uiActions.fill(this.mobile,mob);
    await this.uiActions.click(this.createaccount);
    // await this.uiActions.getText(this.accountcreated);
    await this.uiActions.click(this.continue);
    await this.uiActions.click(this.logout);

                }

   
   }

