import type { ReactNode } from "react";

interface IGenerateInfoProps {
  texts: string[];
  classText: string;
}
  
export const GenerateInfo = ({ texts, classText }: IGenerateInfoProps): ReactNode => {
  const generateTexts = () => {
    return texts.map((text, index) => (
      <p key={index} className={classText}>{text}</p>
    ))
  }

  return (
    <>
      {generateTexts()}
    </>
  );
}