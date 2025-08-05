import type { IEvent } from "@shared/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetEvent = () => {
  const {
    isLoading,
    error,
    data: events,
  } = useQuery<IEvent[]>({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/events`
      );
      return response.data;
    },
  });

  return { isLoading, error, events };
};
