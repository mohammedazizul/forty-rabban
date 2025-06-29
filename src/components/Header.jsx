import MoonSVG from "./SVG/MoonSVG";
import SunSVG from "./SVG/SunSVG";

function Header({ isDarkMode, toggleTheme }) {
  return (
    <div className="h-full w-full">
      <header className="w-full py-4 px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Forty Rabbana from Al Quran
              </h1>
              <p className="text-center mt-2 text-sm sm:text-base">
                A comprehensive collection of 40 beautiful "Rabbana" (Our Lord) duas from the Holy Quran with Arabic text, English translations, and beautiful typography. Perfect for daily prayers and spiritual reflection.
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:opacity-80 transition-opacity"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunSVG /> : <MoonSVG />}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
