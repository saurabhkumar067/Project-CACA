import React, { useState } from "react";
import DirectorsBanner from "../../assets/DirectorsBanner.jpg";


function Directors() {
  const [directorsData, setdirectorsData] = useState([
    {
      img: "http://projectcaca.org/wp-content/uploads/2024/11/Mr.-Pradeep.jpeg",
      name: "Pradeep",
      disc: "Director for implementation of Project CACA – Children Against Child Abuse. Over the last couple of years, he has conducted multiple sensitisation and awareness workshops for teachers, parents and non-teaching staff of schools across India on child rights, child sexual abuse, and various laws related to protection and safety of children. His participation in the programme on Combating Violence Against Women and Girls at National Institute of Public Cooperation & Child Development and at various public discussions on women and children safety has made him passionate about bringing a change in the way we face, challenge and address the real and grave threat to our children.",
    },
    {
      img:"http://projectcaca.org/wp-content/uploads/2017/07/Sh.-Vikas-Nautiyal-e1504511433434.jpg",
      name:"Vikas Nautiyal",
      disc:"He is a rationalist with subject learning in physics (astrophysics) from Delhi University. He has completed 50+ circles around the sun and has a working domain expertise in schools from policy to grass root levels. He is a strong promoter of scientific temper in the school education system and has taught astronomy to students and trained teachers on scientific temper for more than two decades. He regularly advocates rationalism in various national TV news channels. He is a strong advocate for Anti-Superstition and Black Magic Act. He founded Leo Planetaria in 2007 and played a pivotal role in bringing digital planetarium technology to India at grass root levels. In 2016, he extended his sphere of activities to create sensitization cum awareness on child rights, gender equality and child abuse in schools through Project CACA, Children Against Child Abuse. He represents Project CACA, a safety programme for schools, as a member in school management committees of various schools. He is Director (Advocacy) for the project.",
    },
  
  ]);
  return (
    <div className="overflow-hidden">
      <div>
        <img src={DirectorsBanner} alt="Directors" />
      </div>

      <div
        className="flex gap-16 animate-scroll  justify-center items-center"
        style={{
          animation: "scroll 200s linear infinite",
          width: "max-content",
        }}
      >
        <h2 className="text-center text-sm custom-font-shoulder">
        We all are born as empty vessels which moral values can shape. | Family and moral values are central to everything. | What we learn becomes part of who we are. | Moral education has to be an inherent part of the school education system. | Human rights is a moral thing. | If people are good because they fear punishment, and hope for reward, then we are a sorry lot indeed.
        </h2>
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
            `}
      </style>

      <div className="px-20 mt-10">
        <h3 className="text-3xl text-center font-semibold text-gray-600">
          About Us - Directors
        </h3>

        <div className="mt-6 flex justify-between gap-20">
          {directorsData.map((directors, index)=>{
            return (
              <div key={index} className="px-3 w-1/2 h-fit rounded-xl py-2 text-center mb-8 bg-gray-50 hover:bg-gray-100 duration-300">
                <div className="w-1/2 mx-auto h-1/2">

              <img
                src={directors.img}
                alt={directors.name}
                className="rounded-xl w-full h-full object-contain"
              />
                </div>

              
                <h3 className="text-xl font-semibold mt-5 mb-3">{directors.name}</h3>
                
                <p className="text-sm quicksand">
                  {directors.disc}
                </p>
              
            </div>
            )
          })}
        
          
        </div>
      </div>
    </div>
  );
}

export default Directors;
