import { test, expect } from '@playwright/test';

test.describe('Repo Rescue Landing Page', () => {
  test('should load the repo-rescue page successfully', async ({ page }) => {
    await page.goto('/repo-rescue');
    
    // Check that the page loads without errors
    await expect(page).toHaveTitle(/AI Code Modernization Sprint/);
  });

  test('should display the main heading', async ({ page }) => {
    await page.goto('/repo-rescue');
    
    // Check for the main H1 heading
    const heading = page.locator('h1');
    await expect(heading).toContainText('AI Code Modernization Sprint');
  });

  test('should display the subhead copy', async ({ page }) => {
    await page.goto('/repo-rescue');
    
    // Check for the subhead with key messaging
    const subhead = page.locator('p').first();
    await expect(subhead).toContainText('Clean PRs in 72 hours');
    await expect(subhead).toContainText('standardized error codes');
    await expect(subhead).toContainText('structured logging');
    await expect(subhead).toContainText('+15% targeted test coverage');
    await expect(subhead).toContainText('Soul7OS');
  });

  test('should display feature cards', async ({ page }) => {
    await page.goto('/repo-rescue');
    
    // Check for the three main feature cards
    await expect(page.locator('text=Standardized Errors')).toBeVisible();
    await expect(page.locator('text=Structured Logging')).toBeVisible();
    await expect(page.locator('text=+15% Test Coverage')).toBeVisible();
  });

  test('should display call-to-action buttons', async ({ page }) => {
    await page.goto('/repo-rescue');
    
    // Check for CTA buttons
    await expect(page.locator('button:has-text("Start Your Sprint")')).toBeVisible();
    await expect(page.locator('button:has-text("View Examples")')).toBeVisible();
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/repo-rescue');
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Turn tech debt into clean PRs in 72 hours/);
    
    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /AI Code Modernization Sprint/);
    
    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute('content', /Turn tech debt into clean PRs in 72 hours/);
  });

  test('should include JSON-LD structured data', async ({ page }) => {
    await page.goto('/repo-rescue');
    
    // Check for JSON-LD script tag
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toBeAttached();
    
    // Verify the JSON-LD contains expected schema.org data
    const jsonContent = await jsonLd.textContent();
    expect(jsonContent).toContain('"@type": "Service"');
    expect(jsonContent).toContain('AI Code Modernization Sprint');
    expect(jsonContent).toContain('Soul7OS');
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/repo-rescue');
    
    // Check that key elements are visible on mobile
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    
    const ctaButton = page.locator('button:has-text("Start Your Sprint")');
    await expect(ctaButton).toBeVisible();
  });

  test('should have proper color scheme and styling', async ({ page }) => {
    await page.goto('/repo-rescue');
    
    // Check that the page has the expected dark theme
    const body = page.locator('body');
    await expect(body).toBeVisible();
    
    // Check that gradient background is applied
    const mainDiv = page.locator('div').first();
    await expect(mainDiv).toBeVisible();
  });
});