import {expect, test} from "@playwright/test"


test("Demo Testing #1", async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name:"Login"}).click();
    await expect(page.locator("text='Products'")).toBeVisible();
})

test("Demo Testin #2", async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("locked_out_user");
    await page.getByPlaceholder("password").fill("secret_sauce");
    await page.getByRole("button", {name:"Login"}).click();
    await expect(page.locator("text=Sorry, this user has been locked out.")).toBeVisible();
})

test("Demo Testing #3", async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name:"Login"}).click();
    await page.locator("button#add-to-cart-sauce-labs-bike-light").click();
    await expect(page.locator("data-test=shopping-cart-badge")).toHaveCount(1);
})

test("Demo Testing #4", async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name:"Login"}).click();
    await page.locator("button#add-to-cart-sauce-labs-bike-light").click();
    await page.locator("button#remove-sauce-labs-bike-light").click();
    await expect(page.locator("data-test=shopping-cart-badge")).not.toBeVisible();
})

test("Demo Testing #5", async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name:"Login"}).click();
    await page.locator('[data-test="product-sort-container"]').selectOption("lohi");
    await expect(page.locator('.inventory_item_price').first()).toHaveText("$7.99"); // using div class=inventory_item_price
    // .first() using for locate it is first element, there are .nth(0) also = first
    // .last() is for last elements 
    // .nth(4) = 3rd elements
    // using when the there are many locators
})

test("Challenge #1 easy check if the amount of product > 1", async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name: "Login"}).click();
    await expect(page.locator(".inventory_item")).not.toHaveCount(0);
})