import { useParams } from "react-router-dom";

const CONTENT = {
  technical: {
    title: "Meet the Visionaries Powering Our Tech",
    description:
      "Behind every innovation is a team of brilliant minds turning ideas into reality. Our technical team drives the future with expertise, passion, and cutting-edge technology.",
  },
  design: {
    title: "Meet the Creatives Crafting Our Vision",
    description:
      "Design is the bridge between creativity and functionality. Our design team brings ideas to life with stunning visuals, intuitive interfaces, and seamless user experiences.",
  },
  "non-technical": {
    title: "Meet the Leaders Steering Our Growth",
    description:
      "Our non-technical team is responsible for handling all non-tech activities such as events, permissions, and more. They empower the community to achieve greatness through effective management and leadership.",
  },
  "pr-or": {
    title: "Meet the Voices Amplifying Our Reach",
    description:
      "Our PR-OR team is the voice of DSS, spreading awareness, building connections, and engaging the community. They are the driving force behind our growth and success.",
  },
};

type Domain = "technical" | "design" | "non-technical" | "pr-or";

const TeamPage = () => {
  const { domain } = useParams<{ domain: Domain }>();

  if (!domain) {
    return;
  }

  if (!CONTENT[domain]) {
    return <h1>Invalid Domain</h1>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 -translate-y-36 sm:translate-y-0">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-5xl text-center text-neutral-800 tracking-tighter font-semibold">
            {CONTENT[domain].title}
            <br />
          </h2>
          <p className="text-md sm:text-xl tracking-tighter font-light text-center text-neutral-700 mt-2 w-4/5">
            DSS at VJIT College is a thriving community of developers,
            designers, and tech enthusiasts who collaborate to learn, build, and
            grow together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
