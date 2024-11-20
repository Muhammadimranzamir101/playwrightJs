# PlaywrightJS Test Automation

Comprehensive web automation using [Playwright](https://playwright.dev/). Includes configurations, sample test cases, CI/CD setups, debugging, and integrations with BrowserStack, Jenkins, and GitHub Actions.

## Features
- Pre-configured `playwright.config.js`
- Example tests in `tests/` directory
- Jenkins CI/CD integration via `Jenkinsfile` with browser stack

## Getting Started
1. Clone: `git clone https://github.com/Muhammadimranzamir101/playwrightJs.git`
2. Install: `npm install`
3. Run Tests: `npx playwright test`

## Test Execution
- **Run All Tests**: `npx playwright test`
- **Single Test**: `npx playwright test <test-file>`
- **Debug Mode**: `npx playwright test --debug`
- **Headed Mode**: `npx playwright test --headed`
- **Tags**: Run tests by tags: `npx playwright test --grep @tag`
- **Retries**: Set retry count to avoid flaky tests.

## Reporting & Logs
- Built-in reporters: HTML, JSON, JUnit, Line, List, Dot. `const config = {reporter: html};`
- Allure Reporting: 
  - Install: `npm install allure-playwright`
  - Generate: `allure generate allure-results -o allure-report --clean`
  - Open: `allure open allure-report`
  
## CI/CD Integration
- **GitHub Actions**: Automate tests, upload artifacts, and generate reports.
- **Jenkins**: CI/CD pipeline setup with a `Jenkinsfile`. 
- **BrowserStack**: Remote cross-browser testing with local testing.


