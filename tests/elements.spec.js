const {test, expect} = require('@playwright/test');

test.only('Login and validation',async({page})=>{

    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('//input[@id="signInBtn"]')
    const cardTitle = page.locator('.card-title a')

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    await userName.type('rahulshettyacademy')
    await userName.fill('')
    await userName.type('rahulshettyacademy')
    await password.fill('learning')
    await signInBtn.click()
    await page.waitForNavigation()
    console.log(await page.locator('app-card-list[class="row"]>app-card:nth-child(1) h4').textContent())
    console.log(await cardTitle.first().textContent())
    console.log(await cardTitle.nth(1).textContent())
    console.log(await cardTitle.last().textContent()) // returns single element.
    const allTitles = await cardTitle.allTextContents(); 
    console.log(allTitles);

})