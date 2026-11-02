import { test, expect } from '@playwright/test';

test('mouse Wheel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.mouse.wheel(0, 400);
    await page.waitForTimeout(2000);
});
test('get the coordinates and move the mouse over there', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const sourceBox = await page.locator('#draggable').boundingBox();
    const destinationLoc = page.locator('#droppable');
    const destinationBox = await destinationLoc.boundingBox();
    if (sourceBox && destinationBox) {
        await page.mouse.move(
            sourceBox.x + sourceBox.width / 2,
            sourceBox.y + sourceBox.height / 2
        );
        await page.mouse.down();
        await page.mouse.move(
            destinationBox.x + destinationBox.width / 2,
            destinationBox.y + destinationBox.height / 2
        );
        await page.mouse.up();
    }
    await expect(destinationLoc).toHaveText('Dropped!');
});

test('click based on co-ordinate', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const doubleClickLoc = page.getByRole("button", { name: 'Copy Text' });
    const doubleClickLocCoordinates = await doubleClickLoc.boundingBox();

    if (doubleClickLocCoordinates) {
        await page.mouse.dblclick(
            doubleClickLocCoordinates.x + doubleClickLocCoordinates.width / 2,
            doubleClickLocCoordinates.y + doubleClickLocCoordinates.height / 2
        );
    }
    await expect(page.locator('#field2')).toHaveValue('Hello World!');
})