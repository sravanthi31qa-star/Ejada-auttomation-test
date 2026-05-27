import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class CheckoutPage extends BasePage {
  readonly firstName = '#first-name';
  readonly lastName = '#last-name';
  readonly postalCode = '#postal-code';
  readonly continueBtn = '[data-test="continue"]';
  readonly finishBtn = '[data-test="finish"]';
  readonly completeHeader = '.complete-header';

  constructor(page: Page) {
    super(page);
  }

  async fillCheckout(first: string, last: string, postal: string) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, postal);
    await this.page.click(this.continueBtn);
  }

  async finishOrder() {
    await this.page.click(this.finishBtn);
    await expect(this.page.locator(this.completeHeader)).toBeVisible();
  }
}
