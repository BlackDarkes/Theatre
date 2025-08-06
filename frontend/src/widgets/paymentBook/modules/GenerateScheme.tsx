import { SchemeElement } from "../ui/SchemeElement/SchemeElement";

interface IGenerateSchemeProps {
  scheme: number[];
  classScheme: Record<string, string>;
}
  
export const GenerateScheme = ({ scheme, classScheme }: IGenerateSchemeProps) => {
  return (
    <div>
      {scheme.map((count, rowIndex) => (
        <div key={`row-${rowIndex}`} className={classScheme.paymentSchemeScheme}>
          <h3 style={{ fontSize: "14px", margin: 0 }}>{++rowIndex}</h3>
          {Array.from({ length: count }).map((_, seatIndex) => (
            <SchemeElement id={`${rowIndex}-${seatIndex}`} key={`${rowIndex}-${seatIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}