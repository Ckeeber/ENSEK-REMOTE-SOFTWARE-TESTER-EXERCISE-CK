import { type Page } from '@playwright/test';

export class ensekHomePage
{
    readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
//// elements that have been added to the home page functionaliy. These are clickable elements

  async findOutMore()

  {
    await this.page.getByText('Find out more »').click();
  }

  async buyEnergyButton()
  {
    await this.page.getByText('Buy energy »').click();
  }

  async sellEnergyButton()
  {
    await this.page.getByText('Sell energy »').click();
  }

  async aboutUsButton()
  {
    await this.page.getByText('Learn more »').click();
  }

}