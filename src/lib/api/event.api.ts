import { api, publicApi } from "../config/axios.config";
import { EventType } from "../types/event.types";

export const createEvent = async (
  name: string,
  description: string,
  image: string,
  date: string
) => {
  try {
    const response = await api.post("/api/event", {
      name,
      description,
      image,
      date,
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllEvents = async () => {
  try {
    const response = await publicApi.get("/api/event");
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createParticipant = async (eventId: string) => {
  try {
    const response = await api.post(`/api/event/register?eventId=${eventId}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getIfUserInterested = async (eventId: string) => {
  try {
    const response = await api.get(`/api/event/register?eventId=${eventId}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getEventsWithInterestedStatus = async () => {
  try {
    const allEvents = await getAllEvents();

    const eventsWithInterestStatus = await Promise.all(
      allEvents.map(async (event: EventType) => {
        const isInterested = await getIfUserInterested(event.id);
        return {
          ...event,
          isInterested: isInterested.isParticipant,
        };
      })
    );

    console.log("YES: ", eventsWithInterestStatus);

    return eventsWithInterestStatus as EventType[];
  } catch (err) {
    console.log(err);
    return null;
  }
};
