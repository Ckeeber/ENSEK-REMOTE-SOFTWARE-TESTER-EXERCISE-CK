import { expect, type Page } from '@playwright/test';
import { type } from 'node:os';

export class energyBuy{

    readonly page: Page;
    constructor(page: Page) {
      this.page = page;
    }

async resetEnergy()
{
   await this.page.locator('[name=Reset]').click();
}

async buyGasEnergy(Answer)
{
  await this.page.locator('[name="energyType.AmountPurchased"]').nth(0).fill(Answer);
   await this.page.locator('[name=Buy]').nth(0).click();
}

async buyElectricityEnergy(Answer)
{
  await this.page.locator('[name="energyType.AmountPurchased"]').nth(1).fill(Answer);
   await this.page.locator('[name=Buy]').nth(1).click();
}
async buyOilEnergy(Answer)
{
  await this.page.locator('[name="energyType.AmountPurchased"]').nth(2).fill(Answer);
   await this.page.locator('[name=Buy]').nth(2).click();
}

async buyMore()
{
  await this.page.getByText('Buy more »').click();
}



}