import {
  createEvent,
  createParticipant,
  getAllEvents,
  getEventsWithInterestedStatus,
} from "@/lib/api/event.api";
import { useMutation } from "@tanstack/react-query";

export const useCreateEvent = () => {
  return useMutation({
    mutationFn: (data: {
      name: string;
      description: string;
      image: string;
      date: string;
    }) => createEvent(data.name, data.description, data.image, data.date),
  });
};

export const useGetAllEvents = () => {
  return useMutation({
    mutationFn: () => getAllEvents(),
  });
};

export const useCreateParticipant = () => {
  return useMutation({
    mutationFn: (data: { eventId: string }) => createParticipant(data.eventId),
  });
};

export const useGetEventsWithInterestedStatus = () => {
  return useMutation({
    mutationFn: () => getEventsWithInterestedStatus(),
  });
};
