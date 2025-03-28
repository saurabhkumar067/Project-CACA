import React, { useState } from "react";
import AudiosBanner from "../../assets/AudiosBanner.jpg";

function Audios() {
  const [AudiosLinks, setAudiosLinks] = useState([
    "Class 6-The Yakshi Challenge",
    "Class 7-Kartik is brave",
    "Class 7-Riya and rescue",
    "Class 7-Nisha is a brave girl",
    "Class 8-Getting to know your ‘self’",
    "Class 8-Arpit gets angry",
    "Class 8-Its okay to be scared",
    "Class 8-Arpit helps Nancy",
    "Class 9-Comedy of genders",
    "Class 9-A friend in need is a friend indeed",
    "Class 9-A child in conflict with the law",
  ]);

  return (
    <div>
      <div>
        <img
          src={AudiosBanner}
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
            I make mistakes growing up. I am not perfect; I am not a robot. | I
            was very different from everybody else growing up. I spoke a
            different language at home, I ate different food, and I looked
            different. So I could always relate to Aladdin in that way, being
            the outcast.
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

      <div className="px-32">
        <div>
          <h2 className="text-3xl text-[#666666] text-center mt-7 font-semibold">
            Resources
          </h2>
          <h3 className="text-center text-4xl text-[#666666] outfit mt-1 mb-8 font-semibold">
            Audios
          </h3>

          <div className="grid grid-cols-3 mt-14 gap-y-20">
            {AudiosLinks.map((audio, i) => {
              return (
                <div key={i} className="card cursor-pointer text-center ">
                  <a href="" className="text-blue-800 hover:underline text-base">
                    {audio}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audios;
