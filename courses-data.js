// ─────────────────────────────────────────────────────────────
//  KIWAMI SCHOOL — COURSE DATA
//  Single source of truth for all pages.
//  To add a new course: add an object here. Done.
// ─────────────────────────────────────────────────────────────

const COURSES = {

  // ── BEGINNER ─────────────────────────────────────────────
  "intro-testing": {
    id: "intro-testing",
    title: "Introduction to Software Testing",
    track: "Beginner",
    categories: ["beginner"],
    icon: "🧪",
    cardBg: "var(--blue-light)",
    tags: [{ label: "BEGINNER", cls: "tag-new" }],
    tool: null,
    tagline: "The perfect starting point into the world of QA.",
    description: "Get a solid foundation in software testing concepts, methodologies, and real-world QA practices. This course is designed for career changers, fresh graduates, and anyone curious about breaking into the tech industry through quality assurance.",
    price: 14999,
    duration: "8 weeks",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 38,
    prerequisites: [
      "No prior tech experience required",
      "A laptop or desktop computer",
      "Curiosity and willingness to learn"
    ],
    curriculum: [
      { week: "Week 1", title: "What is Software Testing?", topics: ["The role of QA in software teams", "SDLC and where testing fits", "Types of testing overview"] },
      { week: "Week 2", title: "Testing Fundamentals", topics: ["Test planning and strategy", "Test cases and test scenarios", "Defect lifecycle"] },
      { week: "Week 3", title: "Manual Testing Techniques", topics: ["Black-box vs white-box testing", "Equivalence partitioning", "Boundary value analysis"] },
      { week: "Week 4", title: "Agile & QA", topics: ["Scrum and QA's role", "Sprint testing processes", "Working with developers"] },
      { week: "Week 5", title: "Tools Introduction", topics: ["Introduction to JIRA", "Bug reporting best practices", "Test case management basics"] },
      { week: "Week 6", title: "Mobile & Web Testing Basics", topics: ["Browser testing fundamentals", "Responsive design testing", "Basic mobile testing concepts"] },
      { week: "Week 7", title: "Career in QA", topics: ["QA career paths", "Building your portfolio", "What employers look for"] },
      { week: "Week 8", title: "Final Project", topics: ["Real-world test scenario", "Instructor review & feedback", "Certificate of completion"] },
    ],
    testimonials: []
  },

  // "manual-testing": {
  //   id: "manual-testing",
  //   title: "Manual Testing",
  //   track: "Beginner",
  //   categories: ["beginner"],
  //   icon: "📋",
  //   cardBg: "#fff4ed",
  //   tags: [{ label: "POPULAR", cls: "tag-pop" }],
  //   tool: "JIRA · TestRail",
  //   tagline: "Master the art of manual QA from day one.",
  //   description: "A deep dive into professional manual testing practices. You'll work with the same tools used by QA engineers at top Kenyan tech companies, and graduate with a portfolio of real test artefacts.",
  //   price: 19999,
  //   duration: "1.5 months",
  //   cohort: "May 2026",
  //   mode: "Virtual · Instructor-Led",
  //   rating: 4.8,
  //   reviews: 74,
  //   prerequisites: [
  //     "Basic computer literacy",
  //     "No prior QA experience needed",
  //     "Completion of Intro to Testing is an advantage but not required"
  //   ],
  //   curriculum: [
  //     { week: "Week 1", title: "QA Foundations", topics: ["Quality principles and mindset", "SDLC & STLC", "Risk-based testing approach"] },
  //     { week: "Week 2", title: "Test Design Techniques", topics: ["Equivalence partitioning", "Boundary value analysis", "Decision table testing"] },
  //     { week: "Week 3", title: "Shift-Left & BDD", topics: ["Shift-left testing philosophy", "Behavior-Driven Development (BDD)", "Writing Gherkin test scenarios"] },
  //     { week: "Week 4", title: "Tools — JIRA & TestRail", topics: ["JIRA for bug tracking", "TestRail for test case management", "End-to-end defect lifecycle walkthrough"] },
  //     { week: "Week 5", title: "Tools — Zephyr & Advanced JIRA", topics: ["Zephyr Scale integration", "Test execution & reporting in JIRA", "Traceability matrices"] },
  //     { week: "Week 6", title: "Test Case Optimization", topics: ["Writing effective test cases", "Test coverage analysis", "Regression testing strategies"] },
  //   ],
  //   testimonials: []
  // },

  "manual-testing-istqb": {
    id: "manual-testing-istqb",
    title: "Manual Testing + ISTQB Voucher",
    track: "Beginner",
    categories: ["beginner"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }, { label: "POPULAR", cls: "tag-pop" }],
    tool: "ISTQB Voucher",
    tagline: "Get certified on your first attempt.",
    description: "Everything in the Manual Testing course, plus your ISTQB Foundation Level exam voucher and dedicated preparation sessions. Our pass rate on first attempt is over 90%.",
    price: 32999,
    duration: "2 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.9,
    reviews: 52,
    prerequisites: [
      "Basic computer literacy",
      "Commitment to study for ISTQB exam outside class hours"
    ],
    curriculum: [
      { week: "Week 1–6", title: "Full Manual Testing Course", topics: ["All content from the Manual Testing course", "See Manual Testing curriculum for full breakdown"] },
      { week: "Week 7", title: "ISTQB Exam Preparation — Part 1", topics: ["ISTQB Foundation Level syllabus overview", "Sample questions and walkthrough", "Study strategy and exam tips"] },
      { week: "Week 8", title: "ISTQB Exam Preparation — Part 2", topics: ["Full mock exam", "Instructor-led review of weak areas", "Voucher issuance and exam scheduling support"] },
    ],
    testimonials: []
  },


  // ── INTERMEDIATE ─────────────────────────────────────────
  "api-testing-postman": {
    id: "api-testing-postman",
    title: "API Testing + Automation (Postman)",
    track: "Intermediate",
    categories: ["intermediate"],
    icon: "🔌",
    cardBg: "var(--blue-light)",
    tags: [{ label: "POPULAR", cls: "tag-pop" }],
    tool: "Postman",
    tagline: "Test APIs like a professional — from requests to automation.",
    description: "A practical course covering API testing fundamentals through to full automation using Postman. You'll validate endpoints, write test scripts, and integrate with CI/CD pipelines by the end.",
    price: 24999,
    duration: "1.5 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 61,
    prerequisites: [
      "Basic understanding of software testing concepts",
      "Familiarity with what APIs are (no coding required to start)",
      "Completion of Manual Testing course is an advantage"
    ],
    curriculum: [
      { week: "Week 1", title: "API Fundamentals", topics: ["What are APIs and how they work", "REST vs SOAP", "HTTP methods, status codes, headers"] },
      { week: "Week 2", title: "Postman Basics", topics: ["Setting up Postman", "Building and sending requests", "Environments and variables"] },
      { week: "Week 3", title: "Test Scripting in Postman", topics: ["Writing JavaScript test scripts", "Assertions and validations", "Pre-request scripts"] },
      { week: "Week 4", title: "Collections & Data-Driven Testing", topics: ["Organising requests in collections", "Data-driven tests with CSV/JSON", "Newman CLI runner"] },
      { week: "Week 5", title: "CI/CD Integration", topics: ["GitHub Actions basics", "Running Postman tests in pipelines", "Reporting and monitoring"] },
      { week: "Week 6", title: "Final Project", topics: ["Test a real-world API end-to-end", "Generate professional reports", "Portfolio piece walkthrough"] },
    ],
    testimonials: []
  },

  "api-testing-selenium": {
    id: "api-testing-selenium",
    title: "API Testing + Automation (Selenium)",
    track: "Intermediate",
    categories: ["intermediate"],
    icon: "🔗",
    cardBg: "var(--blue-light)",
    tags: [{ label: "IN DEMAND", cls: "tag-hot" }],
    tool: "Selenium",
    tagline: "API testing powered by the Selenium ecosystem.",
    description: "Learn API testing integrated with Selenium-based automation. Build robust test suites that cover both API and UI layers, giving you a broader skillset that employers value highly.",
    price: 24999,
    duration: "2 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.6,
    reviews: 28,
    prerequisites: [
      "Basic manual testing knowledge",
      "Familiarity with Java or Python basics",
      "Understanding of what APIs are"
    ],
    curriculum: [
      { week: "Week 1", title: "API Testing Foundations", topics: ["REST API concepts", "HTTP methods and status codes", "Request/response structure"] },
      { week: "Week 2", title: "API Testing with Selenium", topics: ["REST Assured (Java) or Requests (Python)", "Sending API requests programmatically", "Parsing JSON/XML responses"] },
      { week: "Week 3", title: "Test Automation Patterns", topics: ["Combining API and UI tests", "Test data setup via API", "Service layer testing concepts"] },
      { week: "Week 4", title: "Validation & Assertions", topics: ["Schema validation", "Response time assertions", "Data integrity checks"] },
      { week: "Week 5–6", title: "CI/CD & Final Project", topics: ["Pipeline integration", "End-to-end test suite", "Portfolio walkthrough"] },
      { week: "Week 7–8", title: "Advanced Topics", topics: ["Auth testing (OAuth, API keys)", "Security basics for APIs", "Mock servers"] },
    ],
    testimonials: []
  },

  "advanced-api-postman": {
    id: "advanced-api-postman",
    title: "Advanced API Automation (Postman + AI)",
    track: "Intermediate",
    categories: ["intermediate"],
    icon: "🤖",
    cardBg: "#fff0f0",
    tags: [{ label: "IN DEMAND", cls: "tag-hot" }],
    tool: "Postman AI · CI/CD",
    tagline: "Service mocking, CI/CD, and the power of Postman AI.",
    description: "For engineers ready to go beyond basics. This course covers service virtualisation, advanced CI/CD workflows, and Postman's AI-powered features for serious API test automation.",
    price: 34999,
    duration: "2.5 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 29,
    prerequisites: [
      "Completion of API Testing (Postman) course or equivalent experience",
      "Basic understanding of JavaScript",
      "Familiarity with command line basics"
    ],
    curriculum: [
      { week: "Week 1–2", title: "Advanced Postman Techniques", topics: ["Complex variable chaining", "Dynamic request building", "Advanced assertions and custom reporters"] },
      { week: "Week 3–4", title: "Service Mocking & Virtualisation", topics: ["Mock servers in Postman", "Simulating third-party APIs", "Contract testing concepts"] },
      { week: "Week 5–6", title: "CI/CD Pipelines", topics: ["Jenkins and GitHub Actions deep dive", "Scheduled API monitoring", "Alerting and failure handling"] },
      { week: "Week 7–8", title: "Postman AI Features", topics: ["AI-assisted test generation", "Intelligent API documentation", "Postman Flows introduction"] },
      { week: "Week 9–10", title: "Final Project", topics: ["End-to-end automation suite", "Full CI/CD pipeline", "Technical presentation"] },
    ],
    testimonials: []
  },

  "api-testing-istqb": {
    id: "api-testing-istqb",
    title: "API Testing + ISTQB Voucher",
    track: "Intermediate",
    categories: ["intermediate"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }],
    tool: "ISTQB Voucher",
    tagline: "Complete API testing plus your certification pathway.",
    description: "Complete API testing course plus ISTQB Foundation voucher and exam prep. Maximise your certification chance with guided preparation sessions after finishing the full API testing curriculum.",
    price: 32999,
    duration: "2 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 22,
    prerequisites: [
      "Basic understanding of software testing",
      "Familiarity with what APIs are",
      "Commitment to prepare for ISTQB exam"
    ],
    curriculum: [
      { week: "Week 1–6", title: "Full API Testing Course", topics: ["All content from the API Testing (Postman) course", "See API Testing curriculum for full breakdown"] },
      { week: "Week 7", title: "ISTQB Exam Preparation — Part 1", topics: ["ISTQB Foundation Level syllabus overview", "Sample questions and walkthrough", "Study tips for API-focused testers"] },
      { week: "Week 8", title: "ISTQB Exam Preparation — Part 2", topics: ["Full mock exam", "Review of weak areas", "Voucher issuance and exam scheduling"] },
    ],
    testimonials: []
  },

  "ussd-testing": {
    id: "ussd-testing",
    title: "USSD Testing",
    track: "Intermediate",
    categories: ["intermediate"],
    icon: "📱",
    cardBg: "#fff4ed",
    tags: [{ label: "AFRICA-SPECIFIC", cls: "tag-new" }],
    tool: null,
    tagline: "A specialisation unique to — and critical in — African tech.",
    description: "USSD testing is a niche skill in very high demand across Kenyan and East African fintech, banking, and telco companies. This course gives you the practical tools to test USSD-based applications used by millions.",
    price: 19999,
    duration: "1.5 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.6,
    reviews: 33,
    prerequisites: [
      "Basic understanding of software testing",
      "Familiarity with mobile applications",
      "No programming knowledge required"
    ],
    curriculum: [
      { week: "Week 1", title: "USSD Fundamentals", topics: ["How USSD works technically", "USSD in African fintech context", "Common USSD application types"] },
      { week: "Week 2", title: "USSD Testing Strategies", topics: ["Functional testing for USSD flows", "Session management testing", "Error and edge case scenarios"] },
      { week: "Week 3", title: "Tools & Simulators", topics: ["USSD testing tools overview", "Setting up test environments", "Simulating network conditions"] },
      { week: "Week 4", title: "Real-World Applications", topics: ["Mobile money testing (M-Pesa flows)", "Banking USSD test scenarios", "Telco service testing"] },
      { week: "Week 5–6", title: "Regression, Performance & Final Project", topics: ["Regression testing for USSD", "Load considerations", "Complete USSD test plan and portfolio documentation"] },
    ],
    testimonials: []
  },

  // "ussd-automation": {
  //   id: "ussd-automation",
  //   title: "USSD Automation",
  //   track: "Intermediate",
  //   categories: ["intermediate"],
  //   icon: "⚡",
  //   cardBg: "#fff4ed",
  //   tags: [{ label: "AFRICA-SPECIFIC", cls: "tag-new" }],
  //   tool: null,
  //   tagline: "Automate USSD testing for mobile money and telco apps.",
  //   description: "Learn to automate USSD applications, reducing manual effort and ensuring reliability in mobile transactions, banking, and customer interactions. High demand skill across East Africa.",
  //   price: 21999,
  //   duration: "2 months",
  //   cohort: "May 2026",
  //   mode: "Virtual · Instructor-Led",
  //   rating: 4.6,
  //   reviews: 19,
  //   prerequisites: [
  //     "Completion of USSD Testing course or equivalent experience",
  //     "Basic scripting knowledge is helpful",
  //     "Familiarity with USSD flows"
  //   ],
  //   curriculum: [
  //     { week: "Week 1–2", title: "USSD Automation Foundations", topics: ["Review of USSD testing fundamentals", "Introduction to USSD automation tools", "Scripting USSD flows"] },
  //     { week: "Week 3–4", title: "Automation Framework Setup", topics: ["Test framework design for USSD", "Handling session state in automation", "Data-driven USSD testing"] },
  //     { week: "Week 5–6", title: "Real-World Automation Scenarios", topics: ["Automating M-Pesa-style flows", "Bank USSD automation scenarios", "Error handling and retry logic"] },
  //     { week: "Week 7–8", title: "CI/CD & Final Project", topics: ["Integrating USSD tests into pipelines", "Reporting and alerting", "Automated USSD test suite as portfolio piece"] },
  //   ],
  //   testimonials: []
  // },

  "ussd-automation-istqb": {
    id: "ussd-automation-istqb",
    title: "USSD Automation + ISTQB Voucher",
    track: "Intermediate",
    categories: ["intermediate"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }, { label: "AFRICA-SPECIFIC", cls: "tag-new" }],
    tool: "ISTQB Voucher",
    tagline: "USSD automation mastery plus certification.",
    description: "Complete USSD Automation course combined with ISTQB Foundation voucher and preparation. Combine a uniquely African specialisation with an internationally recognised certification.",
    price: 32999,
    duration: "2.5 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.6,
    reviews: 12,
    prerequisites: [
      "Completion of USSD Testing course or equivalent",
      "Basic scripting knowledge",
      "Commitment to prepare for ISTQB exam"
    ],
    curriculum: [
      { week: "Week 1–8", title: "Full USSD Automation Course", topics: ["All content from the USSD Automation course", "See USSD Automation for full breakdown"] },
      { week: "Week 9–10", title: "ISTQB Exam Preparation", topics: ["ISTQB Foundation syllabus review", "Mock exam and walkthrough", "Voucher issuance and scheduling support"] },
    ],
    testimonials: []
  },

  // ── AUTOMATION ───────────────────────────────────────────
  "selenium": {
    id: "selenium",
    title: "Web Automation — Selenium",
    track: "Automation",
    categories: ["automation"],
    icon: "⚙️",
    cardBg: "var(--blue-light)",
    tags: [{ label: "POPULAR", cls: "tag-pop" }],
    tool: "Selenium",
    tagline: "The industry standard. Still the most sought-after skill in QA.",
    description: "Selenium remains the most requested automation skill in QA job ads across East Africa. This course takes you from setup to scalable, CI/CD-ready test suites you can put directly on your CV.",
    price: 39999,
    duration: "3 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 55,
    prerequisites: [
      "Basic manual testing knowledge recommended",
      "Basic understanding of Java or Python",
      "A computer with at least 8GB RAM"
    ],
    curriculum: [
      { week: "Week 1–2", title: "Selenium Setup & Basics", topics: ["Environment setup (Java/Python)", "WebDriver fundamentals", "First automated test"] },
      { week: "Week 3–4", title: "Locators & Interactions", topics: ["XPath, CSS selectors, ID strategies", "Handling dynamic elements", "Forms, dropdowns, and alerts"] },
      { week: "Week 5–6", title: "Test Framework Design", topics: ["TestNG / JUnit basics", "Page Object Model (POM)", "Data-driven testing"] },
      { week: "Week 7–8", title: "Advanced Selenium", topics: ["Waits and synchronisation", "Cross-browser testing", "Handling iframes and windows"] },
      { week: "Week 9–10", title: "CI/CD Integration", topics: ["Maven/Gradle build tools", "GitHub Actions pipeline setup", "Test reporting with Allure/ExtentReports"] },
      { week: "Week 11–12", title: "Final Project", topics: ["End-to-end automation suite", "Full CI/CD pipeline", "Portfolio-ready codebase"] },
    ],
    testimonials: []
  },

  "selenium-istqb": {
    id: "selenium-istqb",
    title: "Web Automation (Selenium) + ISTQB Voucher",
    track: "Automation",
    categories: ["automation"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }],
    tool: "Selenium · ISTQB Voucher",
    tagline: "Industry-standard automation plus international certification.",
    description: "Complete Selenium automation course plus ISTQB Foundation Level voucher and preparation. Graduate with both a hands-on automation portfolio and a globally recognised certification.",
    price: 59999,
    duration: "3.5 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 31,
    prerequisites: [
      "Basic Java or Python knowledge",
      "Familiarity with manual testing concepts",
      "Commitment to prepare for ISTQB exam"
    ],
    curriculum: [
      { week: "Week 1–12", title: "Full Selenium Course", topics: ["All content from the Web Automation — Selenium course", "See Selenium curriculum for full breakdown"] },
      { week: "Week 13–14", title: "ISTQB Exam Preparation", topics: ["ISTQB Foundation Level syllabus review", "Mock exam and walkthrough", "Voucher issuance and scheduling support"] },
    ],
    testimonials: []
  },

  "cypress": {
    id: "cypress",
    title: "Test Automation — Cypress",
    track: "Automation",
    categories: ["automation"],
    icon: "🌲",
    cardBg: "var(--green-light)",
    tags: [{ label: "IN DEMAND", cls: "tag-hot" }],
    tool: "Cypress · GitHub Actions",
    tagline: "Modern, fast, JavaScript-first browser automation.",
    description: "Cypress has become the go-to choice for frontend automation at modern product companies. This course takes you from setup to GitHub Actions CI/CD with real-time test feedback.",
    price: 44999,
    duration: "3 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 47,
    prerequisites: [
      "Basic JavaScript (or willingness to learn)",
      "Familiarity with manual testing concepts",
      "Node.js installed on your machine"
    ],
    curriculum: [
      { week: "Week 1–2", title: "Cypress Fundamentals", topics: ["Installation and project setup", "Writing your first Cypress test", "Cypress command structure"] },
      { week: "Week 3–4", title: "Selectors & Interactions", topics: ["Querying DOM elements", "Actions: click, type, select", "Assertions with Chai"] },
      { week: "Week 5–6", title: "Advanced Testing Patterns", topics: ["Custom commands", "Fixtures and data management", "API testing with Cypress"] },
      { week: "Week 7–8", title: "Test Organisation & Hooks", topics: ["Folder structure best practices", "before, after, beforeEach hooks", "Environment configuration"] },
      { week: "Week 9–10", title: "CI/CD with GitHub Actions", topics: ["GitHub Actions workflow setup", "Cypress Dashboard integration", "Parallel test execution"] },
      { week: "Week 11–14", title: "Final Project", topics: ["Full E2E test suite", "CI/CD pipeline", "Test reporting and documentation"] },
    ],
    testimonials: []
  },

  "cypress-istqb": {
    id: "cypress-istqb",
    title: "Test Automation (Cypress) + ISTQB Voucher",
    track: "Automation",
    categories: ["automation"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }],
    tool: "Cypress · ISTQB Voucher",
    tagline: "Modern automation plus certification in one package.",
    description: "Complete Cypress automation course plus ISTQB Foundation Level voucher and prep. Pair practical, job-ready skills with a globally recognised certification.",
    price: 64999,
    duration: "4 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 24,
    prerequisites: [
      "Basic JavaScript knowledge",
      "Familiarity with manual testing",
      "Node.js installed on your machine"
    ],
    curriculum: [
      { week: "Week 1–14", title: "Full Cypress Course", topics: ["All content from the Test Automation — Cypress course", "See Cypress curriculum for full breakdown"] },
      { week: "Week 15–16", title: "ISTQB Exam Preparation", topics: ["ISTQB Foundation Level syllabus review", "Mock exam and walkthrough", "Voucher issuance and scheduling support"] },
    ],
    testimonials: []
  },

  "playwright-typescript": {
    id: "playwright-typescript",
    title: "Test Automation — Playwright (TypeScript)",
    track: "Automation",
    categories: ["automation"],
    icon: "🎭",
    cardBg: "#fff0f0",
    tags: [{ label: "IN DEMAND", cls: "tag-hot" }],
    tool: "Playwright · TypeScript",
    tagline: "The modern standard for serious automation engineers.",
    description: "Playwright with TypeScript is rapidly becoming the automation framework of choice at forward-thinking QA teams. Multi-browser, parallel execution, smart auto-waiting — this course covers it all.",
    price: 44999,
    duration: "3 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.9,
    reviews: 43,
    prerequisites: [
      "Basic TypeScript or JavaScript knowledge",
      "Familiarity with manual or API testing",
      "Node.js installed on your machine"
    ],
    curriculum: [
      { week: "Week 1–2", title: "TypeScript & Playwright Basics", topics: ["TypeScript essentials for testers", "Playwright setup and first test", "Browsers: Chromium, Firefox, WebKit"] },
      { week: "Week 3–4", title: "Locators & Interactions", topics: ["Playwright's smart locators", "Auto-waiting and assertions", "Handling popups, dialogs, and frames"] },
      { week: "Week 5–6", title: "Page Object Model", topics: ["POM with TypeScript classes", "Reusable component patterns", "Test data management"] },
      { week: "Week 7–8", title: "Parallel & Cross-Browser Testing", topics: ["Playwright test workers", "Cross-browser test configuration", "Screenshots and video on failure"] },
      { week: "Week 9–10", title: "API Testing with Playwright", topics: ["request fixture for API calls", "Mixing UI and API in one test", "Mocking API responses"] },
      { week: "Week 11–14", title: "CI/CD & Final Project", topics: ["GitHub Actions for Playwright", "Allure reporting integration", "Full suite for a production-like app"] },
    ],
    testimonials: []
  },

  "playwright-istqb": {
    id: "playwright-istqb",
    title: "Playwright (TypeScript) + ISTQB Advanced",
    track: "Automation",
    categories: ["automation"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }, { label: "BEST VALUE", cls: "tag-hot" }],
    tool: "Playwright · ISTQB Advanced",
    tagline: "The career-defining combination for senior QA engineers.",
    description: "The complete Playwright TypeScript course combined with ISTQB Advanced Test Automation Engineer voucher and preparation. This is the bundle that opens doors to senior QA roles.",
    price: 64999,
    duration: "4 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.9,
    reviews: 21,
    prerequisites: [
      "Basic TypeScript or JavaScript knowledge",
      "At least 6 months of QA experience recommended",
      "Node.js installed on your machine"
    ],
    curriculum: [
      { week: "Week 1–14", title: "Full Playwright TypeScript Course", topics: ["All content from the Playwright TypeScript course", "See Playwright TypeScript for full week-by-week breakdown"] },
      { week: "Week 15–16", title: "ISTQB Advanced Exam Preparation", topics: ["ISTQB Advanced Test Automation syllabus", "Mock exams and question walkthroughs", "Voucher issuance and exam scheduling support"] },
    ],
    testimonials: []
  },

  "playwright-javascript": {
    id: "playwright-javascript",
    title: "Test Automation — Playwright (JavaScript)",
    track: "Automation",
    categories: ["automation"],
    icon: "🎭",
    cardBg: "#fff0f0",
    tags: [{ label: "IN DEMAND", cls: "tag-hot" }],
    tool: "Playwright · JavaScript",
    tagline: "Playwright power, JavaScript simplicity.",
    description: "The full Playwright course delivered in JavaScript. Multi-browser testing, parallel execution, CI/CD integration — everything in Playwright's toolkit, accessible to JS developers without the TypeScript overhead.",
    price: 44999,
    duration: "3 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 35,
    prerequisites: [
      "Basic JavaScript knowledge",
      "Familiarity with manual or API testing",
      "Node.js installed on your machine"
    ],
    curriculum: [
      { week: "Week 1–2", title: "JavaScript & Playwright Basics", topics: ["JavaScript essentials for testers", "Playwright setup with JS config", "First browser test"] },
      { week: "Week 3–4", title: "Locators & Assertions", topics: ["Smart locators in Playwright", "Expect assertions library", "Handling dynamic content"] },
      { week: "Week 5–6", title: "Page Object Model", topics: ["POM with JavaScript classes", "Reusable test helpers", "Test fixtures and setup"] },
      { week: "Week 7–8", title: "Multi-Browser & Parallel Testing", topics: ["Running tests on Chromium, Firefox, WebKit", "Worker-based parallel execution", "Debugging with trace viewer"] },
      { week: "Week 9–10", title: "API & Visual Testing", topics: ["API testing with Playwright", "Screenshot and visual comparisons", "Mocking network requests"] },
      { week: "Week 11–14", title: "CI/CD & Final Project", topics: ["GitHub Actions integration", "Allure or HTML reporter", "End-to-end portfolio project"] },
    ],
    testimonials: []
  },

  "playwright-javascript-istqb": {
    id: "playwright-javascript-istqb",
    title: "Playwright (JavaScript) + ISTQB Voucher",
    track: "Automation",
    categories: ["automation"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }],
    tool: "Playwright · ISTQB Voucher",
    tagline: "JavaScript Playwright mastery plus certification.",
    description: "Complete Playwright JavaScript course plus ISTQB Advanced Test Automation voucher and preparation. Graduate with a production-ready automation portfolio and a recognised certification.",
    price: 64999,
    duration: "4 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 18,
    prerequisites: [
      "Basic JavaScript knowledge",
      "Familiarity with testing concepts",
      "Node.js installed on your machine"
    ],
    curriculum: [
      { week: "Week 1–14", title: "Full Playwright JavaScript Course", topics: ["All content from the Playwright JavaScript course", "See Playwright JavaScript for full breakdown"] },
      { week: "Week 15–16", title: "ISTQB Exam Preparation", topics: ["ISTQB Advanced Test Automation syllabus review", "Mock exam and walkthrough", "Voucher issuance and scheduling"] },
    ],
    testimonials: []
  },

  "robot-framework": {
    id: "robot-framework",
    title: "Test Automation — Robot Framework",
    track: "Automation",
    categories: ["automation"],
    icon: "🤖",
    cardBg: "var(--blue-light)",
    tags: [{ label: "IN DEMAND", cls: "tag-hot" }],
    tool: "Robot Framework",
    tagline: "Keyword-driven automation that non-programmers can learn.",
    description: "From basics of Robot Framework to full CI/CD integration. Hands-on experience with setup, configurations, keyword-driven testing, and pipeline automation — making you versatile across projects.",
    price: 44999,
    duration: "3 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.6,
    reviews: 29,
    prerequisites: [
      "Basic understanding of software testing",
      "Basic Python knowledge is helpful but not required",
      "Python installed on your machine"
    ],
    curriculum: [
      { week: "Week 1–2", title: "Robot Framework Basics", topics: ["Installation and project structure", "Keyword-driven test approach", "First test suite"] },
      { week: "Week 3–4", title: "Built-in Libraries", topics: ["SeleniumLibrary for web testing", "RequestsLibrary for API testing", "DatabaseLibrary basics"] },
      { week: "Week 5–6", title: "Advanced Keywords & Variables", topics: ["Creating custom keywords", "Variable types and scope", "Data-driven testing with Robot"] },
      { week: "Week 7–8", title: "Test Organisation", topics: ["Resource files and keyword libraries", "Tagging and test filtering", "Reporting with Robot output files"] },
      { week: "Week 9–10", title: "CI/CD Integration", topics: ["Jenkins and GitHub Actions setup", "Pabot for parallel execution", "Publishing test results"] },
      { week: "Week 11–14", title: "Final Project", topics: ["Full automation suite", "CI/CD pipeline", "Portfolio documentation"] },
    ],
    testimonials: []
  },

  "robot-framework-istqb": {
    id: "robot-framework-istqb",
    title: "Robot Framework + ISTQB Voucher",
    track: "Automation",
    categories: ["automation"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }],
    tool: "Robot Framework · ISTQB Voucher",
    tagline: "Keyword-driven automation plus international certification.",
    description: "Complete Robot Framework course plus ISTQB Advanced Test Automation voucher and prep. Stand out with a versatile automation skill combined with a globally recognised certification.",
    price: 64999,
    duration: "4 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.6,
    reviews: 15,
    prerequisites: [
      "Basic understanding of software testing",
      "Python knowledge helpful",
      "Commitment to prepare for ISTQB exam"
    ],
    curriculum: [
      { week: "Week 1–14", title: "Full Robot Framework Course", topics: ["All content from the Test Automation — Robot Framework course", "See Robot Framework curriculum for full breakdown"] },
      { week: "Week 15–16", title: "ISTQB Exam Preparation", topics: ["ISTQB Advanced Test Automation syllabus review", "Mock exam and walkthrough", "Voucher issuance and scheduling"] },
    ],
    testimonials: []
  },

  "appium": {
    id: "appium",
    title: "Mobile Automation — Appium",
    track: "Automation",
    categories: ["automation"],
    icon: "📲",
    cardBg: "var(--blue-light)",
    tags: [{ label: "IN DEMAND", cls: "tag-hot" }],
    tool: "Appium",
    tagline: "Automate Android and iOS apps like a pro.",
    description: "Automate mobile applications on Android and iOS using Appium. Learn to handle UI elements, gestures, and perform cross-platform testing that directly applies to mobile-first products across East Africa.",
    price: 44999,
    duration: "3 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 26,
    prerequisites: [
      "Basic Java or Python knowledge",
      "Familiarity with mobile app testing concepts",
      "Android Studio or Xcode installed (guidance provided)"
    ],
    curriculum: [
      { week: "Week 1–2", title: "Appium Setup & Architecture", topics: ["Appium server setup", "Android emulator/real device config", "First mobile test"] },
      { week: "Week 3–4", title: "Element Identification", topics: ["UIAutomator2 and XCUITest drivers", "Finding elements on mobile screens", "Handling gestures and scrolling"] },
      { week: "Week 5–6", title: "Mobile Interactions", topics: ["Tap, swipe, pinch, zoom", "Handling permissions and alerts", "Keyboard and input handling"] },
      { week: "Week 7–8", title: "Page Object Model for Mobile", topics: ["POM design for iOS and Android", "Shared test logic across platforms", "Test data management"] },
      { week: "Week 9–10", title: "Advanced & CI/CD", topics: ["Appium Grid for parallel execution", "Cloud testing with BrowserStack/Sauce Labs", "CI/CD integration"] },
      { week: "Week 11–12", title: "Final Project", topics: ["Full mobile automation suite", "Cross-platform test coverage", "Portfolio walkthrough"] },
    ],
    testimonials: []
  },

  "appium-istqb": {
    id: "appium-istqb",
    title: "Mobile Automation (Appium) + ISTQB Voucher",
    track: "Automation",
    categories: ["automation"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }],
    tool: "Appium · ISTQB Voucher",
    tagline: "Mobile automation mastery plus certification.",
    description: "Complete Appium mobile automation course plus ISTQB Foundation Level voucher and preparation. Mobile testing is one of the most in-demand QA skills — pair it with a certification to stand out.",
    price: 59999,
    duration: "3.5 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 14,
    prerequisites: [
      "Basic Java or Python knowledge",
      "Familiarity with mobile testing concepts",
      "Commitment to prepare for ISTQB exam"
    ],
    curriculum: [
      { week: "Week 1–12", title: "Full Appium Course", topics: ["All content from the Mobile Automation — Appium course", "See Appium curriculum for full breakdown"] },
      { week: "Week 13–14", title: "ISTQB Exam Preparation", topics: ["ISTQB Foundation Level syllabus review", "Mock exam and walkthrough", "Voucher issuance and scheduling"] },
    ],
    testimonials: []
  },

  // ── PERFORMANCE ──────────────────────────────────────────
  "performance-testing": {
    id: "performance-testing",
    title: "Performance Testing",
    track: "Performance",
    categories: ["performance"],
    icon: "⚡",
    cardBg: "var(--blue-light)",
    tags: [{ label: "IN DEMAND", cls: "tag-hot" }],
    tool: "JMeter · k6",
    tagline: "Measure and optimise application performance under load.",
    description: "Learn load testing, stress testing, and performance bottleneck identification. Using industry-standard tools, you'll simulate real user traffic and pinpoint what breaks under pressure — a skill every serious QA engineer needs.",
    price: 44999,
    duration: "4 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 22,
    prerequisites: [
      "Basic QA or software testing knowledge",
      "Familiarity with web applications",
      "Basic understanding of networks (helpful)"
    ],
    curriculum: [
      { week: "Week 1–2", title: "Performance Testing Fundamentals", topics: ["What is performance testing", "Types: load, stress, spike, soak", "Key metrics: response time, throughput, error rate"] },
      { week: "Week 3–4", title: "JMeter Basics", topics: ["JMeter setup and UI overview", "Creating test plans and thread groups", "Samplers, listeners, and assertions"] },
      { week: "Week 5–6", title: "Advanced JMeter", topics: ["Parameterisation and correlation", "Distributed testing setup", "CI/CD integration with JMeter"] },
      { week: "Week 7–8", title: "k6 Modern Load Testing", topics: ["k6 setup and scripting in JS", "k6 cloud and local execution", "Comparing JMeter vs k6 use cases"] },
      { week: "Week 9–10", title: "Analysis & Bottleneck Identification", topics: ["Reading performance reports", "Finding CPU, memory, DB bottlenecks", "Recommending performance fixes"] },
      { week: "Week 11–16", title: "Final Project", topics: ["Full performance test plan", "Load testing a real application", "Comprehensive performance report"] },
    ],
    testimonials: []
  },

  "performance-testing-istqb": {
    id: "performance-testing-istqb",
    title: "Performance Testing + ISTQB Voucher",
    track: "Performance",
    categories: ["performance"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }],
    tool: "JMeter · k6 · ISTQB Voucher",
    tagline: "Performance expertise with certification to back it up.",
    description: "Complete Performance Testing course plus ISTQB Foundation Level voucher and preparation. Combine deep technical performance skills with an internationally recognised certification.",
    price: 64999,
    duration: "4.5 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 12,
    prerequisites: [
      "Basic QA or software testing knowledge",
      "Familiarity with web applications",
      "Commitment to prepare for ISTQB exam"
    ],
    curriculum: [
      { week: "Week 1–16", title: "Full Performance Testing Course", topics: ["All content from the Performance Testing course", "See Performance Testing for full breakdown"] },
      { week: "Week 17–18", title: "ISTQB Exam Preparation", topics: ["ISTQB Foundation Level syllabus review", "Mock exam and walkthrough", "Voucher issuance and scheduling"] },
    ],
    testimonials: []
  },

  // ── SECURITY ─────────────────────────────────────────────
  "security-testing": {
    id: "security-testing",
    title: "Security Testing",
    track: "Security",
    categories: ["security"],
    icon: "🔐",
    cardBg: "#fff0f0",
    tags: [{ label: "IN DEMAND", cls: "tag-hot" }],
    tool: "OWASP · Burp Suite",
    tagline: "Identify and prevent vulnerabilities before attackers do.",
    description: "Learn how to identify and prevent security vulnerabilities in software applications. Covers penetration testing methodologies and OWASP security guidelines — an increasingly critical skill as African fintech scales.",
    price: 54999,
    duration: "4 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 19,
    prerequisites: [
      "Basic software testing knowledge",
      "Understanding of web application architecture",
      "Familiarity with HTTP and APIs"
    ],
    curriculum: [
      { week: "Week 1–2", title: "Security Testing Fundamentals", topics: ["What is application security testing", "OWASP Top 10 overview", "Threat modelling basics"] },
      { week: "Week 3–4", title: "Web Application Security", topics: ["SQL injection testing", "XSS and CSRF vulnerabilities", "Authentication and session testing"] },
      { week: "Week 5–6", title: "Burp Suite Deep Dive", topics: ["Intercepting and modifying requests", "Scanning for vulnerabilities", "Reporting security findings"] },
      { week: "Week 7–8", title: "API Security Testing", topics: ["REST API security testing", "OAuth and JWT vulnerabilities", "Mass assignment and injection via API"] },
      { week: "Week 9–10", title: "Mobile & Network Security Basics", topics: ["Mobile app security testing", "Network traffic analysis", "SSL/TLS testing"] },
      { week: "Week 11–16", title: "Final Project", topics: ["Full security test engagement", "Vulnerability report writing", "Remediation recommendations"] },
    ],
    testimonials: []
  },

  "security-testing-istqb": {
    id: "security-testing-istqb",
    title: "Security Testing + ISTQB Voucher",
    track: "Security",
    categories: ["security"],
    icon: "🏆",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }],
    tool: "OWASP · Burp Suite · ISTQB",
    tagline: "Security expertise plus certification.",
    description: "Complete Security Testing course plus ISTQB Foundation Level voucher and preparation. Security testing is one of the highest-paying QA specialisations — pair it with certification to maximise your career trajectory.",
    price: 69999,
    duration: "4.5 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 10,
    prerequisites: [
      "Basic software testing knowledge",
      "Web application architecture familiarity",
      "Commitment to prepare for ISTQB exam"
    ],
    curriculum: [
      { week: "Week 1–16", title: "Full Security Testing Course", topics: ["All content from the Security Testing course", "See Security Testing for full breakdown"] },
      { week: "Week 17–18", title: "ISTQB Exam Preparation", topics: ["ISTQB Foundation Level syllabus review", "Mock exam and walkthrough", "Voucher issuance and scheduling"] },
    ],
    testimonials: []
  },

  // ── ISTQB PREPARATION ────────────────────────────────────
  "istqb-foundation-prep": {
    id: "istqb-foundation-prep",
    title: "ISTQB Foundation Level — Exam Preparation",
    track: "ISTQB",
    categories: ["istqb"],
    icon: "📚",
    cardBg: "var(--blue-light)",
    tags: [{ label: "ISTQB", cls: "tag-istqb" }],
    tool: null,
    tagline: "Get ready to ace the ISTQB Foundation Level exam.",
    description: "Expert-led preparation for the ISTQB Foundation Level (CTFL) exam. Structured sessions focused on the exact syllabus content, question techniques, and exam strategy that maximise your chance of passing first time.",
    price: 9999,
    duration: "2 weeks",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 44,
    prerequisites: [
      "Some basic understanding of software testing recommended",
      "Purchased ISTQB exam voucher (or purchase via the bundle below)",
      "Willingness to study additional hours outside sessions"
    ],
    curriculum: [
      { week: "Session 1–2", title: "CTFL Syllabus: Fundamentals", topics: ["What is testing and why it matters", "Seven testing principles", "Test activities and test process"] },
      { week: "Session 3–4", title: "Testing Throughout the SDLC", topics: ["Testing levels and types", "Maintenance testing", "DevOps and shift-left testing"] },
      { week: "Session 5–6", title: "Static Testing", topics: ["Static testing basics", "Feedback and review process", "Review types"] },
      { week: "Session 7–8", title: "Test Analysis & Design", topics: ["Black-box techniques", "White-box techniques", "Experience-based techniques"] },
      { week: "Session 9–10", title: "Exam Strategy & Mock Tests", topics: ["Exam format walkthrough", "Full timed mock exam", "Review and correction of weak areas"] },
    ],
    testimonials: []
  },

  "istqb-foundation-voucher": {
    id: "istqb-foundation-voucher",
    title: "ISTQB Foundation Prep + Exam Voucher",
    track: "ISTQB",
    categories: ["istqb"],
    icon: "🎟️",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB BUNDLE", cls: "tag-istqb" }, { label: "POPULAR", cls: "tag-pop" }],
    tool: "ISTQB Voucher Included",
    tagline: "Everything you need to sit and pass the ISTQB Foundation exam.",
    description: "Full Foundation Level preparation course plus your official ISTQB exam voucher included. One package, one payment — register, prepare, and sit your exam without any extra steps.",
    price: 21999,
    duration: "2.5 weeks",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.9,
    reviews: 38,
    prerequisites: [
      "Some understanding of software testing recommended",
      "Willingness to study outside class hours"
    ],
    curriculum: [
      { week: "Session 1–10", title: "Full Foundation Prep Course", topics: ["All content from the ISTQB Foundation Prep course", "See Foundation Prep for full session breakdown"] },
      { week: "Post-Course", title: "Voucher & Exam Scheduling", topics: ["Voucher issued on course completion", "Guidance on scheduling your exam", "Post-exam support if needed"] },
    ],
    testimonials: []
  },

  "istqb-advanced-prep": {
    id: "istqb-advanced-prep",
    title: "ISTQB Advanced Test Automation — Exam Prep",
    track: "ISTQB",
    categories: ["istqb"],
    icon: "🎓",
    cardBg: "var(--blue-light)",
    tags: [{ label: "ISTQB ADVANCED", cls: "tag-istqb" }],
    tool: null,
    tagline: "Excel in your ISTQB Advanced Test Automation exam.",
    description: "Dedicated preparation for the ISTQB Advanced Level Test Automation Engineer (CTAL-TAE) exam. Focused on the advanced syllabus with experienced instructors who have taken and passed the exam themselves.",
    price: 14999,
    duration: "3 weeks",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 27,
    prerequisites: [
      "ISTQB Foundation Level certification (required)",
      "At least 1-2 years of QA or automation experience",
      "Familiarity with at least one automation framework"
    ],
    curriculum: [
      { week: "Session 1–2", title: "TAE Syllabus: Introduction & Architecture", topics: ["Purpose and goals of test automation", "Automation architecture overview", "Success factors for automation"] },
      { week: "Session 3–4", title: "Preparing for Automation", topics: ["SUT analysis and tool selection", "Automation strategy design", "ROI and feasibility"] },
      { week: "Session 5–6", title: "Designing the Automation Solution", topics: ["TAA design patterns", "Test automation framework implementation", "Reporting and metrics"] },
      { week: "Session 7–8", title: "Deployment & Mock Exams", topics: ["Pipeline and maintenance", "Full timed mock exam", "Review of weak areas"] },
    ],
    testimonials: []
  },

  "istqb-advanced-voucher": {
    id: "istqb-advanced-voucher",
    title: "ISTQB Advanced Test Automation Prep + Voucher",
    track: "ISTQB",
    categories: ["istqb"],
    icon: "🎟️",
    cardBg: "var(--green-light)",
    tags: [{ label: "ISTQB ADVANCED", cls: "tag-istqb" }],
    tool: "ISTQB Advanced Voucher",
    tagline: "Advanced certification preparation and your exam voucher in one.",
    description: "Complete ISTQB Advanced Test Automation Engineer preparation plus your official exam voucher. For experienced QA engineers ready to take the step to senior and lead roles.",
    price: 33999,
    duration: "4 weeks",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 16,
    prerequisites: [
      "ISTQB Foundation Level certification (required)",
      "At least 2 years of QA/automation experience",
      "Experience with at least one automation framework"
    ],
    curriculum: [
      { week: "Session 1–8", title: "Full ISTQB Advanced TAE Prep", topics: ["All content from the Advanced Prep course", "See Advanced Prep curriculum for full breakdown"] },
      { week: "Post-Course", title: "Voucher & Exam Scheduling", topics: ["ISTQB Advanced voucher issued on completion", "Guidance on scheduling your exam", "Post-exam debrief support"] },
    ],
    testimonials: []
  },

  // ── SPECIALIST ───────────────────────────────────────────
  "aws-practitioner": {
    id: "aws-practitioner",
    title: "AWS Cloud Practitioner — Exam Prep",
    track: "Specialist",
    categories: ["specialist"],
    icon: "☁️",
    cardBg: "#fff4ed",
    tags: [{ label: "AWS", cls: "tag-new" }],
    tool: "AWS",
    tagline: "For QA engineers stepping into cloud environments.",
    description: "Structured preparation for the AWS Certified Cloud Practitioner exam, tailored specifically for QA and testing professionals. Understand cloud infrastructure so you can test it properly.",
    price: 19999,
    duration: "3 weeks",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.6,
    reviews: 14,
    prerequisites: [
      "Basic understanding of software development or testing",
      "No prior cloud experience required",
      "Familiarity with basic networking concepts is helpful"
    ],
    curriculum: [
      { week: "Week 1", title: "Cloud & AWS Fundamentals", topics: ["What is cloud computing", "AWS core services overview", "IAM, EC2, S3 basics for QA"] },
      { week: "Week 2", title: "Cloud Testing Concepts", topics: ["Testing in cloud environments", "AWS testing tools", "Security and compliance basics"] },
      { week: "Week 3", title: "Exam Preparation", topics: ["AWS Practitioner exam format", "Full mock exam", "Final review and guidance"] },
    ],
    testimonials: []
  },

  // ── BOOTCAMPS ─────────────────────────────────────────────
  "bootcamp-2026": {
    id: "bootcamp-2026",
    title: "Fullstack QA Bootcamp 2026",
    track: "Bootcamp",
    categories: ["bootcamps"],
    icon: "🚀",
    cardBg: "var(--yellow)",
    tags: [{ label: "INTENSIVE", cls: "tag-hot" }, { label: "LIMITED SEATS", cls: "tag-pop" }],
    tool: null,
    tagline: "Go from beginner to job-ready QA engineer in one intensive programme.",
    description: "An intensive instructor-led bootcamp covering the full spectrum of software QA engineering — from manual testing fundamentals to automation, API testing, and CI/CD. Designed to get you job-ready as fast as possible.",
    price: 100000,
    duration: "10 months",
    cohort: "May 2026",
    mode: "Virtual · Hybrid · Instructor-Led",
    rating: 4.9,
    reviews: 31,
    prerequisites: [
      "No prior tech experience required",
      "A laptop or desktop with at least 8GB RAM",
      "Strong commitment — this is an intensive programme"
    ],
    curriculum: [
      { week: "Phase 1", title: "QA Foundations", topics: ["Software testing fundamentals", "Manual testing techniques", "JIRA and test management tools"] },
      { week: "Phase 2", title: "API Testing", topics: ["REST API concepts", "Postman for API testing", "API automation basics"] },
      { week: "Phase 3", title: "Web Automation", topics: ["Selenium or Playwright (your choice)", "Page Object Model", "Cross-browser testing"] },
      { week: "Phase 4", title: "CI/CD & Deployment", topics: ["GitHub Actions pipeline", "Automated test reporting", "Portfolio project"] },
    ],
    testimonials: []
  },

  "automation-governance": {
    id: "automation-governance",
    title: "Automation & Governance in Software QA",
    track: "Bootcamp",
    categories: ["bootcamps"],
    icon: "🏛️",
    cardBg: "var(--blue-light)",
    tags: [{ label: "SPECIALIST", cls: "tag-new" }],
    tool: null,
    tagline: "Compliance, frameworks, and quality at enterprise scale.",
    description: "Implement robust automation frameworks while ensuring compliance with industry standards, best practices, and regulatory requirements to enhance software reliability, efficiency, and scalability across your organisation.",
    price: 80000,
    duration: "2 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.7,
    reviews: 9,
    prerequisites: [
      "At least 2 years of QA experience",
      "Experience with automation frameworks",
      "Familiarity with Agile/DevOps environments"
    ],
    curriculum: [
      { week: "Week 1", title: "Automation Strategy & Governance", topics: ["Defining automation objectives", "Governance frameworks for QA", "Compliance requirements in software quality"] },
      { week: "Week 2", title: "Framework Design & Standards", topics: ["Industry-standard automation architectures", "Code quality and maintainability", "Documentation and audit trails"] },
      { week: "Week 3", title: "Implementation & Scaling", topics: ["Scaling automation across teams", "Regulatory compliance testing", "QA maturity models"] },
    ],
    testimonials: []
  },

  "bootcamp-manual-ai": {
    id: "bootcamp-manual-ai",
    title: "Manual Testing + AI in Manual Testing Bootcamp",
    track: "Bootcamp",
    categories: ["bootcamps"],
    icon: "📋",
    cardBg: "#fff4ed",
    tags: [{ label: "INTENSIVE", cls: "tag-hot" }, { label: "LIMITED SEATS", cls: "tag-pop" }],
    tool: null,
    tagline: "Build strong QA fundamentals and step into the future with AI-powered testing.",
    description: "A focused bootcamp covering professional manual testing techniques alongside modern AI tools for testing. Graduate with a Kiwami Tech Certificate, ISTQB Foundation prep, and two mock interviews — all in 2.5 months.",
    price: 55000,
    duration: "2.5 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 22,
    prerequisites: [
      "No prior tech experience required",
      "A laptop or desktop computer",
      "Strong commitment to the programme schedule"
    ],
    curriculum: [
      { week: "Week 1", title: "Manual Testing Techniques", topics: ["Manual Testing Techniques", "Agile QA Practices", "Defect Management"] },
      { week: "Week 2", title: "QA Practices & Reporting", topics: ["QA Reporting", "QA in Modern SDLC", "QA roles in Agile & DevOps (shift-left, shift-right)"] },
      { week: "Week 3", title: "QA Process & Planning", topics: ["Change management in QA", "QA in release cycles & post-night activities", "Test planning, estimation, reporting"] },
      { week: "Week 4", title: "Project on Manual Testing", topics: ["End-to-end manual testing project", "Real-world test scenario walkthrough", "Test artefacts and documentation"] },
      { week: "Week 5", title: "AI in Manual Testing", topics: ["AI in Manual Testing fundamentals", "AI in Defect Prediction & Analytics", "AI-assisted test case design"] },
      { week: "Week 6", title: "Mini Project on AI in Manual Testing", topics: ["AI-assisted test cases using Testim/Mabl", "Use an AI model to identify defect-prone areas", "Checkpoint review and feedback"] },
      { week: "Week 7–10", title: "Certification & Interview Prep", topics: ["Awarding of Kiwami Tech Certificate (Manual Testing + AI in Manual Testing)", "ISTQB Foundation Level Certificate preparation", "2 Manual Testing mock interviews"] },
    ],
    testimonials: []
  },

  "bootcamp-test-automation-ai": {
    id: "bootcamp-test-automation-ai",
    title: "Test Automation + AI in Test Automation Bootcamp",
    track: "Bootcamp",
    categories: ["bootcamps"],
    icon: "⚙️",
    cardBg: "var(--blue-light)",
    tags: [{ label: "INTENSIVE", cls: "tag-hot" }, { label: "LIMITED SEATS", cls: "tag-pop" }],
    tool: "Selenium · Cypress · Playwright · Appium",
    tagline: "Master test automation across web, mobile, and API — enhanced by AI.",
    description: "An intensive 8-month bootcamp covering the full automation stack: foundations, specialisation tracks, AI-powered testing, and CI/CD integration. Graduate with an ISTQB Advanced Level Certificate and 2 mock technical interviews.",
    price: 80000,
    duration: "8 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.9,
    reviews: 18,
    prerequisites: [
      "Basic understanding of software testing recommended",
      "A laptop or desktop with at least 8GB RAM",
      "Strong commitment — this is an 8-month intensive programme"
    ],
    curriculum: [
      { week: "Week 1–2", title: "Foundations of Test Automation", topics: ["Setting up Environments (Local, Containers, Cloud)", "Core Programming for Automation Engineers", "Version Control for Automation Engineers"] },
      { week: "Week 3–4", title: "BDD & End-to-End Automation", topics: ["BDD & End-to-End Automation", "UI & UI Test Automation Frameworks Overview", "Selenium, Cypress, Playwright, Puppeteer"] },
      { week: "Week 5–6", title: "API Test Automation", topics: ["REST & SOAP fundamentals", "Postman & Newman, REST Assured, Karate DSL, Playwright API", "API Mocking & Service Virtualisation"] },
      { week: "Week 7–8", title: "Mobile Test Automation", topics: ["Tools: Appium (Android), XCUITest (iOS)", "Cloud Mobile Testing", "Automating across devices & emulators"] },
      { week: "Week 9–10", title: "End-to-End Automation & Playwright", topics: ["Playwright end-to-end scenarios", "Full-stack test coverage", "Advanced Playwright features"] },
      { week: "Week 11–12", title: "Specialisation Tracks — Choose Two (Compulsory: Playwright)", topics: ["UI Automation — Selenium, Cypress, Robot Framework advanced", "API Automation — REST Assured, Karate, Postman, Playwright API", "Mobile Automation — Appium, Espresso, XCUITest, Mobile Clouds"] },
      { week: "Week 13", title: "Advanced Automation Techniques", topics: ["Data-driven, Keyword-driven & Hybrid frameworks", "Managing Flaky Tests, Parallel Execution", "CI/CD Integration — Docker & Kubernetes, Automated reporting in pipelines"] },
      { week: "Week 14", title: "Cloud & Scalable Test Automation", topics: ["Cloud & Scalable Test Automation", "Containerised test automation", "Automation in Agile & DevOps"] },
      { week: "Week 15–16", title: "AI in Automation Testing", topics: ["AI-enhanced automation", "AI System Validation", "Enterprise QA AI Strategy"] },
      { week: "Week 17–20", title: "Mini Project, Final Project & Capstone", topics: ["Build a complete automation project in chosen specialisation (Web UI + API + Mobile where applicable)", "CI/CD Integration (GitLab/Jenkins), Reporting & dashboards", "Final Project Presentation & Peer Review"] },
      { week: "Week 21–32", title: "Certification & Interview Prep", topics: ["Awarding of Kiwami Tech Certificate (Test Automation + AI in Test Automation)", "ISTQB Advanced Level Test Automation Certificate preparation", "2 Test Automation Technical Practical mock interviews (Robot Framework + Specialisations)"] },
    ],
    testimonials: []
  },

  "bootcamp-non-functional-ai": {
    id: "bootcamp-non-functional-ai",
    title: "Non-Functional Testing + AI in Non-Functional Testing Bootcamp",
    track: "Bootcamp",
    categories: ["bootcamps"],
    icon: "⚡",
    cardBg: "#fff0f0",
    tags: [{ label: "INTENSIVE", cls: "tag-hot" }, { label: "LIMITED SEATS", cls: "tag-pop" }],
    tool: "JMeter · k6 · OWASP ZAP · Burp Suite",
    tagline: "Master performance and security testing — powered by AI insights.",
    description: "A 4-month deep dive into non-functional testing covering performance and security disciplines. Choose your specialisation, build real-world projects, and graduate with AI-enhanced testing skills using JMeter, k6, OWASP ZAP, and Burp Suite.",
    price: 80000,
    duration: "4 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.8,
    reviews: 14,
    prerequisites: [
      "Basic software testing knowledge recommended",
      "Familiarity with web applications and APIs",
      "A laptop or desktop with at least 8GB RAM"
    ],
    curriculum: [
      { week: "Week 1", title: "Overview of Non-Functional Testing", topics: ["Overview of Non-Functional Testing and importance in SDLC", "Intro to Performance: Load, Stress, Endurance, Scalability", "Intro to Security: Vulnerabilities, OWASP Top 10"] },
      { week: "Week 2", title: "Mini Project & Test Strategy", topics: ["Analyse an e-commerce site for non-functional issues (response times, vulnerabilities, scalability)", "Write a short Non-Functional Test Strategy", "Deliverable: Report + checklist of identified risks"] },
      { week: "Week 3–4", title: "Specialisation 1 — Performance Testing", topics: ["Tools: JMeter, Gatling, Locust, Loadrunner, K6", "Designing Performance Test Plans", "Monitoring & Analysing Performance Metrics, CI/CD for Performance Testing"] },
      { week: "Week 5", title: "AI in Performance Testing", topics: ["AI for Load Pattern Prediction", "Automated performance anomaly detection", "AI-driven performance reporting"] },
      { week: "Week 6", title: "Performance Capstone Project", topics: ["Load test a sample system using JMeter and Locust/K6", "Integrate performance tests into a pipeline — generate automated dashboards", "Deliverable: Performance Test Plan, scripts, results analysis & improvement recommendations"] },
      { week: "Week 7–8", title: "Specialisation 2 — Security Testing", topics: ["Tools Overview: OWASP ZAP, Burp Suite, Kali Linux basics — Vulnerability Scanning", "Penetration Testing for Web & Mobile, Secure Coding Principles", "AI in Vulnerability Prediction"] },
      { week: "Week 9–12", title: "Security Capstone Project & Certification", topics: ["Conduct a vulnerability scan on a demo web app using OWASP ZAP and Burp Suite", "Perform a penetration test (SQLi, XSS) on a test environment and document findings", "Deliverable: Security Test Report with identified issues, risk rating, and mitigation plan"] },
      { week: "Week 13–16", title: "Certification & Interview Prep", topics: ["Awarding of Kiwami Tech Certificate (Non-Functional Testing + AI)", "ISTQB Foundation or Advanced preparation", "Portfolio review and career guidance"] },
    ],
    testimonials: []
  },

  "bootcamp-ai-testing": {
    id: "bootcamp-ai-testing",
    title: "AI in Testing & AI System Validation Bootcamp",
    track: "Bootcamp",
    categories: ["bootcamps"],
    icon: "🤖",
    cardBg: "var(--green-light)",
    tags: [{ label: "INTENSIVE", cls: "tag-hot" }, { label: "LIMITED SEATS", cls: "tag-pop" }],
    tool: "Testim · Mabl · Selenium · Cypress · Applitools",
    tagline: "The future of QA — test AI systems and use AI to test smarter.",
    description: "A cutting-edge 4-month bootcamp covering AI tools for testing, AI system validation, and MLOps & RAG testing. Build AI-assisted test frameworks, validate ML models, and design adversarial prompts for chatbot and AI system testing.",
    price: 65000,
    duration: "4 months",
    cohort: "May 2026",
    mode: "Virtual · Instructor-Led",
    rating: 4.9,
    reviews: 11,
    prerequisites: [
      "Basic software testing knowledge recommended",
      "Curiosity about AI and ML systems",
      "A laptop or desktop with at least 8GB RAM"
    ],
    curriculum: [
      { week: "Week 1", title: "AI & ML Foundations for Testers", topics: ["AI & ML Foundations for Testers", "AI in Manual Testing", "AI-assisted test case design (Testim, Mabl)"] },
      { week: "Week 2", title: "AI in Defect Prediction & Test Automation", topics: ["AI in defect prediction & analytics", "AI in Test Automation", "AI for Test Data Generation"] },
      { week: "Week 3", title: "AI for Flaky Tests & CI/CD Pipelines", topics: ["AI for Flaky Test Detection & Stabilisation", "AI in CI/CD Pipelines", "Intelligent Test Prioritisation & Regression Selection"] },
      { week: "Week 4", title: "AI Coding Assistants & Mini Project 1", topics: ["AI Coding Assistants in Test Automation", "Mini Project 1: Build AI-assisted test cases using Testim/Mabl", "Use an AI model to identify defect-prone areas in a mock project"] },
      { week: "Week 5", title: "Automation Framework + AI & Mini Project 2", topics: ["Build an automation framework with Selenium/Cypress + Applitools", "Add self-healing & AI-powered test prioritisation", "Mini Project 2: Create an automation framework with self-healing & AI-powered test prioritisation"] },
      { week: "Week 6–7", title: "Testing AI/ML Systems & Gen AI", topics: ["Introduction to Testing AI", "Evaluation Metrics for AI Models", "Factuality & Consistency checks"] },
      { week: "Week 8", title: "Bias, Adversarial & LLM Testing", topics: ["Bias & Adversarial Testing", "WEAT & SEAT for LLM Bias", "LLM Evaluation Tools, PromptLayer and TruLens"] },
      { week: "Week 9", title: "Mini Project 3 & RAG Introduction", topics: ["Run fairness tests on an ML model with Fairlearn/AI360", "Design adversarial prompts & test a chatbot for bias/toxicity", "MLOps, RAG Testing — introduction"] },
      { week: "Week 10–11", title: "MLOps, RAG Testing & AI Regressions", topics: ["MLOps & RAG Testing in depth", "RAG (Retrieval-Augmented Generation) Testing", "Observability & Reporting in AI Testing, Alerts for AI regressions"] },
      { week: "Week 12–16", title: "Capstone Projects & Final Presentation", topics: ["Capstone: choose AI-Enhanced Automation, AI System Validation, or Enterprise QA AI Strategy", "Working project demo: run fairness tests on an ML model, design adversarial prompts & test a chatbot for bias/toxicity", "Final Presentation & Peer Review — Deliverables: Working project demo, QA AI Test Strategy document"] },
    ],
    testimonials: []
  },

  // "automation-governance": {
  //   id: "automation-governance",
  //   title: "Automation & Governance in Software QA",
  //   track: "Specialist",
  //   categories: ["specialist"],
  //   icon: "🏛️",
  //   cardBg: "var(--blue-light)",
  //   tags: [{ label: "SPECIALIST", cls: "tag-new" }],
  //   tool: null,
  //   tagline: "Compliance, frameworks, and quality at enterprise scale.",
  //   description: "Implement robust automation frameworks while ensuring compliance with industry standards, best practices, and regulatory requirements to enhance software reliability, efficiency, and scalability across your organisation.",
  //   price: 80000,
  //   duration: "2 months",
  //   cohort: "May 2026",
  //   mode: "Virtual · Instructor-Led",
  //   rating: 4.7,
  //   reviews: 9,
  //   prerequisites: [
  //     "At least 2 years of QA experience",
  //     "Experience with automation frameworks",
  //     "Familiarity with Agile/DevOps environments"
  //   ],
  //   curriculum: [
  //     { week: "Week 1", title: "Automation Strategy & Governance", topics: ["Defining automation objectives", "Governance frameworks for QA", "Compliance requirements in software quality"] },
  //     { week: "Week 2", title: "Framework Design & Standards", topics: ["Industry-standard automation architectures", "Code quality and maintainability", "Documentation and audit trails"] },
  //     { week: "Week 3", title: "Implementation & Scaling", topics: ["Scaling automation across teams", "Regulatory compliance testing", "QA maturity models"] },
  //   ],
  //   testimonials: []
  // },

};