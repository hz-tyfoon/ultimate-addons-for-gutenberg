// import { test, expect } from '@playwright/test';


// // test( 'first', async ( { page } ) => {
// //     await page.goto( 'http://localhost:8888/wp-admin/options-general.php?page=spectra' );
  
// //     const spectrax = page.locator( 'text=Welcome to Spectra!' );
  
// //     await expect( spectrax ).toContainText( 'Welcome to Spectra!' )
    
// //   } );

  import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://notable-normandeau-gfbwl.zipwp.dev/wp-admin/?wtlwp_token=6d8fb037b9d4f7aee9c35f3d5c3ab73088e60baf815f1e1859524931b16d65434b9037aa54f7f2ec7915da9f48101456eb42f317e66b151ee439a1a65634456b');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dashboard/);
});

test('docs', async ({ page }) => {
  await page.goto('https://notable-normandeau-gfbwl.zipwp.dev/wp-admin/?wtlwp_token=6d8fb037b9d4f7aee9c35f3d5c3ab73088e60baf815f1e1859524931b16d65434b9037aa54f7f2ec7915da9f48101456eb42f317e66b151ee439a1a65634456b');

  // Click the get started link.
  await page.getByRole('link', { name: 'Spectra' }).click();

  await page.getByRole('link', { name: 'Get Support' }).click();

  await page.getByRole('link', { name: 'Need Support?' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Need Support?' })).toBeVisible();
});