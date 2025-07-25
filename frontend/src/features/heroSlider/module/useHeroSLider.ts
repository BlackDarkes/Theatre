/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, type RefObject } from "react";

interface IHeroSliderProps {
  sliderRef: RefObject<HTMLDivElement | null>;
}

export const useHeroSlider = ({ sliderRef }: IHeroSliderProps) => {
  const timerRef = useRef<NodeJS.Timeout>(null);
  const isTransitioning = useRef(false);

  const startAutoSlider = () => {
    timerRef.current = setInterval(() => {
      if (!sliderRef.current || isTransitioning.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;

      if (isAtEnd) {
        isTransitioning.current = true;
        sliderRef.current.scrollTo({ left: 0, behavior: 'auto' });
        
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.scrollBy({ 
              left: sliderRef.current.offsetWidth, 
              behavior: 'smooth' 
            });
            isTransitioning.current = false;
          }
        }, 50);
      } else {
        sliderRef.current.scrollBy({ 
          left: sliderRef.current.offsetWidth, 
          behavior: 'smooth' 
        });
      }
    }, 6000);
  };

  const stopAutoSlider = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }

  const nextSlide = () => {
    stopAutoSlider();
    if (sliderRef.current) {
      sliderRef.current.scrollBy({  
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
    startAutoSlider();
  }

  const previewSlide = () => {
    stopAutoSlider();
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
    startAutoSlider();
  }

  useEffect(() => {
    startAutoSlider();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return { nextSlide, previewSlide };
}