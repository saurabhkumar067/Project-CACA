import React, { useState } from "react";
import PartnersSupportersBanner from "../../assets/PartnersSupportersBanner.jpg";

function PartnersSupporters() {
    const [Partners, setPartners] = useState([
      "https://projectcaca.org/wp-content/uploads/2021/04/New-logo-CSJ.png",
    "https://projectcaca.org/wp-content/uploads/2021/04/New-logo-Fortis.png",
    "https://projectcaca.org/wp-content/uploads/2021/04/EDUSYNERGIEGY-LOGO-13.-1.png",
       
      ]);
      
      
  return (
    <div>
      <div>
        <img src={PartnersSupportersBanner} alt="ChildrenPicturebooks" className="w-full h-full" />
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
          Family is not an important thing. It is everything. | The memories we make with our family is everything. | Families are like branches on a tree. We grow in different directions, yet our roots remain as one. |  Being a family means you are part of something very wonderful. It means you will love and be loved for the rest of your life. 
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
          About Us
          </h2>
          <h3 className="text-center text-3xl text-[#666666] font-semibold outfit mt-1 mb-4">Partner & Supporters</h3>
          <p className="quicksand text-center">Project CACA, Children Against Child Abuse, is an institution (school) driven and rights-based preventive safety programme for schools to keep our children happy, healthy and safe. It is based on life skills and value education teaching and covers child rights, gender equality and abuse prevention. It is implemented as a safety policy of the school. It follows a child-centric and holistic approach that involves all the stakeholders, i.e., children, parents, teachers and non-teaching/support staff. Social Axiom Foundation (SAF) is the parent NGO of Project CACA. The project is implemented with the help of various partners and supportive government/non-government organisations like:</p>

          <p className="quicksand mt-10 text-center"><a href="" className="hover:underline text-red-900 font-semibold">Counsel to Secure Justice – CSJ</a> |  <a href="" className="hover:underline text-red-800 font-semibold">Department of Mental Health and Behavioral Sciences, Fortis Health Care</a> | Edusynergies | Various State Commissions for Protection of Child Rights | Districts Legal Service Authorities | Child Welfare Committees.</p>
          <div className="grid grid-cols-3 mt-5">
            {
                Partners.map((Partner, index)=>{
                    return (
                        <a key={index} href=""><img  src={Partner} alt="" className="mx-auto w-[200px]  hover:scale-110 duration-300 object-contain" /></a>
                    )
                })
            }
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default PartnersSupporters;
