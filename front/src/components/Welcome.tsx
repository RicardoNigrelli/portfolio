import React from "react";

const Welcome = () => {
  return (
    <div className="bg-[#0f0313] w-full h-screen flex justify-center items-center">
      <div className="flex flex-col sm:flex-row w-3/4 sm:w-2/3 md:w-1/2 h-3/4 sm:h-2/3 md:h-1/2 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl text-center font-bold">RICARDO</h1>
          <h1 className="text-white text-4xl text-center font-bold">
            NIGRELLI
          </h1>
        </div>
        <div className="w-full sm:w-[4px] h-[4px] sm:h-[120px] bg-white my-2 sm:mx-2"></div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#850016] text-4xl text-center font-bold">
            FRONT-END
          </h1>
          <h1 className="text-[#850016] text-4xl text-center font-bold">
            DEVELOPER
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
