export type GetAllEventsType = EventType[];

export type EventType = {
  name: string;
  description: string;
  date: string;
  image: string;
  id: string;
  isInterested?: boolean;
};
