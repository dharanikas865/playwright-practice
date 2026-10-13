// // amazon task
// import{test,expect} from '@playwright/test';
// test('amazon functionality',async({page})=>{
//  await page.goto('https://www.amazon.in');
//  console.log(await page.title());
//  const a=page.locator('//i[contains(@class,"hm-icon nav-sprite")]') //By class
//  await a.click();
//  console.log("All menu clicked successfully");
// //  const b = page.getByrole('//a[@data-ref-tag="nav_em_1_1_1_6" and @data-menu-id="3"]')
// //  // By any attribute
// //  await b.click();
// //  console.log("fire tv clicked successfully");
// // }); 
// const b=page.getByRole('link',{name:'Fire TV',exact:true});
// console.log(await b.count() );
// await b.click();
// });

// confirmation alert
// import { test, expect } from '@playwright/test';
// test('Alert handle', async ({ page }) => {
//     await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
//     console.log("Application is launched successfully");
//     page.once('dialog', async dialog => { 
//         console.log(dialog.message());  
//         await dialog.accept();        
//     });
//     await page.getByText('Confirmation Alert').click();
//     console.log("Confirmation Alert is clicked");
// });

// prompt alert
import { test, expect } from '@playwright/test';
test('Alert handle', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    console.log("Application is launched successfully");
    page.once('dialog', async dialog => { 
        console.log(dialog.message());  
        await dialog.accept("hello");        
    });
    await page.getByText('Prompt Alert').click();
    console.log("Prompt Alert is clicked");
});


