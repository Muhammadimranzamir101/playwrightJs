const {test, expect} = require('@playwright/test');

//Fixture is a global variable that is available to every test case in the project.

test('Browser fixture Playwright test',async ({browser})=>{

    const context = await browser.newContext(); //opens a browser with no cookies and context (Fresh instance of browser)
    const page = await context.newPage(); // add a tab to opened browser

    await page.goto('https://www.daraz.pk/')
    await page.waitForLoadState('load');
    await page.locator('button[class="airship-btn airship-btn-deny"]').click();
    
})