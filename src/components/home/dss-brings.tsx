import { DssLists } from "@/lib/lists/dss-lists";

const DssBrings = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-10 px-10">
      <div className="flex flex-col justify-center items-center gap-10 w-full">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 text-center">
            {"What DSS VJIT Brings to Students?".toUpperCase()}
          </h3>
          <span className="text-sm md:text-lg w-4/5 text-neutral-600 font-semibold text-center">
            At DSS VJIT, we create opportunities for students to learn,
            innovate, and grow in the tech ecosystem.
          </span>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-10">
          {DssLists.map((list) => (
            <div
              key={list.id}
              className="flex flex-col justify-center items-center w-[500px] p-10 shadow-sm gap-4 border rounded-lg bg-[#ffffff70] backdrop-blur-sm"
            >
              <img
                src={list.icon}
                alt={list.title}
                className="w-[80px] h-[80px]"
              />
              <h3 className="text-neutral-800 text-2xl font-semibold text-center">
                {list.title}
              </h3>
              <p className="text-sm md:text-[16px] text-neutral-700 text-center">
                {list.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DssBrings;
