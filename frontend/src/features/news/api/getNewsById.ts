import type { INews } from "@shared/types/news.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useNewsById = (id: string | undefined) => {
  const {
    isLoading,
    error,
    data: news,
  } = useQuery<INews>({
    queryKey: ["news", id],
    queryFn: async () => {
      const response = await axios.get<INews>(
        `${import.meta.env.VITE_API_URL}/news/${id}`
      );
      return response.data;
    },
  });

  return { isLoading, error, news };
};
