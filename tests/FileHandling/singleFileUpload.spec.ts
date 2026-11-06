import { test, expect } from '@playwright/test';

test('Single and Multiple file upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const singleFileUploadLoc = page.locator('#singleFileInput');
    const multiFileUploadLoc = page.locator('#multipleFilesInput');
    // single file upload
    await singleFileUploadLoc.setInputFiles('tests/FileHandling/Pic1.png');
    await page.waitForTimeout(2000);
    // Remove uploaded files
    await singleFileUploadLoc.setInputFiles([]);
    await page.waitForTimeout(2000);
    // Multiple file upload
    await multiFileUploadLoc.setInputFiles([
        'tests/FileHandling/Pic1.png',
        'tests/FileHandling/Pic2.png'
    ])
    await page.waitForTimeout(2000);
});

test('upload file by file chooser event', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Registering the listener first prevents missing that event.
    const filechooserpromise = page.waitForEvent('filechooser');

    const singleFileUploadLoc = page.locator('#singleFileInput').click();
    
    const filechooser = await filechooserpromise;

    filechooser.setFiles('tests/FileHandling/Pic1.png');
    await page.waitForTimeout(2000);

})