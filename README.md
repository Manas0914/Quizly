# Quizly — Quiz and Assessment Portal

A modern responsive quiz application built with React, Vite, React Router, React Hooks, Lucide icons, and CSS. It runs entirely in the browser and does not require a backend or database.

## Requirements
- Node.js (prefer the current LTS version)
- npm
- Visual Studio Code

## Run in VS Code
1. Extract/open the `quiz-assessment-portal` folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

To verify a production build, run `npm run build`. To preview it, run `npm run preview`.

## Main routes
- `/` — Home page
- `/quiz` — Timed quiz
- `/result` — Score and answer review (requires quiz result state)

## Project structure
```text
src/
├── components/   # Navbar and timer
├── data/         # Questions and answer keys
├── pages/        # Home, Quiz and Result pages
├── App.jsx       # Routes
├── main.jsx      # React entry point
└── style.css     # Responsive styling
```

## How it works
- `useState` stores the current question, selected answers, timer and submit confirmation state.
- `useEffect` starts and cleans up the countdown interval and navigates to the results when submitted.
- React Router provides the Home, Quiz and Result routes.
- The result page calculates score and percentage and shows explanations for each question.
- The question bank is in `src/data/questions.js`; update that file to change questions and correct answers.

## Notes
- The quiz has 10 sample questions and a 10-minute timer.
- A selected answer is stored in React state for the current attempt; it is not saved to a database or retained after refreshing the page.
- The timer automatically submits when it reaches zero.
- Google Fonts are imported from the web; the app otherwise runs locally after dependencies are installed.
