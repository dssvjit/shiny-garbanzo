import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EventForm from "../form/event.form";
import { useEffect, useState } from "react";
import {
  useCreateParticipant,
  useGetAllEvents,
  useGetEventsWithInterestedStatus,
} from "@/lib/query/mutations/event.query";
import { EventType } from "@/lib/types/event.types";
import { toast } from "sonner";

const UpcomingEvents = () => {
  const { mutateAsync: getEventsWithInterestedStatus } =
    useGetEventsWithInterestedStatus();
  const { mutateAsync: getAllEvents } = useGetAllEvents();
  const { mutateAsync: createParticipant } = useCreateParticipant();

  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("dss-accessToken");
    if (token) {
      getEventsWithInterestedStatus().then((data) => {
        console.log(data);
        if (data) setEvents(data);
      });
    } else {
      getAllEvents().then((data) => setEvents(data));
    }
  }, [getEventsWithInterestedStatus, getAllEvents]);

  const handleInterested = async (eventId: string) => {
    try {
      await createParticipant({ eventId });
      toast("You have shown interest in the event");
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast("Failed to show interest in the event");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10">
      <div className="flex flex-col justify-center items-center px-5">
        <h1 className="text-2xl md:text-4xl tracking-tighter font-semibold">
          OUR UPCOMING EVENTS
        </h1>
        <p className="text-base md:text-lg text-center tracking-tighter font-light">
          Join us in our journey of learning and innovation.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center px-10 gap-12 md:gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            className="flex flex-col w-[350px] md:w-full h-[410px] border-0 shadow-none"
          >
            <CardHeader className="p-0">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 object-cover rounded-md"
              />
            </CardHeader>

            <CardContent className="w-full flex flex-col justify-center items-start gap-1 mt-5 p-0">
              <CardTitle className="text-xl tracking-tighter">
                {event.name}
              </CardTitle>
              <CardDescription>{event.date}</CardDescription>
              <div className="flex justify-between items-center gap-3">
                <p className="text-sm font-light text-neutral-700 flex-grow">
                  {event.description.slice(0, 150)}...
                </p>

                {localStorage.getItem("dss-accessToken") && (
                  <>
                    {event.isInterested ? (
                      <>
                        <span className="rounded-full px-3 py-2 bg-green-300 text-xs">
                          Interested
                        </span>
                      </>
                    ) : (
                      <Button
                        onClick={() => handleInterested(event.id)}
                        className="bg-blue-500 border border-blue-600 hover:bg-blue-600 mt-3 text-xs"
                      >
                        I'm Interested
                      </Button>
                    )}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {localStorage.getItem("dss-admin-accessToken") && (
          <Card className="flex flex-col w-[350px] md:w-full h-[410px] border shadow-none">
            <CardHeader>
              <EventForm />
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
