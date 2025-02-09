// App.tsx
import React from "react";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-300">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dark Mode Demo</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-primary rounded-lg text-white"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <main className="p-4">
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
          <p className="text-gray-600 dark:text-gray-300">
            This content automatically adapts to the selected theme
          </p>
        </div>
        <div className="p-6 rounded-lg bg-background shadow-lg">
          <p className="text-text">
            This content automatically adapts to the OS color scheme light or
            dark
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
