# DemoQA Cypress Automation Challenge

## Overview

This project contains automated tests for selected features of the DemoQA
application using Cypress and JavaScript.

The main goal of the project is to demonstrate practical QA automation
skills, including test scenario design, Page Object Model, reliable
selectors, reusable methods, assertions, and test execution through CI.

## Application Under Test

DemoQA — https://demoqa.com

## Tech Stack

- Cypress
- JavaScript
- Node.js
- Page Object Model
- Mochawesome
- GitHub Actions

## Project Structure

```text
cypress/
├── e2e/
│   ├── elements/
│   │   ├── buttons.cy.js
│   │   ├── check-box.cy.js
│   │   ├── radio-button.cy.js
│   │   ├── text-box.cy.js
│   │   └── webtables.cy.js
│   ├── forms/
│   │   └── practice-form.cy.js
│   └── widgets/
│       └── alerts.cy.js
├── fixtures/
│   └── practice-form.json
├── pages/
├── reports/       (generated, git-ignored)
├── screenshots/   (generated, git-ignored)
├── videos/        (generated, git-ignored)
└── support/

.github/
└── workflows/
    └── cypress.yml

docs/
└── evidence/      (static screenshots of test execution)
```

## Prerequisites

- Node.js
- npm

## Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

## Configuration

The project uses the following Cypress configuration
(`cypress.config.js`):

- Base URL: `https://demoqa.com`
- Default command timeout: 8 seconds
- Page load timeout: 30 seconds
- Retries: enabled in headless/CI mode
- Video recording: enabled
- Screenshots: captured on test failure
- Reporter: Mochawesome

## Running the Tests

### Cypress UI

Run Cypress in interactive mode:

```bash
npx cypress open
```

### Headed mode

Run the complete test suite with the browser visible:

```bash
npx cypress run --headed
```

### Headless mode

Run the complete test suite:

```bash
npx cypress run
```

Run a specific spec:

```bash
npx cypress run --spec "cypress/e2e/forms/practice-form.cy.js"
```

## Test Coverage

The suite currently contains 20 test scenarios covering forms, browser
dialogs, elements, and widgets.

### Practice Form (`cypress/e2e/forms/practice-form.cy.js`)

1. Should successfully submit the form when all required fields are filled
   in, validating the confirmation modal and the data displayed in it.
2. Should not submit the form when mandatory fields are empty — validates,
   via `checkValidity()`, that the required fields are reported as invalid
   by the browser, and confirms the confirmation modal is not displayed.

Covers: First Name, Last Name, Email, Gender, Mobile Number, Date of Birth,
and Hobby.

### Alerts, Frame & Windows (`cypress/e2e/widgets/alerts.cy.js`)

1. Should handle a simple alert, intercepting `window.alert` via stub and
   validating the message.
2. Should handle a confirmation dialog when clicking OK.
3. Should handle a confirmation dialog when clicking Cancel.
4. Should handle a prompt dialog when submitting a value.

Browser dialogs are handled using Cypress stubs for `window.alert`,
`window.confirm`, and `window.prompt`.

### Buttons (`cypress/e2e/elements/buttons.cy.js`)

1. Should validate a regular click.
2. Should validate a right-click.
3. Should validate a double-click.

Each scenario validates the message displayed by the application after the
interaction.

### Checkbox (`cypress/e2e/elements/check-box.cy.js`)

1. Should select a specific checkbox from the tree and validate that it is
   selected.
2. Should select a parent checkbox and validate that its child options are
   also selected.

### Radio Button (`cypress/e2e/elements/radio-button.cy.js`)

1. Should select the "Yes" option and validate the result.
2. Should validate that the disabled "No" option cannot be selected.
3. Should select the "Impressive" option and validate the result.

### Text Box (`cypress/e2e/elements/text-box.cy.js`)

1. Should submit the form with valid data and validate the information
   displayed in the output.
2. Should submit the form with an invalid email and validate the email
   field error.

### Web Tables (`cypress/e2e/elements/webtables.cy.js`)

1. Should validate the data of an existing table record.
2. Should create a new table record and validate the new row.
3. Should edit an existing record and validate the updated information.
4. Should delete an existing record and validate that it is removed from
   the table.

## Page Object Model

The project uses the Page Object Model to keep page interactions separated
from test scenarios. Each tested page has its own Page Object under
`cypress/pages/`, responsible for:

- Navigating to the page
- Filling fields
- Clicking buttons
- Selecting options
- Interacting with page components
- Performing page-specific assertions

A reusable `removeAdOverlays()` method is also used across all Page
Objects to remove advertising elements that can interfere with automated
interactions on several DemoQA pages.

This structure keeps the test files focused on the scenario itself and
avoids repeating selectors and interaction logic across different specs.

## Test Data

The Practice Form test data is stored separately from the test logic using
a Cypress fixture:

cypress/fixtures/practice-form.json


The fixture contains the data used by the Practice Form scenario,
including first name, last name, email, gender, mobile number, date of
birth, and hobby. The test loads the fixture and passes the values to the
Page Object methods, keeping test data organized and avoiding hardcoded
values directly in the test flow.

As the suite grows, additional test data can be moved to fixtures to
support further data-driven scenarios.

## Known Limitations

### Practice Form date picker

The Date of Birth component uses `react-datepicker` and dynamically
updates the available date elements. The implementation selects month and
year through the component dropdowns, then selects the requested day
while excluding dates that belong to adjacent months. This was necessary
to make date selection stable during execution.

### Advertising overlays

Some DemoQA pages contain fixed banners and Google Ads elements that
overlap interactive components. This was observed mainly on the Practice
Form, Web Tables, Alerts, and Buttons pages, and is documented in
`DEFECTS.md` as `DEFECT-001`. To prevent the overlays from interfering
with automated tests, the Page Objects call `removeAdOverlays()` before
interacting with the page.

## Test Results

Latest full local execution (`npx cypress run`):

| Spec | Tests | Passing | Failing |
|---|---|---|---|
| forms/practice-form.cy.js | 2 | 2 | 0 |
| widgets/alerts.cy.js | 4 | 4 | 0 |
| elements/buttons.cy.js | 3 | 3 | 0 |
| elements/check-box.cy.js | 2 | 2 | 0 |
| elements/radio-button.cy.js | 3 | 3 | 0 |
| elements/text-box.cy.js | 2 | 2 | 0 |
| elements/webtables.cy.js | 4 | 4 | 0 |
| **Total** | **20** | **20** | **0** |

All 20 scenarios passed locally. A static screenshot of the execution is
available at
[`docs/evidence/Evidence1_demoqa-cypress-challenge.png`](./docs/evidence/Evidence1_demoqa-cypress-challenge.png).

## CI/CD — GitHub Actions

The project includes a GitHub Actions workflow that automatically runs the
full Cypress test suite.

Workflow file: [`.github/workflows/cypress.yml`](./.github/workflows/cypress.yml)

The workflow runs on every push to the repository and can also be
triggered via pull requests. The pipeline:

1. Checks out the repository
2. Sets up Node.js
3. Installs project dependencies
4. Runs the Cypress test suite in headless mode

The workflow is configured to fail when the test suite fails, so it acts
as a merge gate.

### CI Execution

| Environment | Tests | Passing | Failing | Duration |
|---|---|---|---|---|
| Local | 20 | 20 | 0 | ~1m 11s |
| GitHub Actions | 20 | 20 | 0 | ~1m 24s |

The latest run can be viewed under the repository's **Actions** tab.

## Evidence and Reports

### Screenshots and videos

Cypress is configured to record videos during test execution and capture
screenshots on failure. These files are generated locally in
`cypress/videos/` and `cypress/screenshots/`, and are excluded from
version control via `.gitignore`.

### Mochawesome report

A Mochawesome HTML report is generated locally after running the tests:

```bash
npx cypress run
npm run report:merge
npm run report:generate
```

The generated report is available at `cypress/reports/html/report.html`.

### Static evidence

Static screenshots from a full passing execution are available at
[`docs/evidence/`](./docs/evidence/).

## Defects

Documented defects identified during the assessment are available in
[`DEFECTS.md`](./DEFECTS.md).

Each documented defect includes:

- Title
- Steps to reproduce
- Expected result
- Actual result
- Severity / Priority
- Supporting evidence

## Future Improvements

- Add test tags such as `@smoke` and `@regression`
- Publish Mochawesome reports as CI artifacts
- Run tests in parallel as the suite grows
- Expand API test coverage
- Add additional negative and edge-case scenarios
- Expand fixture usage to other specs beyond Practice Form

## Author

Gabriella Costa
QA Engineer | Cypress | Playwright | JavaScript