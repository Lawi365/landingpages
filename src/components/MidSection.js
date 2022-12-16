import React from "react";
import { BsArrowRight } from "react-icons/bs";
import bg from "../image/bgrm.png";

function MidSection() {
  return (
    <div className="bg-[#faf9f9]">
      <div className="bigger-div flex bg-[#faf9f9] mx-12 mt-0 px-16 py-10 justify-items-center" >
    {/* right */}
        <div className="right-div inline-block w-1/2 ">
          {/* subsection text */}
          <div className="text-black font-serif text-6xl">
            <p className="text-pink-600">Psychological</p>
            <p>Therapy Daily</p>
            <p>Sessions</p>
          </div>
          {/* sub logo texts */}
          <div className="sub-texts text-sm p-2">
            <p>
              We provide most relaxing and easy way to refresh your mind. listen
              to yourself get better.
            </p>
          </div>
          {/* link to join now with arrow */}
          <div className="join-now text-base text-blue-300 flex items-center p-2">
            <button className="no-underline hover:underline">Join now</button>
            <div className="mx-2"><BsArrowRight/></div>
          </div>
          {/* the numbers */}
          <div className="flex mx-2 my-4">
                <div className="w-1/4  font-serif ">
                    <p className="text-3xl">259 </p>
                    <p className="text-xs pt-2">People</p>
                    <p className="text-xs pt-0.5 ">Refined</p>

                </div>
                <div className="w-1/4  font-serif ">
                    <p className="text-3xl">24+</p>
                    <p className="text-xs pt-2">Unique</p>
                    <p className="text-xs pt-0.5 ">Courses</p>
                </div>
                <div className="w-1/4  font-serif ">
                    <p className="text-3xl">3</p>
                    <p className="text-xs pt-2">Years of</p>
                    <p className="text-xs pt-0.5 ">Experience</p>
                </div>
          </div>
        </div>


     {/* center containgint the image */}
        <div className="w-1/2">
            <img className="w-294"  src={bg} alt="happy lady smiling"/>
        </div>
      </div>
      
    </div>
  );
}

export default MidSection;
