import { useParams } from "react-router-dom";

const CONTENT = {
  technical: {
    title: "Meet the Visionaries Powering Our Tech",
    description:
      "Our technical team drives the future with expertise, passion, and cutting-edge technology.",
    leadImage: "/assets/images/Technical.jpg",
    position: "Technical",
  },
  design: {
    title: "Meet the Creatives Crafting Our Vision",
    description:
      "Our design team brings ideas to life with stunning visuals, intuitive interfaces, and seamless user experiences.",
    leadImage: "/assets/images/Design.jpg",
    position: "Design",
  },
  "non-technical": {
    title: "Meet the Leaders Steering Our Growth",
    description:
      "They empower the community to achieve greatness through effective management and leadership.",
    leadImage: "/assets/images/Non-Technical.jpg",
    position: "Non-Technical",
  },
  "pr-or": {
    title: "Meet the Voices Amplifying Our Reach",
    description:
      "Our PR-OR team is the voice of DSS, spreading awareness, building connections, and engaging the community. ",
    leadImage: "/assets/images/PR-OR.jpg",
    position: "PR-OR",
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
    <section className="w-full min-h-svh flex flex-col justify-center items-start px-5 gap-4 sm:gap-7 py-10 sm:pb-20 pt-24 sm:pt-8">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-4xl text-center text-neutral-800 tracking-tighter font-semibold">
          {CONTENT[domain].title}
          <br />
        </h2>
        <p className="text-md sm:text-xl lg:w-5/6 tracking-tighter font-light text-center text-neutral-700 mt-2">
          {CONTENT[domain].description}
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h4 className="text-2xl text-neutral-700 tracking-tighter font-semibold">
            Meet our {CONTENT[domain].position} Lead
          </h4>
          <img
            src={CONTENT[domain].leadImage}
            alt={domain}
            className="w-36 lg:w-40 rounded-md"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <h5 className="text-xl text-center text-neutral-700 tracking-tighter font-semibold">
            Introducing Our {CONTENT[domain].position} Team Members
          </h5>
          <div className="w-full flex flex-wrap justify-center items-center gap-2">
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
