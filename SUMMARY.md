# Summary Report

**Application:** DemoQA
**Framework:** Cypress + JavaScript
**Execution:** Local + GitHub Actions
**Test Count:** 20

## Approach

I focused on covering a few representative DemoQA pages instead of trying
to automate as many scenarios as possible.

The final suite contains 20 tests covering forms, browser dialogs,
buttons, checkboxes, radio buttons, text boxes, and web tables. I included
both positive scenarios and a few negative/edge cases, such as invalid
email input, empty required fields, disabled options, and delete
operations.

I used Page Object Model to keep selectors and page interactions outside
the test files. This keeps the specs focused on the scenario being tested
and makes common interactions easier to reuse.

## Key Design Decisions

- **Page Object Model:** page-specific selectors and actions are kept
  under `cypress/pages/`.
- **Test data:** Practice Form data is stored separately in
  `cypress/fixtures/practice-form.json` instead of being hardcoded in the
  test flow.
- **Reusable methods:** common actions are reused instead of being
  duplicated across specs. The `removeAdOverlays()` method is used to
  handle DemoQA advertising elements that can interfere with interactions.
- **Assertions:** each test checks the expected result of the action, not
  only whether the action itself was executed.
- **Reporting:** Mochawesome was added for test execution reports, with
  screenshots on failure and video recording enabled.
- **CI:** GitHub Actions runs the complete Cypress suite in headless mode.

## Trade-offs

The assessment had a limited scope and time frame, so I prioritized the
main user interactions and a small number of edge cases instead of trying
to cover every DemoQA component.

DemoQA also has advertising overlays that sometimes interfere with
elements on the page. To reduce flakiness caused by these dynamically
loaded elements, a short fixed wait was combined with conditional element
removal (`removeAdOverlays()`) before interacting with the page. This is a
pragmatic trade-off — a more robust solution would wait for a specific
network request or DOM signal instead of a fixed delay, but given the
project scope this was sufficient to stabilize the suite. The behavior is
documented in `DEFECTS.md` and in the known limitations section of the
README.

The Practice Form date picker required additional handling because dates
from adjacent months are rendered in the component. The test explicitly
filters those dates before selecting the requested day.

## Insights & Challenges

The main challenge was dealing with behavior coming from the application
itself rather than the test flow, especially the advertising overlays and
the dynamic date picker.

The Alerts page was also useful for validating how Cypress handles browser
dialogs. The tests cover alert, confirm (both accept and cancel paths),
and prompt behavior instead of treating them as simple clicks.

The final suite was executed both locally and via GitHub Actions, with all
20 scenarios passing in both environments.