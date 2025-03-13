import EventMarkdown from "@/components/events/event-markdown";
import { EVENT_DETAILS } from "@/lib/objects/event.object";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

type Name =
  | "induction-event-kickstarting-the-dss-journey"
  | "nxtgen-fostering-the-next-generation"
  | "public-profile-building"
  | "calling-blockchain"
  | "vjit-ideathon-2025"
  | "info-drop-decoding-the-tech-industry";

const EventPage = () => {
  const { name } = useParams<{ name: Name }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  if (
    !name ||
    !Object.values<string>([
      "induction-event-kickstarting-the-dss-journey",
      "nxtgen-fostering-the-next-generation",
      "public-profile-building",
      "calling-blockchain",
      "vjit-ideathon-2025",
      "info-drop-decoding-the-tech-industry",
    ]).includes(name)
  ) {
    return <Navigate to={"/events"} />;
  }

  return (
    <>
      <EventMarkdown
        cover={EVENT_DETAILS[name].cover}
        markdown={EVENT_DETAILS[name].markdown}
      />
    </>
  );
};

export default EventPage;
