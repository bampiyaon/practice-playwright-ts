import {test} from "@playwright/test"

test("Locator", async({page}) =>{

    await page.goto("https://www.saucedemo.com");
    await page.locator("//*[@name='user-name']").fill("standard_user"); //XPath locater //*[@attributes='attributeValue]
    // use * instead of htmltag (like inout) to avoid when dev is changing the htmltag often so the code still good to go
    await page.locator('input#password').fill('secret_sauce'); //CSS Selectors htmltag#idValue
    await page.locator(`.submit-button`).click(); // CSS Selectors .classValue (name: in html)
    // await page.locator("text='Sauce Labs Backpack'").click() //Text with ' ' is Case Sensitive    
    await page.locator("text=Sauce LABS Backpack").click(); //without ' ' is Non Case Sensitive
    // await page.locator("#back-to-products").click();
    await page.locator("id=add-to-cart").click(); //using id, data-test-id, data-testfor value
    await page.locator("data-test=remove").click();
})