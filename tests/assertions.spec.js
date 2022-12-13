const { test, expect } = require('@playwright/test');
const { use } = require('../playwright.config');

test('Normal Assertion in playwright', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').type('muhammadimranzamir786@gmail.com')
    await page.locator('#password').type('Mobile@2')
    await page.locator('//input[@id="signInBtn"]').click()
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText("Incorrect"); //Normal Assertion
})

test('Assertion with custom expect message in playwright', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').type('muhammadimranzamir786@gmail.com')
    await page.locator('#password').type('Mobile@2')
    await expect(page.locator('//input[@id="signInBtn"]'), 'should be visibble').toBeVisible(); //Custom Expect Message
    await page.locator('//input[@id="signInBtn"]').click()
})

test('Negating matchers assertion', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').type('muhammadimranzamir786@gmail.com')
    await page.locator('#password').type('Mobile@2')
    await page.locator('//input[@id="signInBtn"]').click()
    await expect(page.locator("[style*='block']")).not.toContainText("Correct"); //Negating Matchers
})


test('Soft assertion in playwright', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').type('rahulshettyacademy')
    await page.locator('#password').type('Mobile@2')
    await expect(page.locator('//input[@id="signInBtn"]'), 'should be visibble').toBeVisible(); //Custom Expect Message
    await page.locator('//input[@id="signInBtn"]').click()
    console.log(await page.locator("[style*='block']").textContent())
    await expect.soft(page.locator("[style*='block']")).toContainText("Imran"); //Soft Assertion
    await page.locator('#password').fill('')
    await page.locator('#password').type('learning')
    await page.locator('//input[@id="signInBtn"]').click()
    await page.waitForNavigation()
})

test.only('Polling in playwright', async ({page})=>{
    await expect.poll(async () => {
        const response = await page.request.get('https://dummyjson.com/products/1');
        const jsonBody = await response.json()
        console.log("Response",jsonBody);
        //return jsonBody.id;
        return response.status();
      }, {
        message: 'Try Again',
        timeout: 10000,
      }).toBe(200);
})