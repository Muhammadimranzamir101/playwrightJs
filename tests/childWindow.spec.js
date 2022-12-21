const {test, expect} = require('@playwright/test');

test('Handling tabs in playwright',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const userName = page.locator('#username')
    const pwd = page.locator('#password')
    const loginBtn = page.locator('#signInBtn')
    const documentLink = page.locator('a[href*="request"]');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ])

    const text = await newPage.locator('p.red').textContent()
    const email = text.match(/([a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+)/gi);
    console.log(email)
    await page.bringToFront();
    await page.waitForTimeout(1000)
    // await newPage.bringToFront();
    // await newPage.waitForTimeout(1000)
    // await page.bringToFront();
    // await page.waitForTimeout(1000)
    
    await userName.type(...email);
    await pwd.type("learning")
    await page.waitForTimeout(10000)

})

test.only('Handling child windows in playwright', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator('#openwindow').click()
    ])

    const text = await newPage.locator('div.text-center h2').first().textContent();
    await page.waitForTimeout(2000)
    console.log(text);

    await page.bringToFront();
    await page.locator('#name').type("Child Window")
    await page.waitForTimeout(10000)
    
})