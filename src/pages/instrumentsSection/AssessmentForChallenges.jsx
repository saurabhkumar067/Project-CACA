import React, { useState } from "react";
import AssessmentForChallengesBanner from "../../assets/AssessmentForChallengesBanner.jpg";

function AssessmentForChallenges() {
    const [AssessmentForChallenges, setAssessmentForChallenges] = useState([
        "Ananda Academy, Nainital Uttarakhand",
        "Anekant English Medium School, Baramati, Pune, Maharashtra",
        "Assam Rifles Public School, Kohima, Nagaland",
        "Army Public School, Ahmednagar, Maharashtra",
        "Bal Bharati Public School, Pitampura, Delhi",
        "Bal Bharati Public School, Rohini, Delhi",
        "Bal Bharati Public School, Navi Mumbai, Maharashtra",
        "Blue Bird Senior Secondary School, Aligarh, Uttar Pradesh",
        "Jammu Sanskriti School, Jammu",
        "SD Public School, East Patel Nagar, Delhi",
        "St. Norbert School, Indore, Madhya Pradesh",
        "Sudharasanam Vidhyaasharam Poonamallee, Thiruvallur, Tamil Nadu",
        "Vidya Pratisthan’s New English Medium School, Pune-Baramati, Maharashtra",
       
      ]);
      
      
  return (
    <div>
      <div>
        <img src={AssessmentForChallengesBanner} alt="ChildrenPicturebooks" className="w-full h-full" />
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
          It is okay to be afraid or get angry, but one should always know what and who one is afraid or angry with, and one should always tell her/his loved ones about it. Remember, it is okay to be afraid and brave to tell.
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
          <h3 className="text-3xl text-[#666666] text-center font-semibold mt-1 mb-4">Assessment</h3>
          <p className="quicksand text-center">From the academic year 2019-20 onwards, another democratic process, Assessment, was added to Project CACA. It had two rounds – Round 1 (Quantitative) and Round 2 (Qualitative). Round 1 was in the form of a questionnaire to be filled out by the teachers who were teaching the CACA Safety Workbooks. Round 2 was in the form of an interview with the teachers of Round 1. The Assessment team members conducted the interviews online.</p>
          
          <p className="quicksand mt-5 text-center">In 2019-20, 12 schools as a pilot based on first come, first serve were shortlisted for Round 1. Unfortunately, we could not complete round 2 due to the pandemic outbreak, and the results could not be published. We have reinstated the Assessment process in March 2024.</p>
          
          <p className="quicksand mt-5 text-center">The Assessment is designed with the idea that the Project covers academic, psychological, and legal aspects of child rights and related issues. The Assessment is also feedback that helps us increase the workbooks’ efficacy by recalibrating them. The teaching challenges have been categorized as:</p>
          <ul className="list-decimal flex justify-center items-center gap-10 mt-5">
            {["Vocabulary","Conceptual","Image Explicitness", "Values Conflict","Evaluation","Age Appropriateness, and", "Other*."].map((item, index)=>(
                <li key={index} >{item}</li>
            ))}
          </ul>
          <p className="quicksand mt-5 text-center">The 7 categories are not water-tight compartments in the sense a challenge may fall under multiple categories.</p>
          <p className="quicksand mt-5">*The challenges also fall under the “Unintentional Outcome of a Purposive Action” category.</p>
          <ul className="flex flex-col gap-y-3 mt-7">
            <li><span className="font-semibold text-[#666666]">Assessment Year: </span>2023-24 (Quantitative)</li>
            <li><span className="font-semibold text-[#666666]">Launch Date: </span>5th March 2024</li>
            <li><span className="font-semibold text-[#666666]">Status: </span>Closed</li>
            <li><a href="">Questionnaire PDF File</a></li>
            <li><span className="font-semibold text-[#666666]">Result: </span>Result</li>
            <li><span className="font-semibold text-[#666666]">Participant Schools: </span>List</li>
            <li><span className="font-semibold text-[#666666]">Assessment Year: </span>2019-20 (pilot)</li>
            <li><span className="font-semibold text-[#666666]">Status: </span>Incomplete</li>
          </ul>
          <h5 className="font-semibold text-[#666666] mt-10 mb-5">Participating schools:</h5>
          <ul className="list-decimal flex flex-col gap-2 ml-4">
            {AssessmentForChallenges.map((challenges, index)=>(
                <li key={index}>{challenges}</li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default AssessmentForChallenges;
