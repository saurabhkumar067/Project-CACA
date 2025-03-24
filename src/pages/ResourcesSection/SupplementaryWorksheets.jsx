import React, { useState } from "react";
import CharacterCanvasBanner from "../../assets/CharacterCanvasBanner.jpg";

function SupplementaryWorksheets() {
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
            Children Worksheets Catalogue
          </h3>
          <div className="flex  gap-5 items-center">
            <img
              src="https://projectcaca.org/wp-content/uploads/2023/02/Worksheets_Cover-Page.jpg"
              alt=""
              className="h-[300px] w-[210px] object-cover"
            />
            <div className="grid grid-cols-3 gap-y-16 gap-x-14">
            {
                supplementaryLink.map((link, index)=>{
                    return (
                        <a href="" className="text-red-600 hover:underline">{link}</a>
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

export default SupplementaryWorksheets;
