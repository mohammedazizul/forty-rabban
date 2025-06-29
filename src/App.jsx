import "./App.css";
import { useState, useEffect } from "react";
import data from "./data/rabban.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Card
          currentIndex={currentIndex}
          data={data}
          onNext={nextCard}
          onPrev={prevCard}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
