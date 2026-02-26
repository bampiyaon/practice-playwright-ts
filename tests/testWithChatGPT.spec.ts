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
// ----------------------------------------------------------------------------------------

test("Challenge #1 easy check if the amount of product > 1", async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name: "Login"}).click();
    await expect(page.locator(".inventory_item")).not.toHaveCount(0);
})

test("Challenge #2 mid level verify badge = 2", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name: "Login"}).click();
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    await page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt').click();
    // await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('2');
})

test('Challenge #3 sort high to low and verify first expensive item', async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name: "Login"}).click();
    // await page.getByTestId('product-sort-container').click(); don't need this because selectOption will auto select it
    await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    // await expect(page.locator(".inventory_item_price").first()).toHaveText("$49.99"); Hard coded
    const prices = await page.locator(".inventory_item_price").allTextContents();
    const priceNumbers = prices.map(p => Number(p.replace('$', ''))); //transfer to number
    const sorted = [...priceNumbers].sort((a, b) => b - a); //copy array then sort
    expect(priceNumbers).toEqual(sorted); //assertion
})

test("Challenge #4 Add, Remove: verify badge cleared and Remove button revise to Add to art", async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name: "Login"}).click();
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
    await page.getByTestId('remove-sauce-labs-backpack').click();
    await expect(page.getByTestId('shopping-cart-badge')).not.toBeVisible();
    // await expect(page.getByTestId('shopping-cart-badge')).toHaveCount(0);
    await expect(page.getByTestId('add-to-cart-sauce-labs-backpack')).toBeVisible();

})

test("Challenge #5 Expert: Add 2 items, go to cart, verify item and price are consist", async({page}) => {
    
})