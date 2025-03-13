import ConductedEvents from "@/components/events/conducted-events";
import EventCarousel from "@/components/events/events-carousel";
import UpcomingEvents from "@/components/events/upcoming-events";

export default function EventsPage() {
  return (
    <section className="w-full min-h-svh flex flex-col items-center justify-start gap-10 md:gap-20 translate-y-[60px] sm:translate-y-0 mb-[90px]">
      <EventCarousel />
      <ConductedEvents />
      <UpcomingEvents />
    </section>
  );
}
