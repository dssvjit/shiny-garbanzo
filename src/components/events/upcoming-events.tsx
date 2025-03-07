import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UpcomingEventsList } from "@/lib/lists/events-lists";
import { Button } from "@/components/ui/button";

const UpcomingEvents = () => {
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
        {UpcomingEventsList.map((event) => (
          <Card
            key={event.id}
            className="flex flex-col w-[350px] md:w-full h-[410px] border-0 shadow-none "
          >
            <CardHeader className="p-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-full h-64 object-cover rounded-md"
              />
            </CardHeader>

            <CardContent className="w-full flex flex-col justify-center items-start gap-1 mt-5 p-0">
              <CardTitle className="text-xl tracking-tighter">
                {event.title}
              </CardTitle>
              <CardDescription>{event.date}</CardDescription>
              <div className="flex justify-center items-center gap-3">
                <p className="w-full text-sm font-light text-neutral-700">
                  {event.description.slice(0, 150)}...
                </p>
                <Button className="bg-blue-500 border border-blue-600 hover:bg-blue-600 mt-3 text-xs">
                  Interested
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
