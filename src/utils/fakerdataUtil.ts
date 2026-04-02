import {faker} from '@faker-js/faker';

export class FakerDataUtil {
  static generatename(): string {
    return faker.person.firstName();
  }

  static generatecountry(): string {
    return faker.location.country();
  }

  static generatecity(): string {
    return faker.location.city();
  }

  static generatecreditcard(): string {
    return faker.finance.creditCardNumber();
  }

  static generatemonth(): string {
    return faker.date.month();
  }

  // static generateyear(): string {
  //   return faker.date.future();
  // }
} 