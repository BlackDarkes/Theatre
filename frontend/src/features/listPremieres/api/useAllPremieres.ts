import type { IPremieres } from "@shared/types/premieres.interface"; 
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAllPremieres = () => {
  const {
    isLoading,
    error,
    data: premieres,
  } = useQuery<IPremieres[]>({
    queryKey: ["getAllPremieres"],
    queryFn: async () => {
      const response = await axios.get<IPremieres[]>(
        `${import.meta.env.VITE_API_URL}/premieres`
      );
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return { isLoading, error, premieres };
};
