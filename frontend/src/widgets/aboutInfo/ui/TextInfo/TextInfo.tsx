import { MAIN_INFO } from "@widgets/aboutInfo/constants/mainInfo";
import { SECOND_INFO } from "@widgets/aboutInfo/constants/secondInfo";
import { GenerateInfo } from "@widgets/aboutInfo/modules/generateInfo";
import styles from './TextInfo.module.scss'

interface ITextInfoProps {
  type: string;
}
  
export const TextInfo = ({ type }: ITextInfoProps) => {
  return type === "main" ? (
    <GenerateInfo texts={MAIN_INFO.text} classText={styles.text} />
  ) : (
    <GenerateInfo texts={SECOND_INFO.text} classText={styles.text} />
  );
}