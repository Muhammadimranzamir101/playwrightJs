const {test, expect} = require('@playwright/test');
const { use } = require('../playwright.config');

//Fixture is a global variable that is available to every test case in the project.

//browser --> chrome plugins/ cookies
test('Browser fixture Playwright test',async ({browser})=>{

    const context = await browser.newContext(); //opens a browser with no cookies and context (Fresh instance of browser)
    const page = await context.newPage(); // add a tab to opened browser

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').type('muhammadimranzamir786@gmail.com')
    await page.locator('#password').type('Mobile@2')
    await expect(page.locator('//input[@id="signInBtn"]'), 'should be visibble').toBeVisible(); //Custom Expect Message
    await page.locator('//input[@id="signInBtn"]').click()
    console.log(await page.locator("[style*='block']").textContent())
    //await expect.soft(page.locator("[style*='block']")).toContainText("Imran"); //Soft Assertion
    await expect(page.locator("[style*='block']")).toContainText("Incorrect"); //Normal
    await expect(page.locator("[style*='block']")).not.toContainText("Correct"); //Negating Matchers
    
})
