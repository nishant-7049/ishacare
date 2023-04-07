import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const SingleService = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <h3 className="text-[#00286b] text-2xl text-center">
        {state.data.topic}
      </h3>
      <div className="flex m-20 gap-5">
        <div className="flex-0 w-1/2 object-contain">
          <img src={state.data.img} alt="" />
        </div>
        <div className="flex flex-1 flex-col ">
          <h2 className="text-[1.5rem] font-bold text-[#00286b]">
            {state.data.topic}
          </h2>
          <p className="mb-2">{state.data.logo}</p>
        </div>
      </div> */}
    </motion.div>
  );
};

export default SingleService;
