import React from 'react'
import CharacterCanvasBanner from "../../assets/CharacterCanvasBanner.jpg";

function CharacterCanvas() {
    return (
        <div>
          <div>
            <img src={CharacterCanvasBanner} alt="Character-Canvas" className="w-full h-full" />
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
              Children are also citizens. They, too, have rights like other citizens. They also have special rights called child rights. | The right to an identity (articles 7 and 8). | The right to equality (Article 14) | The right against discrimination (article 15). | The right of minorities for protection of their interests (article 29) | The right to education (article 28) | The right to an opinion (article 12 and 13) | The right to privacy.
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
              <h3 className="text-center text-2xl outfit mt-1 mb-4 text-red-600 hover:underline cursor-pointer">Character Canvas</h3>
              <div className='flex  gap-5 items-center'>
                <img src="https://projectcaca.org/wp-content/uploads/2023/10/Character-Profile-1-193x300.jpeg" alt="" className='h-[170px] w-[200px] object-cover' />
              <p className="quicksand">This booklet is undeniable evidence of our firm commitment to the principle that “Being Different Doesn’t Mean Being Unequal.” Addressed to educators, it emphasizes your crucial role in cultivating inclusivity and acceptance. Serving as a valuable resource, the booklet delves into diverse character profiles, spanning age groups, cultural backgrounds, medical conditions, and aspirations. These profiles encourage meaningful conversations, challenging stereotypes, fostering empathy, and promoting unity among students. By engaging with these characters, students gain the tools to champion equality, embrace diversity, and actively contribute to building a more inclusive society.</p>
              
              </div>

            </div>
          </div>
          
        </div>
      );
}

export default CharacterCanvas