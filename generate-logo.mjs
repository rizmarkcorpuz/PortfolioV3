import puppeteer from 'puppeteer';
import fs from 'fs';

// Clean SVG recreation of the hexagonal logo
// The mark is a geometric R:
//   - Hollow/outlined vertical rectangle = the R stem (left side)
//   - Two solid horizontal bars crossing through = R crossbars
//   - Bars extend right of stem; hollow gaps visible between bars
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="2400" height="2400">
  <rect width="1000" height="1000" fill="white"/>

  <!-- Hexagon: pointy-top, gold border, white fill -->
  <polygon
    points="500,38 893,269 893,731 500,962 107,731 107,269"
    fill="white"
    stroke="#FFD700"
    stroke-width="40"
    stroke-linejoin="round"
  />

  <!-- ── MARK ── geometric R (gold portion visible on white) -->

  <!-- Bar 1: top crossbar — widest, seals top of hollow stem -->
  <rect x="308" y="305" width="308" height="52" fill="#FFD700"/>

  <!-- Bar 2: mid crossbar — shorter, crosses the hollow stem -->
  <rect x="308" y="397" width="248" height="46" fill="#FFD700"/>

  <!-- Hollow stem: left + right walls + bottom cap -->
  <!-- Left wall -->
  <rect x="308" y="305" width="32" height="298" fill="#FFD700"/>
  <!-- Right wall -->
  <rect x="392" y="305" width="32" height="298" fill="#FFD700"/>
  <!-- Bottom cap -->
  <rect x="308" y="571" width="116" height="32" fill="#FFD700"/>
</svg>`;

fs.writeFileSync('brand_assets/logo-clean.svg', svg);

// Export to PNG via puppeteer
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 2400, height: 2400, deviceScaleFactor: 1 });
await page.setContent(`<!DOCTYPE html><html><body style="margin:0;padding:0;background:white;">${svg}</body></html>`);
await page.screenshot({ path: 'brand_assets/logo-clean.png', clip: { x: 0, y: 0, width: 2400, height: 2400 } });
await browser.close();
console.log('Saved: brand_assets/logo-clean.png and logo-clean.svg');
