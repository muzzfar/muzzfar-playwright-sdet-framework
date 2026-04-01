import { test, expect } from '@playwright/test';

test('API - Validate JSONPlaceholder user list @api', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');
  expect(response.ok()).toBeTruthy();
  const users = await response.json();
  expect(users.length).toBeGreaterThan(5);
  console.log('✅ API validation passed - Added by Muzzfar');
});