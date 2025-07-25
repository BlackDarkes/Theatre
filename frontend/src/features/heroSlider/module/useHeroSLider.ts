/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, type RefObject } from "react";

interface IHeroSliderProps {
  sliderRef: RefObject<HTMLDivElement | null>;
}

export const useHeroSlider = ({ sliderRef }: IHeroSliderProps) => {
  const timerRef = useRef<NodeJS.Timeout>(null);


  const startAutoSlider = () => {
    timerRef.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: sliderRef.current.offsetWidth,
          behavior: "smooth",
        })
      }
    })
  }

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
    return () => stopAutoSlider();
  }, [])

  return { nextSlide, previewSlide };
}