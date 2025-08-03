import { useRef } from "react";
import { HeroSlider, useHeroSlider } from "@features/heroSlider";
import { TheatreInfo } from "@shared/ui/TheatreInfo/TheatreInfo";
import styles from "./Hero.module.scss";
import { Container } from "@shared/ui";

export const Hero = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const { nextSlide, previewSlide } = useHeroSlider({ sliderRef });

  return (
    <section className={styles.hero}>
      <HeroSlider sliderRef={sliderRef} className={styles.heroSlider} />
      <Container className={styles.heroContainer}>
        <TheatreInfo
          className={styles.heroInfo}
          classTitle={styles.heroInfoTitle}
          classText={styles.heroInfoText}
        />

        <div className={styles.heroBlock}>
          <h2 className={styles.heroTitle}>Казанский театр юного зрителя</h2>

          <div className={styles.heroButtons}>
            <button
              type="button"
              onClick={previewSlide}
              className={styles.heroButton}
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className={styles.heroButton}
            >
              &gt;
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
