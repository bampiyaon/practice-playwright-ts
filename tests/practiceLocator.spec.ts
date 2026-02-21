import {test} from "@playwright/test"

test("Locator", async({page}) =>{

    await page.goto("https://www.saucedemo.com");
    await page.locator("//*[@name='user-name']").fill("standard_user"); //XPath locater //*[@attributes='attributeValue]



})
