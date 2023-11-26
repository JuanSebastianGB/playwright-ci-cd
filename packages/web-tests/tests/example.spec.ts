import { test, expect } from '@playwright/test';

test('Todo, should have an add todo and a remove todo ', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const buttonAdd = page.getByRole('button', { name: 'add todo' });
  expect(await buttonAdd.innerText()).toBe('add todo');

  const buttonRemove = page.getByRole('button', { name: 'remove todo' });
  expect(await buttonRemove.innerText()).toBe('remove todo');
});

test('Todo, should add and remove todos accordantly', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const list = page.locator('data-testid=list-container');

  expect(await list.locator('div').count()).toBe(3);

  const buttonAdd = page.getByRole('button', { name: 'add todo' });
  const buttonRemove = page.getByRole('button', { name: 'remove todo' });

  await buttonAdd.click();
  await buttonAdd.click();
  await buttonAdd.click();

  expect(await list.locator('div').count()).toBe(6);

  await buttonRemove.click();
  await buttonRemove.click();
  await buttonRemove.click();

  expect(await list.locator('div').count()).toBe(3);
});
