import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class EmployeePage extends BasePage {
  readonly addEmployeeBtn: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly saveBtn: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.addEmployeeBtn = page.locator('button.oxd-button--secondary');
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.saveBtn = page.locator('button[type="submit"]');
    this.successMessage = page.locator('text=Successfully Saved');
  }

  async addNewEmployee(firstName: string, lastName: string) {
    await this.addEmployeeBtn.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveBtn.click();
    await this.successMessage.waitFor({ timeout: 10000 });
  }
}