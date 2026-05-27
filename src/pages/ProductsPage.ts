import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class ProductsPage extends BasePage {
  readonly inventory = '.inventory_list';
  readonly addToCartBtn = 'button[id^="add-to-cart"]';
  readonly cartLink = '.shopping_cart_link';

  constructor(page: Page) {
    super(page);
  }

  async addFirstProductToCart() {
    await this.page.waitForSelector(this.inventory);
    const addBtn = this.page.locator(this.addToCartBtn).first();
    await addBtn.click();
  }

  async gotoCart() {
    await this.page.click(this.cartLink);
  }
}
