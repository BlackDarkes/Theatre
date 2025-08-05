import type { RefObject } from "react";
import styles from "./HeroSlider.module.scss";

interface IHeroSliderProps {
  sliderRef: RefObject<HTMLDivElement | null>;
  className: string;
}

export const HeroSlider = ({ sliderRef, className }: IHeroSliderProps) => {
  return (
    <div ref={sliderRef} className={`${styles.heroSlider} ${className}`} tabIndex={-1}>
      <div className={styles.heroSliderSlide}></div>
      <div className={styles.heroSliderSlide}></div>
      <div className={styles.heroSliderSlide}></div>
    </div>
  );
}