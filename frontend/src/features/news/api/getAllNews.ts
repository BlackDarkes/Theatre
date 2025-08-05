import type { INews } from "@shared/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAllNews = () => {
  const {
    isLoading,
    error,
    data: news,
  } = useQuery<INews[]>({
    queryKey: ["allNews"],
    queryFn: async () => {
      const response = await axios.get<INews[]>(
        `${import.meta.env.VITE_API_URL}/news`
      );
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes,
  });

  return { isLoading, error, news };
};
