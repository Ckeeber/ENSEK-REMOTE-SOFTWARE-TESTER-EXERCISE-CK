import { test, expect, Page } from '@playwright/test';
import { ensekSite } from '../framework/ensekCandiateSite';
import { ensekAboutPage } from '../framework/aboutPageElements';
import { ensekNavBar } from '../framework/navBannerElements';
import { abort } from 'process';
import { ensekHomePage } from '../framework/homePageElements';


test('Load website successfully', async ({ page }) => {

const CandiateTest = new ensekSite(page);

await CandiateTest.goto();
await CandiateTest.getStarted();
// check correct page has loaded with correct responses api response

const response = await page.request.get('https://ensekautomationcandidatetest.azurewebsites.net/');
await expect(response).toBeOK();

});


test('Load about page successfully', async ({ page }) => {

    const CandiateTest = new ensekSite(page);
    const Nav =  new ensekNavBar(page);
    
    await CandiateTest.goto();
    await CandiateTest.getStarted();
   // Navigate to the about page
    await Nav.aboutButton();
    // check correct page has loaded with correct responses api response
    const response = await page.request.get('https://ensekautomationcandidatetest.azurewebsites.net/Home/About');
    await expect(response).toBeOK();
    
    });

    test('Load Contact page successfully', async ({ page }) => {

        const CandiateTest = new ensekSite(page);
        const Nav =  new ensekNavBar(page);
        
        await CandiateTest.goto();
        await CandiateTest.getStarted();
       // Navigate to the about page
        await Nav.contactButton();
        // check correct page has loaded with correct responses api response
        const response = await page.request.get('https://ensekautomationcandidatetest.azurewebsites.net/Home/Contact');
        await expect(response).toBeOK();
        
        });

     test('Load Register page successfully', async ({ page }) => {

        const CandiateTest = new ensekSite(page);
        const Nav =  new ensekNavBar(page);
            
        await CandiateTest.goto();
        await CandiateTest.getStarted();
           // Navigate to the about page
        await Nav.registerButton();
            // check correct page has loaded with correct responses api response
        const response = await page.request.get('https://ensekautomationcandidatetest.azurewebsites.net/Account/Register');
        await expect(response).toBeOK();
            
     });

     test('Load login page successfully', async ({ page }) => {

        const CandiateTest = new ensekSite(page);
        const Nav =  new ensekNavBar(page);
            
        await CandiateTest.goto();
        await CandiateTest.getStarted();
           // Navigate to the about page
        await Nav.registerButton();
            // check correct page has loaded with correct responses api response
        const response = await page.request.get('https://ensekautomationcandidatetest.azurewebsites.net/Account/Login');
        await expect(response).toBeOK();
            
     });

     test('Load buy some energy', async ({ page }) => {

      const CandiateTest = new ensekSite(page);
      const Nav =  new ensekNavBar(page);
      const Home = new ensekHomePage(page);
          
      await CandiateTest.goto();
      await CandiateTest.getStarted();
         // Navigate to the about page
      await Home.buyEnergyButton();
          // check correct page has loaded with correct responses api response
      const response = await page.request.get('https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy');
      await expect(response).toBeOK();

     });

     test('Load Sell some energy', async ({ page }) => {

      const CandiateTest = new ensekSite(page);
      const Nav =  new ensekNavBar(page);
      const Home = new ensekHomePage(page);
          
      await CandiateTest.goto();
      await CandiateTest.getStarted();
         // Navigate to the about page
      await Home.sellEnergyButton();
          // check correct page has loaded with correct responses api response
      const response = await page.request.get('https://ensekautomationcandidatetest.azurewebsites.net/Energy/Sell');
      await expect(response).toBeOK();

     });

     test('Load About us ', async ({ page }) => {

      const CandiateTest = new ensekSite(page);
      const Nav =  new ensekNavBar(page);
      const Home = new ensekHomePage(page);
          
      await CandiateTest.goto();
      await CandiateTest.getStarted();
         // Navigate to the about page
      await Home.aboutUsButton();
          // check correct page has loaded with correct responses api response
      const response = await page.request.get('https://ensekautomationcandidatetest.azurewebsites.net/Home/About');
      await expect(response).toBeOK();

     });

 