import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import markdown from "@/components/events/markdown/example.md?raw";

interface EventMarkdownProps {
  markdown: string;
}

const EventMarkdown = ({ markdown }: EventMarkdownProps) => {
  return (
    <div className="prose max-w-none w-2/3 border-x px-10">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default EventMarkdown;
