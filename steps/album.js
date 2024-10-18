  const { Given, When, Then } = require('@cucumber/cucumber');
  const { chromium } = require('playwright');
  const assert = require('assert');

  let browser, page;

  Given('I am on the login page', async function () {
    // Launch the browser
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();

    // Navigate to the login page
    await page.goto('http://localhost:3000/');
    await page.click('xpath=//*[@id="root"]/div/button'); // Click on a button to go to the login page
  });

  When('I enter {string} as email', async function (email) {
    // Fill in the email field
    await page.fill('input[type="email"]', email);
  });

  When('I enter {string} as password', async function (password) {
    // Fill in the password field
    await page.fill('input[type="password"]', password);
  });

 When('I click on the login button', async function () {
  // Wait for the login button to be visible
  await page.waitForSelector('//*[@id="root"]/div/form/button', { timeout: 5000 });
  await page.click('//*[@id="root"]/div/form/button');
  await page.waitForNavigation();
});
  When('I click on the Album tile', async function () {
    // Click on the Album tile
    await page.click('xpath=/html/body/div/div/div/div[2]/img');
  });

 When('I enter {string} into the search box as album name', { timeout: 20000 }, async function (albumName) {
  // Adjust the selector to target the actual input field inside the search container
  await page.waitForSelector('input[placeholder="Search"]', { timeout: 20000 });
  await page.fill('input[placeholder="Search"]', albumName);
});
  Then('I should see {string} in the album search results', { timeout: 10000 }, async function (expectedAlbum) {
    // Wait for search results to appear and validate that the album is in the results
    await page.waitForSelector('.search-results', { timeout: 10000 });
    const albumResults = await page.textContent('.search-results');
    assert(albumResults.includes(expectedAlbum), `Expected to find album ${expectedAlbum}, but got ${albumResults}`);
  });

