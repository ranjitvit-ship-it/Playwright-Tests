import { test, expect } from '@playwright/test';

test.describe('Enterprise Portal Navigation', () => {

  test('Should handle user-centric element tracking securely', async ({ page }) => {
    // Navigate using our Day 2 BaseURL configuration strategy
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    // Target the main input box by its placeholder
    const taskInput = page.getByPlaceholder('What needs to be done?');
    await taskInput.fill('Deploy code to staging production');
    await taskInput.press('Enter');

    // Filter a list item based on text context to find a specific checkbox
    await page.getByRole('listitem')
      .filter({ hasText: 'Deploy code to staging production' })
      .getByRole('checkbox')
      .check();

    // Verify state using a clean assertion
    await expect(page.getByText('0 items left')).toBeVisible();
  });

});