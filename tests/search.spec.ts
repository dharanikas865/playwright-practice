// import{test,expect,chromium} from '@playwright/test';
// test('search functionality',async({page})=>{
//     const browser = await chromium.launch({headless: false});
//     const context = await browser.newContext();
//     await page.goto('https://www.google.com/');
//     console.log(await page.title());
//     const a=page.getByRole('combobox',{name:'search'})
//     await a.fill("Playwright");
//     console.log("Entered the playwright in search bar")
//     await a.press('Enter');
//     console.log("Enter button is clicked")

// });

// task getbylabel 
// import{test,expect,chromium} from '@playwright/test';
// test('textbox functionality',async({page})=>{
//    const browser = await chromium.launch({headless: false});
//    const context = await browser.newContext();
//    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
//    console.log(await page.title());
//    const a=page.getByLabel('Email Address:')
//    await a.fill("dharanikas2005");
//    console.log("entered the email address in the text box")
//    const b=page.getByLabel('password:')
//    await b.fill("123456");
//    console.log("entered the password in the text box")
//    const c=page.getByLabel('your age:')
//    await c.fill("12");
//    console.log("entered the age in the text box");   
// });

// search functionality;
// import{test,expect,chromium} from '@playwright/test';
// test('search functionality',async({page})=>{
//     const browser = await chromium.launch({headless: false});
//     const context = await browser.newContext();
//     await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
//  const g=page.getByPlaceholder('Enter your full name')
//    await g.fill("dharanika s");
//    console.log("entered the full name");
//    const h=page.getByPlaceholder('Phone number (xxx-xxx-xxxx)')
//    await h.fill("1234567890");
//    console.log("entered the phone number");
//    const i=page.getByPlaceholder('Type your message here...')
//    await i.fill("Hello");
//    console.log("entered the message");
//     const j=page.getByPlaceholder('Search products...')
//     await expect(j).toBeVisible();
//     await j.fill('car');
//     console.log("entered the product name");
//     await j.press('Enter');
//     console.log("performed the search");
// });
  

// getByAltText() Locators
// import{test,expect,chromium} from '@playwright/test';
// test('logo functionality',async({page})=>{
// const browser = await chromium.launch({headless: false});
// const context = await browser.newContext();
// await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
// console.log(await page.title());
// const a=page.getByAltText('logo image')
// await expect(a).toBeVisible();
// console.log("logo image is present in the page");
// });

// // getByAltTitile() Locators
// import{test,expect,chromium} from'@playwright/test';
// test('title functionality' ,async({page})=>{
//     const browser = await chromium.launch({headless: false});
//     const context = await browser.newContext();
// await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
// console.log(await page.title());
// const a=page.getByTitle('Home page link')
// await expect(a).toBeVisible();
// console.log("home page link is present in the page");
// const b=page.getByTitle('HyperText Markup Language')
// await expect(b).toBeVisible();
// console.log("HTML title is present in the page");
// const c=page.getByTitle('Tooltip text')
// await expect(c).toBeVisible();
// console.log("Tooltip text is present in the page");
// });

// getByRole() Locators
// import{test,expect,chromium} from '@playwright/test';
// test('button functionality',async({page})=>{
// const browser = await chromium.launch({headless: false});
// const context = await browser.newContext();
//     await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
//     console.log(await page.title());
//     const a=page.getByRole('button',{name:'Primary Action'})
//     await expect(a).toBeVisible();
//     console.log("Primary Action button is present in the page");
//     const b=page.getByRole('button',{name:'Toggle Button'})
//     await expect(b).toBeVisible();
//     console.log("Toggle Button is present in the page");
//     const c=page.getByLabel('Username:')
//     await c.type("dharanika ");
//     console.log("entered the username in the text box");
//     const d=page.getByLabel('Accept terms')
//     await d.check();
//     console.log("checked the accept terms checkbox");
// });