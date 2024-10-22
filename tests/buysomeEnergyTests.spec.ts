import { test, expect, Page } from '@playwright/test';
import { beforeEach } from 'node:test';
import { ensekSite } from '../framework/ensekCandidateSite';
import { ensekHomePage } from '../framework/homePageElements';
import { energyBuy } from '../framework/buyenergyPageelements';



   



test('buy some Gas', async ({ page }) => {
const Energy = new energyBuy(page);
const CandidateTest = new ensekSite(page);
const Home = new ensekHomePage(page);

await CandidateTest.goto();
await CandidateTest.getStarted();
const response = await page.request.get('https://ensekautomationcandidatetest.azurewebsites.net/');
await expect(response).toBeOK();
await Home.buyEnergyButton();
const responsehome = await page.request.get('https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy');
await expect(responsehome).toBeOK();

    await expect(page.locator('h2', { hasText: 'Buy Energy'})).toBeVisible();
    await Energy.resetEnergy();
    await Energy.buyGasEnergy('2000');
    await Energy.buyMore();
    await expect(page.locator('td').nth(2)).toHaveText('1000')
    await Energy.buyElectricityEnergy('4000');
    await Energy.buyMore();
    await expect(page.locator('td').nth(12)).toHaveText('322')
    await Energy.buyOilEnergy('10');
    await Energy.buyMore();
    await expect(page.locator('td').nth(17)).toHaveText('10')

    })

    test('api testing ', async ({ page }) => {

        // login using api 

        const postAPIResponse = await page.request.post('https://qacandidatetest.ensek.io/ENSEK/login',{
            data: {
                "username": "test",
                "password": "testing"
            }
        })
        await expect(postAPIResponse.ok()).toBeTruthy();
        const postAPIResponseBody = await postAPIResponse.json();
        console.log(postAPIResponseBody);

    
        const OrderAPI = await page.request.get('https://qacandidatetest.ensek.io/ENSEK/orders');
        await expect(OrderAPI.ok()).toBeTruthy();
        const getResponse = await OrderAPI.json();
        /// Amount returned can be view able from the consol log when Debugging
        console.log(getResponse.length); /// this returns a value of 8 
    




       
        
        


    
    })
