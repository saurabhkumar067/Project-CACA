import React, { useState } from "react";
import TeamBanner from "../../assets/Team.jpg";

function Team() {
    const [safetyWorkbooks, setSafetyWorkbooks] = useState([
        {
          title: "My Beginner’s Picture Book",
          image:"https://projectcaca.org/wp-content/uploads/2023/05/Untitled-1.jpg"
        },
        {
          title: "My First Picture Book",
          image:"https://projectcaca.org/wp-content/uploads/2023/07/M1PB_2023-24.jpg"
        },
        {
          title: "My Second Picture Book",
          image:"https://projectcaca.org/wp-content/uploads/2023/07/M2PB_2023-24.jpg"
        },
       
      ]);
      
      
  return (
    <div>
      <div>
        <img src={TeamBanner} alt="ChildrenPicturebooks" className="w-full h-full" />
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
          Every child in the world has one thing in common – their rights. | The right to be protected from violence (article 19 and 34). | The right to be protected from armed conflict (articles 38 and 39). | The right to be protected from exploitation (articles 19, 32, 34, 36 and 39). | The right to be protected from any hazardous employment till the age of 14 years (article 24).
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
          <h3 className="text-center text-4xl font-semibold text-[#666666] outfit mt-1 mb-4">Team</h3>
          <p className="quicksand text-center">Children’s picture books help its young readers to connect with the main characters of the workbooks. The idea is to make young readers comfortable when it comes to sharing their personal feelings and incidents through the various activities of the workbooks. The QR codes for the picture books are embedded in the workbooks.</p>
          <h4 className="font-semibold text-lg mt-10">Dear Children!</h4>
          <p className="quicksand">Sana, Arpit and Pokso will be your companions as you journey through your safety workbooks. The three musketeers are childhood friends, and enjoy learning skills. Sometimes, they come across situations when they are not sure what to do. At times, they talk to their friends, parents, grandparents and teachers, but their favourite advisor is their tiger friend, Pokso. He always helps them to be happy, healthy and safe. But you’re in this story too, because the three friends might need your help with some of their problems. Enjoy their antics and those of their friends and classmates as you make your very own journey to becoming an adult. Be safe!</p>
          <div className="grid grid-cols-3 mt-14 gap-y-20">
            {
                safetyWorkbooks.map((safetybook, index)=>{
                    return (
                        <div className="card cursor-pointer text-center hover:scale-105 duration-500">
                                <div className="mb-4">
                                    <img src={safetybook.image} alt={safetybook.title} className="mx-auto w-[200px] h-[290px] object-cover" />
                                </div>
                                <a href="" className="text-red-600 hover:underline text-base">{safetybook.title}</a>
                               
                        </div>
                    )
                })
            }
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Team;
