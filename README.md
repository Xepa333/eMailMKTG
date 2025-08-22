# eMail Marketing Excellence Interactive Guide

This project is an interactive and gamified web application designed to teach the best practices of email marketing. It's based on the Viatris 'eMail Marketing Excellence' presentation and features an AI-powered quiz to test your knowledge.

## Features

-   **Interactive Sections**: Learn about the "Why" and "How" of email marketing through engaging content and data visualizations.
-   **10 Expert Tips**: Detailed pop-ups for each of the 10 core email marketing tips.
-   **AI-Powered Quiz**: Test your understanding with a dynamically generated quiz using the Google Gemini API.
-   **Pre-Send Checklist**: An interactive checklist to ensure your emails are ready for launch.
-   **KPI Explorer**: A breakdown of key performance indicators in email marketing.
-   **Responsive Design**: A clean, modern, and fully responsive user interface.

## Tech Stack

-   **Frontend**: React.js with TypeScript
-   **Styling**: Tailwind CSS
-   **Charts**: Recharts
-   **AI**: Google Gemini API via `@google/genai`

## Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or newer recommended)
-   `npm` or a compatible package manager
-   A Google Gemini API Key

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/email-marketing-excellence-guide.git
cd email-marketing-excellence-guide
```

### 2. Install dependencies

This project uses `npm` to manage dependencies.

```bash
npm install
```

### 3. Configure the API Key

This application requires a Google Gemini API key to power the quiz feature.

The source code in `services/geminiService.ts` attempts to read the key from an environment variable: `process.env.API_KEY`.

**Important**: In a standard browser environment without a build step, `process.env` is not available. For this application to function correctly, it must be run in an environment that defines and injects this variable. Many modern web development tools (like Vite, Next.js, Create React App) and hosting platforms (like Vercel, Netlify) provide mechanisms for handling environment variables securely. You will need to configure your chosen tool or platform to provide the `API_KEY`.


### 4. Run the development server

A simple static server is recommended. We've included the `serve` package for convenience.

```bash
npm start
```

This will start a local server, and you can view the application by navigating to the URL provided in your terminal (usually `http://localhost:3000`).

## Project Structure

-   `index.html`: The main HTML file.
-   `index.tsx`: The entry point for the React application.
-   `App.tsx`: The root component that lays out the application structure.
-   `components/`: Contains all the React components.
-   `services/`: Houses the logic for interacting with the Gemini API.
-   `hooks/`: Contains custom React hooks.
-   `types.ts`: Defines shared TypeScript types for the project.

---

This project was created as an interactive guide and serves as a demonstration of modern frontend development practices with AI integration.
