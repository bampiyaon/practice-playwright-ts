import {expect, test} from "@playwright/test"

test("Assertion", async({page}) => {
    await page.goto("https://www.saucedemo.com/");

    await expect(page.getByTestId('login-button')).toHaveCount(1);
    await expect(page.getByTestId('login-button')).toBeEnabled();
    
})