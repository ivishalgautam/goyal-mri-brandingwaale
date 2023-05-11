import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Tabs = () => {
  return (
    <div className="h-[236px] bg-white flex items-center justify-center flex-wrap gap-4">
      <div className="bg-primary flex items-start justify-center flex-col w-[250px] h-[150px] p-2 rounded-md gap-14">
        <div className="flex items-start justify-between w-full ">
          <div className="w-10 h-10">
            <img
              src="../../src/assets/Laboratory.png"
              alt="lab"
              className="w-full h-full"
            />
          </div>
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>
        <div className="text-white text-start">Book a lab test</div>
      </div>

      <div className="bg-blue-extra-light flex items-start justify-center flex-col w-[250px] h-[150px] p-2 rounded-md gap-14">
        <div className="flex items-start justify-between w-full ">
          <div className="w-10 h-10">
            <img
              src="../../src/assets/Laboratory-1.png"
              alt="lab"
              className="w-full h-full"
            />
          </div>
          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>
        <div className="text-primary text-start">Doctor's section</div>
      </div>
      <div className="bg-blue-extra-light flex items-start justify-center flex-col w-[250px] h-[150px] p-2 rounded-md gap-14">
        <div className="flex items-start justify-between w-full ">
          <div className="w-10 h-10">
            <img
              src="../../src/assets/Laboratory-2.png"
              alt="lab"
              className="w-full h-full"
            />
          </div>
          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>
        <div className="text-primary text-start">Download reports</div>
      </div>

      <div className="bg-blue-extra-light flex items-start justify-center flex-col w-[250px] h-[150px] p-2 rounded-md gap-14">
        <div className="flex items-start justify-between w-full ">
          <div className="w-10 h-10">
            <img
              src="../../src/assets/Laboratory-3.png"
              alt="lab"
              className="w-full h-full"
            />
          </div>
          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>
        <div className="text-primary text-start">Book Packages</div>
      </div>
    </div>
  );
};

export default Tabs;
