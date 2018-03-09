///<reference path="../node_modules/@types/selenium-webdriver/index.d.ts"/>
import { browser, by, element, promise } from 'protractor';

export class HomePage {

  private proceedButton = element(by.css('a[class*="btn"]'));
  private stepsText = element.all(by.css('app-home-step'));
  private logo = element(by.cssContainingText('a.left.brand-logo', 'naakcii.by'));
  private imageDescriptor = element(by.css('div.homeSlider.amber'));

  navigateTo(): promise.Promise<void> {
    return browser.get('./');
  }

  checkIsSchemeDisplayed(): promise.Promise<boolean> {
    browser.executeScript('arguments[0].scrollIntoView();', this.stepsText.get(0).getWebElement());
    return this.stepsText.get(0).isDisplayed();
  }
  getStepText(step: string): promise.Promise<string>  {
    switch (step) {
      case 'первого': {
        return this.stepsText.get(0).getAttribute('ng-reflect-text');
      }
      case 'второго': {
        return this.stepsText.get(1).getAttribute('ng-reflect-text');
      }
      case 'третьего': {
        return this.stepsText.get(2).getAttribute('ng-reflect-text');
      }
      case 'четвертого': {
        return this.stepsText.get(3).getAttribute('ng-reflect-text');
      }
      case 'пятого': {
        return this.stepsText.get(4).getAttribute('ng-reflect-text');
      }
      default: {
        return promise.rejected('There are not elements');
      }
    }
  }
  checkIsButtonDisplayed(): promise.Promise<string> {
    browser.executeScript('arguments[0].scrollIntoView();', this.proceedButton.getWebElement());
    return this.proceedButton.getText();
  }
  checkIsLogoDisplayed(): promise.Promise<boolean> {
    return this.logo.isDisplayed();
  }
  clickLogo() {
    this.checkIsLogoDisplayed().then(value => {
      value ? this.logo.click() : promise.rejected('Logo is not displayed');
    });
    this.logo.click();
  }
  checkIsDescriptorDisplayed(): promise.Promise<boolean> {
    return this.imageDescriptor.isDisplayed();
  }

}
