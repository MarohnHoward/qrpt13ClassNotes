import * as Shows from './showToGoogle.json'; 
import { WebDriver, Builder, Capabilities, By, until, WebElement } from 'selenium-webdriver';
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

Shows.forEach((shows) => {
    test(`searching google for ${shows}`, async () => {
        await driver.get('https://www.google.com/'); 
        await driver.wait(until.elementLocated(By.name('q'))); 
        await driver.findElement(By.name('q')).sendKeys(`${shows}\n`); 
        await driver.quit(); 
    }); 
}); 
