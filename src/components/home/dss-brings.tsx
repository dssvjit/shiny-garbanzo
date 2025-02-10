import { DssLists } from "@/lib/lists/dss-lists";

const DssBrings = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-10 px-10">
      <div className="flex flex-col justify-center items-center gap-10 w-full">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 text-center tracking-tighter">
            {"What DEVELOPERS STUDENT SOCIETY Brings".toUpperCase()}
            <br />
            {"to Students?".toUpperCase()}
          </h3>
          <span className="text-sm md:text-lg w-4/5 text-neutral-800 text-center font-light tracking-tighter">
            At DSS VJIT, we create opportunities for students to learn,
            innovate, and grow in the tech ecosystem.
          </span>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5">
          {DssLists.map((list) => (
            <div
              key={list.id}
              className="flex flex-col w-full justify-center items-center p-3 py-8 shadow-sm gap-4 border rounded-lg bg-[#ffffff70] backdrop-blur-sm"
            >
              <img
                src={list.icon}
                alt={list.title}
                className="w-[80px] h-[80px]"
              />
              <h3 className="text-neutral-800 text-xl sm:text-2xl font-semibold text-center tracking-tighter">
                {list.title}
              </h3>
              <p className="text-md md:text-[16px] text-neutral-500 text-center tracking-tight font-light">
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
