import React, { useState } from "react";
import ChildrenSafetyWorkbooksBanner from "../../assets/ChildrenSafetyWorkbooksBanner.jpg";

function ChildrenSafetyWorkbooks() {
  const [safetyWorkbooks, setSafetyWorkbooks] = useState([
    {
      id: 1,
      title: "My Beginner's Safety Workbook",
      class: "UKG",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/MBSW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 2,
      title: "My First Safety Workbook",
      class: "Class 1",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M1SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 3,
      title: "My Second Safety Workbook",
      class: "Class 2",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M2SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 4,
      title: "My Third Safety Workbook",
      class: "Class 3",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M3SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 5,
      title: "My Fourth Safety Workbook",
      class: "Class 4",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M4SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 6,
      title: "My Fifth Safety Workbook",
      class: "Class 5",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M5SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 7,
      title: "My Sixth Safety Workbook",
      class: "Class 6",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M6SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 8,
      title: "My Seventh Safety Workbook",
      class: "Class 7",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M7SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 9,
      title: "My Eighth Safety Workbook",
      class: "Class 8",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M8SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
        id: 10,
        title: "My Ninth Safety Workbook",
        class: "Class 9",
        price: 250,
        currency: "Rs.",
        edition: "For New Edition",
        image: "https://projectcaca.org/wp-content/uploads/2025/02/M9SW-Pink-09-01-P-Cover-Jan.jpg",
      },
    {
      id: 11,
      class: "Class 10",
      edition: "(It’s On the Way)",
      image: "https://projectcaca.org/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-08-at-2.31.23-PM.jpeg",
    },
  ]);

  return (
    <div>
      <div>
        <img
          src={ChildrenSafetyWorkbooksBanner}
          alt="ChildrenPicturebooks"
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
          Parents, teachers, and caregivers need to understand that children go through various cognitive moral development stages before they finally understand their actions’ long-term consequences.
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
          <h3 className="text-center text-2xl outfit mt-1 mb-4">
          Children Safety Workbooks <span className="font-semibold">(UKG To 9)</span>)
          </h3>
          <p className="quicksand text-center">
          To implement Project CACA in your school, kindly fill and submit the <a href="" className="hover:underline text-red-600 font-semibold">Implementation Form.</a> Here is the link for the <a href="" className="hover:underline text-red-600 font-semibold">Teacher’s Manual (Pink Book)</a> and <a href="" className="hover:underline text-red-600 font-semibold">Template</a> for lesson plan development. Besides, here is a write-up for a <a href="" className="hover:underline text-red-600 font-semibold">parent’s circular</a> about the school’s initiative to implement Project CACA. 
          </p>
         
          <div className="grid grid-cols-3 mt-14 gap-y-20">
            {safetyWorkbooks.map((safetybook, index) => {
              return (
                <div className="card cursor-pointer text-center ">
                  <div className="mb-4">
                    <img
                      src={safetybook.image}
                      alt={safetybook.title}
                      className="mx-auto w-[200px] h-[290px] object-cover hover:scale-105 duration-500"
                    />
                  </div>
                  <h5>{safetybook.class}</h5>
                  <p>Price Rs. {safetybook.price}/-({safetybook.edition})</p>
                  <a href="" className="text-red-600 hover:underline text-sm">
                    {safetybook.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center w-1/2 mx-auto mt-10">
      Instructional Video on how to open and read My Ninth Safety Workbook in {["English", "Hindi", "Bengali", "Gujarati", "Kannada", "Malayalam", "Marathi", "Tamil", "Telugu"].map((city,index)=> <a key={index} href="" className="mx-1 text-blue-800 hover:underline">{city},</a>)}
      </div>
    </div>
  );
}

export default ChildrenSafetyWorkbooks;
