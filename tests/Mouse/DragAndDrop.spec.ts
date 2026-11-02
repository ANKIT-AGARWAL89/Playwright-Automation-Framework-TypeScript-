import {test, expect} from "@playwright/test";

test('Drag and drop functionality', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com');
    const source = page.getByText('Drag me to my target');
    const targetLoc = page.locator('#droppable'); 

    await source.dragTo(targetLoc);

    await expect(targetLoc).toHaveText('Dropped!');
})