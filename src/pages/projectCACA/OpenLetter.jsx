import React from 'react'

function OpenLetter() {
    return (
        <div className="overflow-hidden">
          <div>{/* <img src={ProjectCacaBanner} alt="Project CACA" /> */}</div>
    
          <div
            className="flex gap-16 animate-scroll  justify-center items-center"
            style={{
              animation: "scroll 200s linear infinite",
              width: "max-content",
            }}
          >
            <h2 className="text-center text-sm custom-font-shoulder">
            Do not change so people will like you. Be yourself, and the right people will love the real you. | There are friends, there is family, and then there are friends that become family.
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
            <h2 className="text-4xl text-center font-semibold text-red-600">
            Open Letter
            </h2>
    
            <div>
              <h3 className="text-base font-semibold text-center text-[#3e4142] mt-4 mb-2">
              Dear Parent/Caregivers/ Teachers,
              </h3>
              <p className="text-center mb-5">
              It is true that parents, teachers and caregivers love children and are their well-wishers, yet they lean towards the idea – spare the rod, spoil the child. Corporal punishment (CP) is deep rooted in the history of civilisations. The pretext of CP, whether at home, school or in the community, is to: discipline a child, act as a corrective measure to improve their efficiency or teach them a moral lesson.
              </p>
              <p className="text-center mb-5">A wide range of punishments fall under the ambit of CP: <i>hitting with a cane or ruler, slapping, twisting ears, making them stand on desks with hands raised high, etc.</i> Other forms of physical distress, emotional battering and destruction of a child’s self-esteem are also part of CP.</p>
                
                <p className="text-center mb-5">In schools, things like: <i>scoring poor marks, coming late, not doing homework, not wearing the proper school uniform,</i> among other things give teachers an excuse to pick up the rod. Unfortunately, once the school becomes an alma mater, to most people CP received seems like medals of bravery to proudly boast about. Their arguments for accepting the CP are, sometimes one has to be cruel to be kind; we were beaten as children and we are better adults today; or we do take bitter medicine to get cured in the long run, don’t we? Once adults begin to see CP not as being inhuman but a way of control and demonstrating authority, they automatically start to justify crimes like ragging and domestic violence.</p>

                <p className="text-center mb-5">Moreover, at times, perpetrators take the route of CP to abuse children sexually. A child conditioned to accept CP will find it very difficult to challenge or report the perpetrator. Breaking the cycle is the way forward. When you beat us, you show us that it is all right to beat others. When you beat us with the intent of teaching us a lesson, you tell us that we are failures and that we do not deserve your respect. So the next time you are about to hit us, think about this – will your legacy to your offspring and community be one of hate or one of love and non-violence?</p>

                <h4 className='text-lg font-semibold'>The three musketeers and their classmates</h4>
                <p className="text-center mb-5">In India, various laws, verdicts, guidelines, and advisories prohibit CP. The Juvenile Justice Act (JJA) – 2015 prescribes punishment for cruelty to a child. “Whenever a child is assaulted, abused, exposed or neglected in a manner to cause physical or mental suffering by any person employed by or managing an organisation, which is entrusted with the care and protection of the child, the punishment would be rigorous imprisonment up to five years and fine up to Rs five lakh. Furthermore, on account of the cruelty as described above, if the child is physically incapacitated or develops a mental illness or is rendered mentally unfit to perform regular tasks or has a risk to life or limb, then imprisonment may extend up to ten years.”</p>
                <p className="text-center text-xl mb-5">The above open letter is based on a chapter from My Eighth CACA Safety Workbook for children.</p>
          </div>
          </div>
        </div>
      );
}

export default OpenLetter