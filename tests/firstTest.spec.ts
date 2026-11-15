import {test ,expect} from '@playwright/test'
test.only("First test", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")    
await page.locator ('input#name').fill("Ranjit Kumar")

})