// import React from 'react'

// function Story() {
//     return (
//         <div className="mx-auto max-w-7xl px-4">
//             <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
//                 <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
//                     <p className="text-xs font-semibold leading-normal md:text-sm">
//                         About the Academy
//                     </p>
//                 </div>
//                 <p className="max-w-4xl text-base text-gray-600 md:text-xl">
//                     We got started in the year of 2019 during the pre-covid phase . We operated successfully after then until the lockdown. We suspended our operations during the lockdown period and spread awareness about the disaster. After the lockdowns we resumed our operations and are operational till date. Over this period of time over 300 students have joined us and received trainings cum mentorships from our organisation. This year Tech-Siddhi is a step ahead for us and an upgrade for our future objectives and operations. Keep showing your love and support us. Contact us for further details.
//                 </p>
//             </div>
//         </div>
//     );
// }
import React from "react";
import { Meteors } from "./ui/meteors";

export function Story() {
  return (
    <div className="">
      <div className=" w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-white-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          About the Academy
          </h1>
          <p className="font-normal text-base text-white mb-4 relative z-50">
          We got started in the year of 2019 during the pre-covid phase . We operated successfully after then until the lockdown. We suspended our operations during the lockdown period and spread awareness about the disaster. After the lockdowns we resumed our operations and are operational till date. Over this period of time over 300 students have joined us and received trainings cum mentorships from our organisation. This year Tech-Siddhi is a step ahead for us and an upgrade for our future objectives and operations. Keep showing your love and support us. Contact us for further details.
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={40} />
        </div>
      </div>
    </div>
  );
}

export default Story