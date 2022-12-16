import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function Navigation() {
  return (
    <div className="flex py-4 bg-[#fff9fb] ">
      {/*logo*/}
      <div className="flex-none h-4 font-bold mx-8">Gloow.</div>
      {/* center */}
      <div className="font-normal text-sm text-gray-500 w-4/5 py-1 -mx-2">
        <ul className="flex">
          <button alt="" className=" "><li className="mx-2 focus:border-bottom-4">Home</li></button>
          <button alt="" className=" "><li className="mx-2">Schedule</li></button>
          <button alt="" className=" "><li className="mx-2">About us</li></button>
          <button alt="" className=" "><li className="mx-2">Contact</li></button>
        </ul>
      </div>
      {/* right */}
      <div className="w-1/5 flex items-center mr-0 text-pink-500 font-semibold">
        <div className="  ">Book Visit</div>
        <div>
          <BsArrowRightShort />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
