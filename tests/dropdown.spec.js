const {test, expect} = require('@playwright/test');
const { use } = require('../playwright.config');

test.only('select from dropdown', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const dropdown = page.locator('select.form-control')
    await dropdown.selectOption('consult') //Selecting dropdown
    await page.locator('.radiotextsty').last().click(); //Selecting radio button
    await page.locator('#okayBtn').click()
    await expect(page.locator('.radiotextsty').last()).toBeChecked() // asserts whether checked or not
    console.log(await (page.locator('.radiotextsty').last().isChecked())) // returns true or false
    await page.locator('#terms').click()
    await page.locator('#terms').uncheck()
    expect(await page.locator('#terms').isChecked()).toBeFalsy()
    await expect(page.locator('a[href*="request"]')).toHaveAttribute('class','blinkingText') //Validating CSS attribute
    await expect(page.locator('a[href*="request"]')).toHaveClass('blinkingText') //Validating Class name
    await page.pause()
})