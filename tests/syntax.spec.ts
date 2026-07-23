import {test, expect} from 'playwright/test';

// Category Group Container Layer
test.describe('syntax validation suite' ,()=>{


// Individual Test Layer
test('Should handle complex nesting of configuration rules', async({page})=>{

await page.goto('https://demo.playwright.dev/todomvc/#/');
// Exercise: Note how the action box () encapsulates the options list {}
    const mainHeading = page.getByRole('heading', { name: 'todos' });
    await expect(mainHeading).toBeVisible({timeout: 5000});

});
});