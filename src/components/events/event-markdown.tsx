import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EventMarkdownProps {
  markdown: string;
  cover: string;
}

const EventMarkdown = ({ markdown, cover }: EventMarkdownProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-3 pt-16 md:pt-0">
        <div className="w-full md:w-4/5 flex flex-col justify-center items-center">
          <Button
            onClick={() => navigate("/events")}
            variant={"link"}
            className="self-start"
          >
            <ChevronLeft />
            Back
          </Button>
          <img
            src={cover}
            alt="okay"
            className="w-full h-40 md:h-80  object-cover rounded-md border border-neutral-200"
          />
        </div>
        <div className="prose max-w-none w-full md:w-3/5 my-7 px-5 font-poppins">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default EventMarkdown;
