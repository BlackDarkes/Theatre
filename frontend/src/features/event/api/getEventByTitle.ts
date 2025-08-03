import type { IEvent } from "@shared/types/event.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useEventByTitle = (title: string | null) => {
  const { isLoading, error, data: event } = useQuery<IEvent>({
    queryKey: ["event", title],
    queryFn: async () => {
      const response = await axios.get<IEvent>(
        `${import.meta.env.VITE_API_URL}/events/${title}`
      );
      return response.data;
    },
  });


  return { isLoading, error, event };
};
