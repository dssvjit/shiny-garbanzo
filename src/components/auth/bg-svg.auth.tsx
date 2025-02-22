const BgSvgAuth = () => {
  return (
    <>
      <svg width="100%" height="2" className="absolute hidden md:block top-8">
        <line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="#A9A9A9"
          strokeWidth="2"
          strokeDasharray="5,5"
          className=""
        />
      </svg>
      <svg
        width="100%"
        height="2"
        className="absolute hidden md:block bottom-8"
      >
        <line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="#A9A9A9"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </svg>
      <svg width="2" height="100%" className="absolute hidden md:block left-8">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="#A9A9A9"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </svg>
    </>
  );
};

export default BgSvgAuth;
