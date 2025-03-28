import React, { useState } from "react";
import SupportStaffbookletsBanner from "../../assets/SupportStaffbookletsBanner.jpg";

function SupportStaffbooklets() {
    const [SupportbookletsLink, setSupportbookletsLink] = useState([
        "Support Staff Booklet English – Red",
  "Support Staff Booklet Assamese – Red",
  "Support Staff Booklet Bengali – Red",
  "Support Staff Booklet Gujarati – Red",
  "Support Staff Booklet Hindi – Red",
  "Support Staff Booklet Kannada – Red",
  "Support Staff Booklet Kashmiri – Red",
  "Support Staff Booklet Malayalam – Red",
  "Support Staff Booklet Marathi – Red",
  "Support Staff Booklet Odia – Red",
  "Support Staff Booklet Punjabi – Red",
  "Support Staff Booklet Tamil – Red",
  "Support Staff Booklet Telugu – Red",
  "Support Staff Booklet Urdu – Red",
    ])
  return (
    <div>
      <div>
        <img
          src={SupportStaffbookletsBanner}
          alt="Character-Canvas"
          className="w-full h-full"
        />
      </div>
      <div className="w-[80%] overflow-hidden mx-auto">
        <div
          className="flex gap-16 animate-scroll  justify-center items-center"
          style={{
            animation: "scroll 50s linear infinite overflow-hidden",
            width: "max-content",
          }}
        >
          <h2 className="text-sm custom-font-shoulder">
          Health care is not a privilege. It is a right: the right to health (articles 23 and 24). Every child has a right to a good modern health care system.
          </h2>
        </div>
      </div>

      <style>
        {`
      @keyframes scroll {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
      .animate-scroll {
        white-space: nowrap;
        display: flex;
        animation: scroll 150s linear infinite;
      }
    `}
      </style>

      <div className="px-40">
        <div>
          <h2 className="text-3xl text-[#666666] text-center mt-7 font-semibold">
            Resources
          </h2>
          <h3 className="text-center text-2xl outfit mt-1 mb-10 font-semibold text-[#666666]">
          Support – Staff Booklets
          </h3>
          <div className="flex  gap-5 items-center">
            <img
              src="https://projectcaca.org/wp-content/uploads/2023/10/1.png"
              alt=""
              className="h-[300px] w-[210px] object-cover"
            />
            <div className="grid grid-cols-3 gap-y-10 gap-x-10">
            {
                SupportbookletsLink.map((link, index)=>{
                    return (
                        <a href="" className="text-red-600 hover:underline text-sm">{link}</a>
                    )
                })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportStaffbooklets;
