import React, { useState } from "react";
import CharacterCanvasBanner from "../../assets/CharacterCanvasBanner.jpg";

function TeachersManual() {
    const [supplementaryLink, setSupplementaryLink] = useState([
        "My Beginner’s Safety Workbook",
        "My First Safety Workbook",
        "My Second Safety Workbook",
        "My Third Safety Workbook",
        "My Fourth Safety Workbook",
        "My Fifth Safety Workbook",
        "My Sixth Safety Workbook",
        "My Seventh Safety Workbook",
        "My Eighth Safety Workbook",
        "My Ninth Safety Workbook",
    ])
  return (
    <div>
      <div>
        <img
          src={CharacterCanvasBanner}
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
            Children are also citizens. They, too, have rights like other
            citizens. They also have special rights called child rights. | The
            right to an identity (articles 7 and 8). | The right to equality
            (Article 14) | The right against discrimination (article 15). | The
            right of minorities for protection of their interests (article 29) |
            The right to education (article 28) | The right to an opinion
            (article 12 and 13) | The right to privacy.
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
          <h3 className="text-center text-2xl outfit mt-1 mb-10 text-red-600 hover:underline cursor-pointer">
          Teacher’s Manual
          </h3>
          <h3 className="text-3xl mb-2 font-bold quicksand">A Message for Teachers</h3>
          <div className="flex  gap-5">
            <img
              src="https://projectcaca.org/wp-content/uploads/2023/10/Teachers_Manual_2023_24-223x300.jpg"
              alt=""
              className="h-[200px] w-[190px] object-cover"
            />
           <p className="quicksand">Introducing an invaluable tool for teachers and coordinators seeking to establish a strong bond with their students and effectively deliver the CACA Safety Workbook series from UKG to Class 9. This comprehensive manual or primer is meticulously designed to provide step-by-step guidance in creating engaging and impactful lesson plans. By utilizing this resource, educators will effortlessly bridge the gap between curriculum and classroom, ensuring a seamless teaching experience and optimal learning outcomes.</p>
          </div>
        </div>
        <div className="mt-8 text-lg">
            <a href="" className="text-red-600 hover:underline block">Please also refer to ‘PRASHAST’ – A Disability Screening Checklist for Schools by the Department of School Education & Literacy, Ministry of Education, Government of India</a>

            <a href=""  className="text-red-600 hover:underline block my-9">Click here to access the suggested National Book Trust, India (NBT) readings embedded in the CACA Safety Workbooks .</a>

            <a href=""  className="text-red-600 hover:underline block">Click Here to Download an Excel Template for lesson plan Development.</a>
        </div>
      </div>
    </div>
  );
}

export default TeachersManual;
