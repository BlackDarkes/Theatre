import type { IInformation } from "@shared/types/information.interface";
import { ElementDate } from "../ui/ElementDate/ElementDate";

interface IGenerateDateProps {
  date: IInformation[];
}
  
export const GenerateDate = ({ date }: IGenerateDateProps) => {
  return date.map((dateElem) => <ElementDate key={dateElem.id} date={dateElem} />);
}