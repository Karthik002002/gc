import React from "react";
import GC_Device from "../../assets/GC/GC_Device.png";
import black from "../../assets/LLV3_Photoroom.png";
import GC_from from "../../assets/from.png";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Development() {
  return (
    <div className="flex flex-col bg-white py-3 px-6 h-full overflow-y-auto custom-scrollbar">
      <div className="grid grid-cols-12 ">
        <div className="md:col-span-2 col-span-12 flex justify-start items-center flex-col h-full ">
          <img
            src={black}
            alt="Device"
            className="w-[100px] object-cover mb-2" 
          />
          <img
            src={GC_Device}
            alt="Device"
            className="w-[140px] object-cover"
          />
        </div>

        <div className=" md:col-span-10 col-span-12">
          <h2 className="text-2xl font-bold text-[var(--heading)] my-1 flex justify-center">
            Proof of Concept (POC) Demonstrated to COAS
          </h2>
          <p className="text-justify">
            Arty units, use ESM, DSM, and Lat-Long references in their Shakti
            Equipment. The Grid converter facilitates the migration from ESM to
            DSM without inhibiting the modernization of Artillery systems, to
            keep pace with the latest miltech, including automation of fire
            control systems. The initial Proof of Concept (POC) device,
            demonstrated to the Chief of Army Staff (COAS), was a basic
            prototype designed specifically for a single zone (Delhi). This
            simplified version served as a feasibility demonstration, showcasing
            the potential for grid conversion functionality.
          </p>

          <h2 className="text-2xl font-bold text-[var(--heading)] my-1 flex justify-center">
            Prototype
          </h2>
          <p className="text-justify ">
            To enable the device to perform grid conversions for all zones
            across India, substantial improvements were required to the POC. The
            memory and processing capabilities had to be significantly upgraded
            to handle the increased data and computational demands. The grid
            conversion formulas, originally developed for a Windows-based
            system, needed to be reprogrammed entirely to function with the
            upgraded processor. This process involved rewriting and optimizing
            complex algorithms to suit the new architecture. 
            <br />A technically feasible smaller device which is handy was
            developed. This device included essential features of grid
            conversion. Further, this device was demonstrated to HAL where it
            garnered interest for potential procurement and other operational
            uses.
          </p>
          <h2 className="text-2xl font-bold text-[var(--heading)] my-1 flex justify-center">
            Final Design
          </h2>
          <p className="text-justify ">
            After testing and approval of the conversion formula in the
            prototype, it was circulated to the users. The device was improves
            based on the feedback given by the user. This development till the
            final product took about 12 months. 
          </p>
        </div>
      </div>

      {/* Grid Section */}
    </div>
  );
}
