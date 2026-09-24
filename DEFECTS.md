# Defect Report

## DEFECT-001: Advertising overlays block direct interaction with page fields and elements

**ID:** DEFECT-001

**Title:** Advertising elements (fixed banners and Google Ads iframes) visually overlap interactive fields, preventing direct clicks

**Date identified:** [fill in the date you found it]

**Identified by:** Gabriella Costa

**Test item / Build:** https://demoqa.com/ — Practice Form, Elements (Web Tables), and Alerts, Frame & Windows pages

**Test environment:**
- Browser: Chrome 153 (Cypress-controlled browser)
- Resolution: 1000x660 (Cypress default viewport)
- Automation framework: Cypress v16.1.0

**SDLC phase injected (suspected):** Design/Implementation — third-party ad script integration without proper z-index or responsive positioning handling relative to interactive elements.

**Phase detected:** Test execution (Cypress automation) and manual confirmation.

---

**Steps to reproduce:**
1. Navigate to https://demoqa.com/automation-practice-form (or /webtables, /alerts)
2. Wait for the page to fully load, including advertising elements (fixed banner `#fixedban`, Google Ads iframes, `.adsbygoogle`)
3. Attempt to directly interact (click, type) with fields or buttons positioned near these advertising elements

**Expected result:** All fields and controls on the page should be accessible and clickable, without interference from overlapping advertising elements.

**Actual result:** Advertising elements visually overlap fields, buttons, and table rows, blocking or hindering direct clicks on those elements — both for automation (Cypress reports the element as covered/"not visible") and potentially for real users.

**Severity:** Medium — the defect does not completely prevent use of the application, but it degrades the user experience and requires a manual (scrolling, closing the ad) or programmatic workaround to interact with affected elements.

**Priority:** Low — it does not block critical business flows, but should be addressed in a UX/responsiveness review, especially since it affects multiple pages of the site.

**Evidence:**
The need to implement a programmatic removal routine (`removeAdOverlays()`) across all Page Objects in the project — consistently applied in Practice Form, Alerts, and Elements — demonstrates the recurrence and real impact of the issue on page interaction. Screenshots/videos from test runs (generated in `cypress/screenshots` and `cypress/videos`) provide visual evidence of the overlap.

**Status:** Open

**Cross-references:** See workaround implementation in `cypress/pages/*.js`, method `removeAdOverlays()`.