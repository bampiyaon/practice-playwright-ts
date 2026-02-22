import {chromium, test} from "@playwright/test"

test("First Test Script", async ({page}) => {
    
    //Page Fixture
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    
    await page.goto("https://www.google.com");
    await page.getByRole('button', { name: 'แอป Google' }).click();
    await page.locator('iframe[name="app"]').contentFrame().getByRole('link', { name: 'Maps, แถวที่ 1 จาก 5' }).click();
    console.log("Testing first script");
})

test("2nd Test Script", () => {
    console.log("Testing 2nd script");
})
