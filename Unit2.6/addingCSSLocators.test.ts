//! first step import from selenium
import { Builder, By, Capabilities, until, WebDriver, WebElement } from "selenium-webdriver";
//! set chromedriver so we can use it in our builder class 
const chromedriver = require('chromedriver'); 
//! Make a new instance of the chrome builder to create our chrome browser 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

describe('practicing css locators', () => {
    beforeEach(async () => {
        await driver.get("https://www.amazon.com"); 
    }); 
    afterAll(async () => {
        await driver.quit(); 
    }); 

    const searchBar: By = By.id('twotabsearchtextbox'); 
    const results: By = By.css('.s-main-slot'); 

    test("searching for a turkey brine kit", async () => {
        await driver.sleep(2000)
        await driver.findElement(searchBar).sendKeys("turkey brine kit\n"); 
        let resultsText = await driver.findElement(results).getText(); 
        expect(resultsText).toContain('Turkey Brine')
    }); 

}); 