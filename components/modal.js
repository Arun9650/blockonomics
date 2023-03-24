import React from "react";
import Paybutton from "./paybutton";
export default function Modal(props) {

  

  if (!props.show) {
    return null;
  }

  return (
    <div className="flex w-full  justify-center items-center  h-screen">
      <div  style={{backdropFilter:"blur(30px)"}} className="block relative max-w-xl w-96 focus:outline-none rounded-lg bg-white bg-opacity-5 bg-clip-padding p-6 shadow-lg   ">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Pay and get Write massage 
        </h5>
       
        <svg
          onClick={props.onClose}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 absolute -top-11 -right-14  cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <Paybutton value={props.data} />
      </div>
    </div>
  );
}
