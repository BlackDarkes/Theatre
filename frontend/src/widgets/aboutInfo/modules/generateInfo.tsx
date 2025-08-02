interface IGenerateInfoProps {
  texts: string[];
}
  
export const generateInfo = ({ texts }: IGenerateInfoProps) => {
  const generateTexts = () => {
    return texts.map((text, index) => (
      <p key={index}>{text}</p>
    ))
  }

  return (
    <>
      {generateTexts()}
    </>
  );
}