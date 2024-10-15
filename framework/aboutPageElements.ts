import { expect, type Page } from '@playwright/test';

export class ensekAboutPage
{
    readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

async findOutMoreButton()
{
    await this.page.getByText('Find out more about us »').click()
}
}