# DAY 1 – LEARNER FLOW AUDIT

---

## Bug #1 – Start Your Journey / Profile Creation

**Issue:**  

The user profile is not created when clicking "Start Your Journey."((()))

**Actual Result:**  

"Failed to create profile. Please try again."

**Console Error:**  

`PGRST205 – Could not find the table 'public.user_profiles' in the schema cache.`

**Impact:**  

The user cannot complete the onboarding flow.

---

## Bug #2 – Resume Analysis Requires API Key

**Issue:**  

Resume analysis cannot proceed without an OpenAI API key.

**Actual Result:**  

After clicking "Analyze Resume", the error message "API key required - Please enter your OpenAI API key in the dashboard." is displayed.

**Impact:**  

The user cannot analyze the uploaded resume unless an OpenAI API key is configured in the Dashboard.

---

## Bug #3 – Unwanted Browser Print Headers and Footers in Generated PDF

**Issue:**  

The generated resume PDF includes unwanted browser-generated headers and footers.

**Actual Result:**  

The PDF displays the date/time and resume name at the top, and `about:blank` with the page number at the bottom.

**Expected Result:**  

The exported PDF should contain only the resume content without the browser-generated date, time, filename/title, `about:blank`, or page number.

**Impact:**  

The generated PDF does not have a clean and professional presentation.

---

## Bug #4 – Skill Gap Analysis Requires API Key

**Issue:**  

The Skill Gap Analysis feature cannot proceed without an OpenAI API key.

**Actual Result:**  

When clicking "Analyze Skill Gap", an error message appears:

> "API key required – Please enter your OpenAI API key in the dashboard."

**Impact:**  

The user cannot perform the Skill Gap Analysis unless an OpenAI API key is configured in the Dashboard.

---

## Bug #5 – Job Matching / Cover Letter Generation Requires API Key

**Issue:**  

The Job Matching flow cannot use the AI-powered cover letter generation feature without an OpenAI API key.

**Actual Result:**  

When using the Job Matching feature, the following error message is displayed:

> "API key required – Please enter your OpenAI API key in the dashboard."

The Generate Cover Letter modal is available, but AI generation cannot proceed without the API key.

**Impact:**  

The user cannot generate an AI-powered cover letter from the Job Matching flow unless an OpenAI API key is configured in the Dashboard.

**Console Observation:**  

The console also shows React Router warnings and `chrome-extension://` resource errors. These are not treated as confirmed application bugs because `chrome-extension://` errors are related to browser extensions.

---

## Bug #6 – Easy Apply Button Not Working

**Issue:**  

The "Easy Apply" button on the Job Matching page does not perform any action when clicked.

**Actual Result:**  

When the user clicks the "Easy Apply" button, nothing happens. No navigation, modal, confirmation, or other response is shown.

**Expected Result:**  

Clicking "Easy Apply" should trigger the intended application flow, such as opening the application page/modal or redirecting the user to the relevant application process.

**Impact:**  

The user cannot proceed with applying for a job through the Easy Apply feature.

---

## Bug #7 – Footer Navigation Links Not Working

**Issue:**  

The "Career Journey" and "Get Started" links in the footer are not functioning.

**Actual Result:**  

Clicking "Career Journey" or "Get Started" in the footer does not navigate to or open the corresponding section/page.

**Expected Result:**  

Clicking "Career Journey" should navigate to the Career Journey section, and clicking "Get Started" should open the Get Started flow/modal.

**Impact:**  

Users cannot access these important sections through the footer navigation.

---

# DAY 3 – ACCESSIBILITY AUDIT

---

### Tool Used

Chrome Lighthouse

### Audit Scope

Accessibility audit of the modified landing page using Chrome Lighthouse.

---

## BEFORE

**Accessibility Score: 84**

### Issues Found

1. Buttons did not have accessible names.
2. Links did not have discernible names.
3. Insufficient color contrast.
4. Heading elements were not in sequential order.

### Before Evidence

#### Before – Accessibility Score 84

![Accessibility Before – Score 84](./screenshots/day3-accessibility-before-84-1.png)

![Accessibility Issues – Score 84](./screenshots/day3-accessibility-before-84-2.png)

---

## FIXES APPLIED

1. Added `aria-label` and `aria-expanded` to the mobile navigation menu button.
2. Added `aria-label` to social media icon links in `Footer.tsx`.
3. Fixed heading hierarchy in `HeroSection.tsx` and `Footer.tsx`.
4. Fixed insufficient text/background contrast in `LandingNavbar.tsx` and `HeroSection.tsx`.

---

## FILES MODIFIED

- `src/components/LandingNavbar.tsx`
- `src/components/Footer.tsx`
- `src/components/HeroSection.tsx`

---

## AFTER

**Accessibility Score: 100**

### After Evidence

#### After – Accessibility Score 100

![Accessibility After – Score 100](./screenshots/day3-accessibility-after-100.png)

---

## RESULT

- Lighthouse Accessibility score improved from **84 to 100**.
- Previously detected accessibility issues were resolved.
- The modified landing page achieved a **100 Accessibility score** in the final Lighthouse audit.

**Status: COMPLETED**

---

# DAY 3 – LOW BANDWIDTH / SLOW 3G AUDIT

---

### Tool Used

Chrome DevTools Network

### Test Configuration

- Network throttling: **3G**
- Device: **iPhone 14 Pro Max** emulation
- Page tested: **Landing/Home page**

### Result

The landing page was tested under Chrome DevTools 3G network throttling.

- The page eventually loaded successfully under throttled network conditions.
- The UI was usable after loading completed.
- During the initial loading period, the loading skeleton was displayed.
- The loading skeleton remained visible while the page was loading under 3G.
- Network requests completed successfully.
- No major layout break was observed after the page finished loading.

### Network Failure State

The application was also tested with the browser network set to Offline.

- A user-friendly Network Error state was displayed.
- The user was informed to check the internet connection.
- A Retry button was provided to allow the user to retry the request/page load.
- The application did not rely only on the browser's default offline error page.

## FIXES APPLIED

1. Added a loading skeleton to the landing page so users see a placeholder UI while the page is loading.
2. Added network status detection using the browser `online` and `offline` events.
3. Added a user-friendly Network Error state when the browser is offline.
4. Added a Retry button to allow the user to retry the page load after restoring the network connection.

---

## FILES MODIFIED

- `src/pages/Index.tsx`

---

## AFTER

The landing page now displays a loading skeleton during the initial loading period under throttled 3G conditions.

When the browser is offline, the application displays a dedicated Network Error state with a Retry button instead of relying on the browser's default offline error page.

---

### Evidence

#### Initial Loading – Skeleton Displayed

![Slow 3G Loading Skeleton](./screenshots/day3-slow3g-before-skeleton.png)

#### After Loading – UI Loaded

![Slow 3G Loaded UI](./screenshots/day3-slow3g-after-skeleton.png)

**#### Network Error – Before**

![Network Error Before](./screenshots/day3-network-error-before.png)

**#### Network Error – After**

![Network Error After](./screenshots/day3-network-error-after.png)

**Status: COMPLETED**

---

# DAY 3 – HARDENING CHECKLIST STATUS

---

### Accessibility & Keyboard Audit

**Status: COMPLETED**

- [x] Keyboard-only navigation verified using Tab, Shift+Tab, Enter, and Space.
- [x] Visible focus outlines verified on interactive elements.
- [x] Accessible names added where required.
- [x] Visible navigation controls verified.
- [x] Text/background contrast issues addressed.
- [x] Heading hierarchy corrected.
- [x] Final Lighthouse Accessibility score: **100**.

### Keyboard Navigation Evidence

Keyboard-only navigation was verified using Tab navigation.
The focus indicator remained visible and the tab order was verified.

![Keyboard Navigation](./screenshots/day3-keyboard-navigation.png)

### Low Bandwidth

**Status: COMPLETED**

- [x] Network throttled to 3G.
- [x] Landing page tested under throttled network conditions.
- [x] UI became usable after loading completed.
- [x] Network requests completed successfully.
- [x] No major layout break was observed after loading.
- [x] Loading skeleton verified under 3G.
- [x] Network failure state and retry option verified.

### Student Privacy

**Status: COMPLETED**

- [x] Verified that no student names, emails, or minor user identifiers are leaked in URL parameters.

- [x] Verified that no student names, emails, or minor user identifiers are exposed in console logs.

- [x] Verified that no student/minor identifiers are unnecessarily included in telemetry payloads.

### Student Privacy Evidence

#### URL / Console Privacy Check

![Student Privacy Check](./screenshots/day3-privacy-console-logs.png)

### Unit Testing

**Status: COMPLETED**

Unit testing was implemented for the Student Career Quiz component using React Testing Library and Vitest.

### Implementation / Fix Applied

Unit testing setup was added for the Student Career Quiz component.

1. Created `src/test/Quiz.test.tsx` for testing the Quiz component.
2. Configured Vitest with a `jsdom` environment for React component testing.
3. Added React Testing Library for rendering and querying components.
4. Added `userEvent` for simulating user interactions.
5. Added `jest-dom` for DOM assertions such as `toBeInTheDocument()` and `toBeChecked()`.
6. Added cleanup after each test to keep tests isolated.
7. Added test cases for rendering, answer selection, validation, navigation, progress tracking, quiz completion, score, percentage, review, answer status, and retaking the quiz.
8. Fixed the test setup so the complete React Quiz test suite could run successfully.
9. Verified the final test suite with 12 passing tests and 0 failed tests.

### Test Coverage

- [x] Quiz title and first question rendering
- [x] Four answer options rendering
- [x] Validation when no option is selected
- [x] Answer selection
- [x] Moving to the next question
- [x] Question progress tracking
- [x] Completing all 10 questions
- [x] Score calculation
- [x] Percentage calculation
- [x] Review of all questions after submission
- [x] Correct and incorrect answer status
- [x] Retaking the quiz

### Test Result

- **Test Files: 2 passed**
- **Tests: 12 passed**
- **Failed Tests: 0**
- **Status: PASSED**

### Unit Testing Evidence

![Quiz Unit Testing Result](./screenshots/quiz-unit-testing.png)

---

# PR EVIDENCE

Before/After visual evidence has been captured for the accessibility audit.

### Before

The initial Lighthouse audit showed an Accessibility score of **84**, with the issues documented above.

![Accessibility Before - Score 84](./screenshots/day3-accessibility-before-84-1.png)

![Accessibility Issues - Score 84](./screenshots/day3-accessibility-before-84-2.png)

### After

The final Lighthouse audit showed an Accessibility score of **100** after applying the fixes.

![Accessibility After - Score 100](./screenshots/day3-accessibility-after-100.png)

### Keyboard Navigation Evidence

Keyboard-only navigation was tested using Tab navigation.
Visible focus indicators were confirmed on interactive elements.

![Keyboard Navigation](./screenshots/day3-keyboard-navigation.png)

### Slow 3G Evidence

The landing page was tested with Chrome DevTools network throttling set to **3G**.

The loading skeleton was visible during the loading period, and the final UI appeared after loading completed.

![Slow 3G Loading Skeleton](./screenshots/day3-slow3g-before-skeleton.png)

![Slow 3G Loaded UI](./screenshots/day3-slow3g-after-skeleton.png)

These screenshots can be included in the Draft PR as visual proof.

### Network Failure / Retry Evidence

The application was tested with the browser network set to Offline.

A user-friendly Network Error state with a Retry button was displayed.

![Network Error Before](./screenshots/day3-network-error-before.png)

![Network Error After](./screenshots/day3-network-error-after.png)

### Student Privacy Evidence

The application was checked for student privacy leaks in URL parameters and browser console logs.

No student names, emails, phone numbers, or other personal identifiers were exposed.

![Student Privacy Check](./screenshots/day3-privacy-console-logs.png)

## Evidence File Structure

Keep the Markdown report and screenshots in the following structure:

learner-flow-audit-updated.md

screenshots/

├── day3-accessibility-before-84-1.png
├── day3-accessibility-before-84-2.png
├── day3-accessibility-after-100.png
├── day3-keyboard-navigation.png
├── day3-network-error-before.png
├── day3-network-error-after.png
├── day3-slow3g-before-skeleton.png
├── day3-slow3g-after-skeleton.png
├── day3-privacy-console-logs.png
└── quiz-unit-testing.png

```

