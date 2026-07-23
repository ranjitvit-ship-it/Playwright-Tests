import{test, expect} from '@playwright/test'

test("Browser fixture", async function({browser}){
  const context= await browser.newContext()
  const page= await context.newPage()
  await page.goto('http://www.google.com')
  const page1= await context.newPage()
  await page1.goto('http://www.facebook.com')

})

test('Page fixture', async({page})=>{
  await page.goto('http://www.google.com')  
})
