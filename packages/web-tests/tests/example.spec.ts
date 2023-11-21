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
  await page.goto('about:blank');
  await page.goto('http://localhost:3000/');
  await page.getByText('examples/basic web').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Docs -> Find in-depth' }).click();
  const page1 = await page1Promise;
  const turboLink = page1.getByRole('link', { name: 'Turborepo', exact: true });

  expect(turboLink).toBeVisible();
  await page1.getByRole('link', { name: 'Turborepo', exact: true }).click();
});
