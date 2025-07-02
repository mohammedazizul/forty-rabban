import ThemeToggle from "./ThemeToggle";

function Header({ isDarkMode, toggleTheme }) {
  return (
    <div className="h-full w-full relative">
      {/* Theme toggle switch - positioned in top right corner */}
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <header className="w-full py-4 px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Forty Rabbana from Al Quran
            </h1>
            <p className="text-center mt-2 text-xs sm:text-sm md:text-base">
              A comprehensive collection of 40 beautiful "Rabbana" (Our Lord)
              duas from the Holy Quran with Arabic text, English translations,
              and beautiful typography. Perfect for daily prayers and spiritual
              reflection.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
