import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});

test('testing external web page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const buttonText = page.getByRole('button', { name: 'click me' });
  expect(await buttonText.innerText()).toBe('click me');
});

test('testing the list functionality', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const list = page.locator('data-testid=list-container');

  expect(await list.locator('div').count()).toBe(3);

  const button = page.getByRole('button', { name: 'click me' });
  await button.click();

  expect(await list.locator('div').count()).toBe(4);
});
