import { Container } from "@shared/ui/Container/Container";
import { TextInfo } from "../TextInfo/TextInfo";
import { useState } from "react";
import { ButtonsInfo } from "../ButtonsInfo/ButtonsInfo";
import ImageCity from "../../assets/city.png";
import styles from './AboutInfo.module.scss'

export const AboutInfo = () => {
  const [type, setType] = useState("main");

  const handleType = (selectedType: string) => {
    setType(selectedType);
  };

  return (
    <section className={styles.aboutInfo}>
      <Container className={styles.aboutInfoContainer}>
        <div className={styles.aboutInfoInfo}>
          <ButtonsInfo handleType={handleType} type={type} />
          <TextInfo type={type} />
        </div>
        <div className={styles.aboutInfoImage}>
          <img src={ImageCity} alt="Город" />
        </div>
      </Container>
    </section>
  );
};
