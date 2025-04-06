import React from "react";
import LitigationPsychosocialSupportBanner from "../../assets/LitigationPsychosocialSupportBanner.jpg"

function LitigationPsychosocialSupport() {
  

  return (
    <div>
      <div>
        <img
          src={LitigationPsychosocialSupportBanner}
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
          Children are explorers. They need safe places where they can freely move, experiment and investigate. Asking children not to run, jump or climb is akin to saying “do not breathe.” It is our responsibility to provide safe places for children.
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
            Project CACA
          </h2>
          <h3 className="text-center text-3xl text-[#666666] font-semibold outfit mt-1 mb-4">
          Litigation
          </h3>
          <p className="quicksand text-center">
          Project CACA supports children from EWS in the Delhi region who have been sexually abused so they can pursue justice that meets their needs. The project provides legal and psychosocial support to the survivors during judicial proceedings for swift action and rightful convictions. The services are provided directly and through pro bono networks, partners and supportive organisations. The litigation process is spearheaded by the project’s panel advocate Ravi Kumar, supported by legal consultant Neha Tyagi. Currently, the project supports three survivors of POCSO.
          </p>
       
        </div>
      </div>
    </div>
  );
}

export default LitigationPsychosocialSupport;
