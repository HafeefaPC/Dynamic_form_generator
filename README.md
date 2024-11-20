# Dynamic Form Generator

A web application that dynamically generates a styled and functional form from a JSON schema in real-time. The interface provides a JSON editor on the left and a live form preview on the right. Users can validate the JSON, interact with the form, and submit the data.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
  - [Editing JSON Schema](#editing-json-schema)
  - [Submitting the Form](#submitting-the-form)
- [Testing](#testing)
  - [Run Unit Tests (Jest)](#run-unit-tests-jest)
  - [Run End-to-End Tests (Playwright)](#run-end-to-end-tests-playwright)
  - [Testing Coverage](#testing-coverage)
- [Example JSON Schema](#example-json-schema)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Screenshots (Optional)](#screenshots-optional)

---

## Features

- **Split-Screen Interface**: JSON editor (left) and form preview (right).
- **Real-Time Updates**: Instant form generation from the JSON schema.
- **JSON Validation**: Displays error messages for invalid JSON.
- **Responsive Design**: Stacks editor and preview on smaller screens.
- **Form Features**:
  - Supports multiple field types (`text`, `email`, `select`, `radio`, etc.).
  - Form validation with error messages.
  - Loading states during form submission.
  - Success messages after submission.
  - Styled using **Tailwind CSS**.
- **Additional Features**:
  - Copy JSON schema functionality.
  - Dark mode support (bonus).
  - Download form submission as JSON.

---

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Testing**:
  - Unit Testing: Jest
  - End-to-End Testing: Playwright

---

## Setup Instructions

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm start`

## Example JSON Schema

Here's a sample schema to get started:

```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,
      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    }
  ]
}
```
## Deployment

The application is deployed using **Vercel**. Access it here:

[https://your-deployment-url.vercel.app](https://your-deployment-url.vercel.app)

---

## Contact

For any questions or support, contact me at:

- **Email**: hafeefapc2003@gmail.com
- **GitHub**: [https://github.com/your-username](https://github.com/HafeefaPC)

---

## Screenshots (Optional)

Include screenshots of your application showcasing:

- Split-screen layout.
- Form preview.
- Validation messages.
- Mobile responsiveness.


