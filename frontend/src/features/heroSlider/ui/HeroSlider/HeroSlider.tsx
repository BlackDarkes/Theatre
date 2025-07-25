import { type RefObject } from "react";
import ImageBackground from "../../assets/background.png";
import styles from "./HeroSlider.module.scss";

interface IHeroSliderProps {
  sliderRef: RefObject<HTMLDivElement | null>;
}

export const HeroSlider = ({ sliderRef }: IHeroSliderProps) => {
  return (
    <div ref={sliderRef} className={styles.heroSlider}>
      <img src={ImageBackground} alt="Театр" className={styles.heroSliderSlide} />
      <img src={ImageBackground} alt="Театр" className={styles.heroSliderSlide} />
      <img src={ImageBackground} alt="Театр" className={styles.heroSliderSlide} />
    </div>
  );
}