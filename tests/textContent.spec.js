const {test} = require('@playwright/test');

test.only('textContent vs allTextContents',async({page})=>{

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
    // console.log(await cardTitle.first().textContent())
    // console.log(await cardTitle.nth(1).textContent())
    // console.log(await cardTitle.last().textContent()) // returns single element.
    const allTitles = await cardTitle.allTextContents(); // could not get total elements because list (array) can return zero elements.
    console.log(allTitles);

})