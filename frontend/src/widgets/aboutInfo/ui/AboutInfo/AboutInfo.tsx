import { Container, TextInfo } from "@shared/ui";
import { useState } from "react";
import { ButtonsInfo } from "../ButtonsInfo/ButtonsInfo";
import ImageCity from "../../assets/city.png";
import styles from './AboutInfo.module.scss'
import { MAIN_INFO } from "@widgets/aboutInfo/constants/mainInfo";
import { SECOND_INFO } from "@widgets/aboutInfo/constants/secondInfo";

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
          <TextInfo type={type} mainType="main" texts={{main: MAIN_INFO, second: SECOND_INFO}} />
        </div>
        <div className={styles.aboutInfoImage}>
          <img src={ImageCity} alt="Город" />
        </div>
      </Container>
    </section>
  );
};
