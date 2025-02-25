import EventCarousel from "@/components/events/events-carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ConductedEventsList,
  UpcomingEventsList,
} from "@/lib/lists/events-lists";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdown from "@/components/events/markdown/example.md?raw";

export default function EventsPage() {
  return (
    <section className="w-full min-h-svh flex flex-col items-center justify-start gap-10 md:gap-20 translate-y-[60px] sm:translate-y-0 mb-[90px]">
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
      <EventCarousel />
      <div className="flex flex-col justify-center items-center w-full gap-10">
        <div className="flex flex-col justify-center items-center px-5">
          <h1 className="text-2xl md:text-4xl tracking-tighter font-semibold">
            DISCOVER OUR EXCITING EVENTS
          </h1>
          <p className="w-full md:w-10/12 text-sm md:text-lg text-center tracking-tighter font-light text-neutral-600">
            Explore a variety of events that cater to different interests and
            passions. Our events offer something for everyone, dive in and
            discover what we have in store for you!
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center px-10 gap-12 md:gap-6">
          {ConductedEventsList.map((event) => (
            <Card
              key={event.id}
              className="flex flex-col w-[350px] md:w-full h-[410px] border-0 shadow-none"
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
                <p className="w-full text-sm font-light text-neutral-700">
                  {event.description.slice(0, 150)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

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
              className="flex flex-col w-[350px] md:w-[450px] h-[410px] border-0 shadow-none"
            >
              <CardHeader className="p-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-[350px] md:w-[450px] h-64 object-cover rounded-md"
                />
              </CardHeader>

              <CardContent className="w-full flex flex-col justify-center items-start gap-1 mt-5 p-0">
                <CardTitle className="text-xl tracking-tighter">
                  {event.title}
                </CardTitle>
                <CardDescription>{event.date}</CardDescription>
                <p className="w-full text-sm font-light text-neutral-700">
                  {event.description.slice(0, 150)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
