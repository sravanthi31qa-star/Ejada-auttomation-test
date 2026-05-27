import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class CartPage extends BasePage {
  readonly checkoutBtn = '[data-test="checkout"]';
  readonly cartItems = '.cart_list';

  constructor(page: Page) {
    super(page);
  }

  async expectItemInCart() {
    await this.page.waitForSelector(this.cartItems);
    const count = await this.page.locator('.cart_item').count();
    if (count === 0) throw new Error('No items in cart');
  }

  async checkout() {
    await this.page.click(this.checkoutBtn);
  }
}
