import { test, expect } from '@playwright/test';

test('sample test', async ({ page }) => {
	await page.goto('https://bookcart.azurewebsites.net/login');
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page).toHaveTitle(' Register');
    
});