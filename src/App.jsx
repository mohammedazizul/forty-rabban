import "./App.css";
import { useState } from "react";
import data from "./data/rabban.json";
import { useSwipeable } from "react-swipeable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftArrowSVG from "./components/SVG/LeftArrowSVG";
import RightArrowSVG from "./components/SVG/RightArrowSVG";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    <div className="min-h-screen flex flex-col">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-2xl mx-auto">
          <div
            {...swipeHandlers}
            className="backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border cursor-grab active:cursor-grabbing"
          >
            <div className="text-center space-y-4 sm:space-y-6">
              <p className="text-xl sm:text-2xl font-bold">
                {data[currentIndex].id}
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-['Amiri'] leading-loose tracking-wide">
                {data[currentIndex].arabic}
              </p>
              <p className="text-lg sm:text-xl italic">
                {data[currentIndex].translation_en}
              </p>
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <span className="text-sm sm:text-base">
                {currentIndex + 1} / {data.length}
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-between px-4">
              <div
                onClick={prevCard}
                className="cursor-pointer hover:opacity-100 transition-opacity duration-200 opacity-30"
              >
                <LeftArrowSVG />
              </div>
              <div
                onClick={nextCard}
                className="cursor-pointer hover:opacity-100 transition-opacity duration-200 opacity-30"
              >
                <RightArrowSVG />
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
