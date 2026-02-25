import {expect, test} from "@playwright/test"
import { buffer } from "node:stream/consumers";

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

test("Locator Options argument", async ({page}) => {
    await page.goto("https://www.saucedemo.com");
    await page.locator(".form_group", {has: page.locator("input#user-name")}).click();
    await page.locator(".form_group", {has: page.locator("input#user-name")}).pressSequentially("standard_user");
    // has: using for locate the unique value when there are several elements (in this case div class = form_group)

    await page.locator(".form_group", {hasNot: page.locator("input#user-name")}).click();
    await page.locator(".form_group", {hasNot: page.locator("input#user-name")}).pressSequentially("secret_sauce");
    //hasNot detect the 2nd div (which is password) instead because it's not have id=user-name 

    await page.locator("input#login-button").click();

    await page.locator("//a", {hasText:("Sauce Labs Backpack")}).click(); //detect specific text
    // // //a is for locator "href"

    await page.locator("button#back-to-products").click();
    await page.locator(".inventory_item_name ", {hasNotText: /Sauce.*/}).click(); 
    //Sauce.* which .* means all straing that start with Sauce
})

test("Practice getBy method", async({page}) => {
    await page.goto("https://demo.nopcommerce.com/login");
    await page.getByLabel("Email:", {exact: true}).fill("test@mail.com");
    await page.getByPlaceholder("Search store").fill("phone");
    await page.getByText("Welcome").textContent();
    await page.getByAltText("nopCommerce demo store").click();
    await page.getByTitle("Featured products").highlight();
    await page.getByRole("button", {name: "Add to cart"}).first().click();
})

test("Practice grtByTestId method", async({page}) => {
    await page.goto("https://www.saucedemo.com");
    await page.getByTestId("username").fill("visual_user"); //need to add testIdAttribute: 'data-test' in config file
    //then using test-data to input for getByTestId
})