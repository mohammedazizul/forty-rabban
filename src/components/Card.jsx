import { useSwipeable } from "react-swipeable";
import LeftArrowSVG from "./SVG/LeftArrowSVG";
import RightArrowSVG from "./SVG/RightArrowSVG";

function Card({ currentIndex, data, onNext, onPrev }) {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="max-w-2xl w-full">
      <div
        {...swipeHandlers}
        className="card backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 cursor-grab active:cursor-grabbing relative flex items-center justify-center min-h-[400px]"
      >
        <div className="text-center pb-4 space-y-4 sm:space-y-6">
          {/* 
          <p
            className="text-xl sm:text-2xl font-bold"
            style={{ color: "rgb(var(--color-card-foreground))" }}
          >
            {data[currentIndex].id}
          </p> 
          */}
          <p
            className="text-2xl sm:text-3xl md:text-4xl font-['Amiri'] leading-loose tracking-wide"
            style={{ color: "rgb(var(--color-card-foreground))" }}
          >
            {data[currentIndex].arabic}
          </p>
          <p
            className="text-lg sm:text-xl italic"
            style={{ color: "rgb(var(--color-card-foreground) / 0.8)" }}
          >
            {data[currentIndex].translation_en}
          </p>
          <p
            className="text-lg xs:text-xl italic"
            style={{ color: "rgb(var(--color-card-foreground) / 0.8)" }}
          >
            {data[currentIndex].source}
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <span
            className="text-sm sm:text-base"
            style={{ color: "rgb(var(--color-card-foreground) / 0.6)" }}
          >
            {currentIndex + 1} / {data.length}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <div
            onClick={onPrev}
            className="cursor-pointer hover:opacity-100 transition-opacity duration-200 opacity-30"
            style={{ color: "rgb(var(--color-card-foreground))" }}
          >
            <LeftArrowSVG />
          </div>
          <div
            onClick={onNext}
            className="cursor-pointer hover:opacity-100 transition-opacity duration-200 opacity-30"
            style={{ color: "rgb(var(--color-card-foreground))" }}
          >
            <RightArrowSVG />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
