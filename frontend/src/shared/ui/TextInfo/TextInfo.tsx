import styles from './TextInfo.module.scss'
import { GenerateInfo } from "@shared/modules/generateInfo";

interface ITextInfoProps {
  type: string | undefined;
  mainType: string;
  texts: {
    main: {id: number, text: string[] | undefined};
    second: {id: number, text: string[] | undefined};
  }
}
  
export const TextInfo = ({ type, mainType, texts }: ITextInfoProps) => {
  return type === mainType ? (
    <GenerateInfo texts={texts.main.text} classText={styles.text} />
  ) : (
    <GenerateInfo texts={texts.second.text} classText={styles.text} />
  );
}