import { test, expect } from '@playwright/test';

test.describe('Repo Rescue Landing Page - Basic Tests', () => {
  test('should load the repo-rescue page successfully', async ({ page }) => {
    await page.goto('/repo-rescue');
    
    // Check that the page loads without errors
    await expect(page).toHaveTitle(/AI Code Modernization Sprint/);
  });

  test('should display correct content', async ({ page }) => {
    await page.goto('/repo-rescue');
    
    // Check for the main H1 heading
    const heading = page.locator('h1');
    await expect(heading).toContainText('AI Code Modernization Sprint');
    
    // Check for the subhead with key messaging
    const subhead = page.locator('p').first();
    await expect(subhead).toContainText('Clean PRs in 72 hours');
    await expect(subhead).toContainText('Soul7OS');
    
    // Check for feature cards
    await expect(page.locator('text=Standardized Errors')).toBeVisible();
    await expect(page.locator('text=Structured Logging')).toBeVisible();
    await expect(page.locator('text=+15% Test Coverage')).toBeVisible();
    
    // Check for CTA buttons
    await expect(page.locator('button:has-text("Start Your Sprint")')).toBeVisible();
    await expect(page.locator('button:has-text("View Examples")')).toBeVisible();
  });
});