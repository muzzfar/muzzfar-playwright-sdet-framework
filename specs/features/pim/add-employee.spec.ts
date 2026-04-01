import { test, expect } from '@playwright/test';
import { EmployeePage } from '../../../lib/pages/pim/EmployeePage';

test('PIM - Add new employee @regression @pim', async ({ page }) => {
  const employeePage = new EmployeePage(page);
  await employeePage.addNewEmployee('Muzzfar', 'Akhoon');
  await expect(employeePage.successMessage).toBeVisible();
  console.log('✅ New employee added successfully - Test by Muzzfar');
});