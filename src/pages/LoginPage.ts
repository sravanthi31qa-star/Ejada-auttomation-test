import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  readonly username = '#user-name';
  readonly password = '#password';
  readonly loginBtn = '#login-button';
  readonly error = '[data-test="error"]';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }

  async expectErrorVisible() {
    await expect(this.page.locator(this.error)).toBeVisible();
  }
}
