import "./App.css";
import { useState } from "react";
import data from "./data/rabban.json";

function Header() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black/20 to-transparent shadow-lg">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Forty Rabbana from Al Quran
        </h1>
        <p className="text-white/70 text-center mt-2 text-sm sm:text-base">
          A collection of 40 Rabban dua from Al Quran
        </p>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full py-4 px-4 sm:px-6 md:px-8 mt-auto bg-gradient-to-t from-black/20 to-transparent shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Forty Rabbana Collection</p>
          <p className="mt-1">May Almighty Allah bless us with understanding and implementation</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col">
      <Header />
      
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
            <div className="text-center space-y-4 sm:space-y-6">
              <p className="text-xl sm:text-2xl font-bold text-white/90">{data[currentIndex].id}</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-['Amiri'] text-white/95 leading-loose tracking-wide">
                {data[currentIndex].arabic}
              </p>
              <p className="text-lg sm:text-xl text-white/80 italic">
                {data[currentIndex].translation_en}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-6 sm:mt-8">
              <button
                onClick={prevCard}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                Previous
              </button>
              <span className="text-white/70 text-sm sm:text-base order-first sm:order-none">
                {currentIndex + 1} / {data.length}
              </span>
              <button
                onClick={nextCard}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
