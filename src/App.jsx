import "./App.css";
import { useState, useEffect } from "react";
import data from "./data/rabban.json";
import { useSwipeable } from "react-swipeable";

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className="w-full py-4 px-4 sm:px-6 md:px-8 bg-[#948979] dark:bg-[#393E46] shadow-lg">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#222831] dark:text-[#DFD0B8] text-center">
              Forty Rabbana from Al Quran
            </h1>
            <p className="text-[#393E46] dark:text-[#948979] text-center mt-2 text-sm sm:text-base">
              A collection of 40 Rabban dua from Al Quran
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[#DFD0B8] dark:bg-[#222831] text-[#222831] dark:text-[#DFD0B8] hover:opacity-80 transition-opacity"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full py-4 px-4 sm:px-6 md:px-8 mt-auto bg-[#948979] dark:bg-[#393E46] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center text-[#393E46] dark:text-[#948979] text-sm">
          <p>© {new Date().getFullYear()} Forty Rabbana Collection</p>
          <p className="mt-1">
            May Almighty Allah bless us with understanding and implementation
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if theme is stored in localStorage
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return true; // Default to dark mode
  });

  useEffect(() => {
    // Update the HTML class and localStorage when isDarkMode changes
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="min-h-screen bg-[#DFD0B8] dark:bg-[#222831] flex flex-col">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-2xl mx-auto">
          <div
            {...swipeHandlers}
            className="bg-[#948979] dark:bg-[#393E46] backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-[#393E46] dark:border-[#948979] cursor-grab active:cursor-grabbing"
          >
            <div className="text-center space-y-4 sm:space-y-6">
              <p className="text-xl sm:text-2xl font-bold text-[#222831] dark:text-[#DFD0B8]">
                {data[currentIndex].id}
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-['Amiri'] text-[#222831] dark:text-[#DFD0B8] leading-loose tracking-wide">
                {data[currentIndex].arabic}
              </p>
              <p className="text-lg sm:text-xl text-[#393E46] dark:text-[#948979] italic">
                {data[currentIndex].translation_en}
              </p>
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <span className="text-[#393E46] dark:text-[#948979] text-sm sm:text-base">
                {currentIndex + 1} / {data.length}
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-between px-4">
              <div
                onClick={prevCard}
                className="cursor-pointer hover:opacity-100 transition-opacity duration-200 opacity-30"
              >
                <svg
                  className="w-8 h-8 text-[#222831] dark:text-[#DFD0B8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div
                onClick={nextCard}
                className="cursor-pointer hover:opacity-100 transition-opacity duration-200 opacity-30"
              >
                <svg
                  className="w-8 h-8 text-[#222831] dark:text-[#DFD0B8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
