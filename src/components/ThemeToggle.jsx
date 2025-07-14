function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <div className="absolute top-4 right-4 z-10">
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-12 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl"
        style={{
          backgroundColor: isDarkMode 
            ? 'rgb(209 213 219)' 
            : 'rgb(203 213 225)',
          // boxShadow: isDarkMode
          //   ? '0 10px 15px -3px rgb(209 213 219 / 0.3), 0 4px 6px -4px rgb(209 213 219 / 0.3)'
          //   : '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        }}
        aria-label="Toggle dark mode"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full transition-all duration-300 ease-in-out ${
            isDarkMode ? 'translate-x-6' : 'translate-x-1'
          }`}
          style={{
            backgroundColor: 'rgb(255 255 255)',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)'
          }}
        >
          <div className="flex h-full w-full items-center justify-center">
            {isDarkMode ? (
              <div className="text-yellow-500 drop-shadow-none">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </div>
            ) : (
              <div className="text-gray-600 drop-shadow-none">
                <svg
                  className="w-4 h-4"
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
              </div>
            )}
          </div>
        </span>
      </button>
    </div>
  );
}

export default ThemeToggle; 