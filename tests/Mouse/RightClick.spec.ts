
import { test, expect } from "@playwright/test";

test('performing right click action', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const rightClickLoc = page.getByText('right click me', { exact: true });

    // Perform right click
    await rightClickLoc.click({ button: 'right' });

    const copyOption = page.locator('.context-menu-item')
        .filter({ hasText: /^Copy$/ });

    await expect(copyOption).toBeVisible();

    // Register dialog handler and accept it automatically
    const dialogPromise = page.waitForEvent('dialog').then(async dialog => {
        console.log('Alert message:', dialog.message());
        await dialog.accept();
    });

    // Click Copy and handle the dialog concurrently
    await Promise.all([
        copyOption.click(),
        dialogPromise
    ]);
});