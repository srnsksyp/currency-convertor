# Currency Convertor

A modern, fast, and responsive currency converter web app built with React, Vite, and Tailwind CSS. Instantly convert between currencies using live exchange rates.

👉 **Live App:**
🔗 https://currency-convertor-seven-vert.vercel.app


---

## 🚀 Features

- Real-time currency conversion using a public API
- Swap currencies with one click
- Clean, responsive UI with Tailwind CSS
- Lightning-fast development with Vite

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd currency-convertor 
   ```

2. **Install dependencies**
    ```
    npm install
    ```
    Running the App

    Start the development server:

    ```
    npm run dev
    ```
    Visit http://localhost:5173 in your browser.
    
    Build for Production
    ```
    npm run build
    ```

    Preview the production build:
        
    ```
    npm run preview
    ```

---

###  Project Structure
```
currency-convertor/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── InputBox.jsx
│   │   └── index.js
│   └── hooks/
│       └── useCurrencyInfo.js
├── .gitignore
├── eslint.config.js
├── package.json
├── README.md
├── vite.config.js
```

**Key Files:**
- `src/App.jsx` — Main app logic and state
- `src/components/InputBox.jsx` — Currency input and selection UI
- `src/hooks/useCurrencyInfo.js` — Custom hook for fetching currency rates
- `src/index.css` — Tailwind CSS imports and custom styles

---

### Usage
1. Select the currencies to convert.
2. Enter the amount.
3. Click "Convert" to see the result.
4. Use the "Swap" button to switch currencies.

---

### API
Uses `@fawazahmed0/currency-api` for up-to-date exchange rates.

---

Made with ❤️ using React, Vite, and Tailwind CSS. 