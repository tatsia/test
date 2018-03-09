import { HomePage } from './home.po';

import { defineSupportCode } from 'cucumber';


  const chai = require('chai').use(require('chai-as-promised'));
  const expect = chai.expect;

defineSupportCode(({ Given, When, Then }) => {
  const homePage = new HomePage();

  Given(/^я перехожу по ссылке$/, () => {
    homePage.navigateTo();
  });
  Given(/^я нажимаю на логотип в хедере сайта$/, () => {
    homePage.navigateTo();
    homePage.clickLogo();
  });
  Then(/^Сервис должен открыть главную страницу сайта$/, () => {
    homePage.checkIsDescriptorDisplayed().then(result => {
      expect(result).to.equal(true);
    });
  });

  Then(/^Сервис должен открыть главную страницу$/, () => {
    homePage.checkIsLogoDisplayed().then(result => {
      expect(result).to.equal(true);
    });
  });
  Then(/^Сервис должен отобразить иллюстрацию дескриптора$/, () => {
    homePage.checkIsDescriptorDisplayed().then(result => {
      expect(result).to.equal(true);
    });
  });
  Then(/^Сервис должен отобразить иллюстрацию схемы$/, () => {
    homePage.checkIsSchemeDisplayed().then(result => {
      expect(result).to.equal(true);
    });
  });
  Then(/^Сервис должен отобразить текст первого шага (.+)$/, {timeout: 60 * 1000}, (expectedText, callback) => {
    expectedText = expectedText.replace(/['"]+/g, '');
    homePage.getStepText('первого').then(actualText => {
      expect(actualText).to.equal(expectedText);
      callback();
    });
  });
  Then(/^Сервис должен отобразить текст второго шага (.+)$/, (expectedText, callback) => {
    expectedText = expectedText.replace(/['"]+/g, '');
    homePage.getStepText('второго').then(actualText => {
      expect(actualText).to.equal(expectedText);
      callback();
    });
  });
  Then(/^Сервис должен отобразить текст третьего шага (.+)$/, (expectedText, callback) => {
    expectedText = expectedText.replace(/['"]+/g, '');
    homePage.getStepText('третьего').then(actualText => {
      expect(actualText).to.equal(expectedText);
      callback();
    });
  });
  Then(/^Сервис должен отобразить текст четвертого шага (.+)$/, (expectedText, callback) => {
    expectedText = expectedText.replace(/['"]+/g, '');
    homePage.getStepText('четвертого').then(actualText => {
      expect(actualText).to.equal(expectedText);
      callback();
    });
  });
  Then(/^Сервис должен отобразить текст пятого шага (.+)$/, (expectedText, callback) => {
    expectedText = expectedText.replace(/['"]+/g, '');
    homePage.getStepText('пятого').then(actualText => {
      expect(actualText).to.equal(expectedText);
      callback();
    });
  });

  Then(/^Сервис должен отобразить кнопку (.+)$/, (buttonText, callback) => {
    buttonText = buttonText.replace(/['"]+/g, '').toLocaleLowerCase().trim();
    homePage.checkIsButtonDisplayed().then(bttnText => {
      expect(bttnText.toLocaleLowerCase().trim()).to.equal(buttonText);
      callback();
    });
  });
});
