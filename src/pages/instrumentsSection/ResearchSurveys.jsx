import React, { useState } from "react";
import ResearchSurveysBanner from "../../assets/ResearchSurveysBannner.jpg";

function ResearchSurveys() {
  const [surveyData, setSurveyData] = useState([
    {
      id: "04",
      title:
        "Workplace safety and gender equality in schools in the context of the PoSH Act.",
      launch: null,
      status: "Ongoing",
      resultDate: ["Data available as on 17th May 2024"],
    },
    {
      id: "03",
      title: "Children’s Safety and Wellbeing in the context of schools.",
      status: "Ongoing",
    },
    {
      id: "3a",
      title:
        "Children’s Safety and Wellbeing – Academic/Pedagogical Aspect (Life Skills & Moral Science).",
      launch: null,
      status: "Ongoing",
      resultDate: ["Data available as on 28th May 2024"],
    },
    {
      id: "3b",
      title:
        "Children’s Safety and Wellbeing – Academic, Legal and Psychological Aspects.",
      launch: "3rd October 2023",
      status: "Ongoing",
      resultDate: ["Data available as on 31st May 2024"],
    },
    {
      id: "02",
      title: "Breaking Gender Stereotypes through Illustrations.",
      launch: "20th February 2021",
      status: "Ongoing",
      resultDate: [
        "Data available as on 31st August 2021",
        "Data available as on 31st May 2022",
        "Data available as on 30th June 2023",
        "Data available as on 30th June 2024",
      ],
    },
    {
      id: "01",
      title: "A School-Driven Approach for Child Abuse Prevention.",
      launch: "23rd July 2016",
      status: "Closed",
      resultDate: ["Available"],
    },
  ]);

  return (
    <div>
      <div>
        <img
          src={ResearchSurveysBanner}
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
            It is okay to be afraid or get angry, but one should always know
            what and who one is afraid or angry with, and one should always tell
            her/his loved ones about it. Remember, it is okay to be afraid and
            brave to tell.
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
            Research/Opinions
          </h3>
          <p className="quicksand text-center">
            Social Axiom Foundation (SAF), the parent organisation of Project
            CACA (Children Against Child Abuse), regularly conducts
            surveys/opinion polls in partnership with Edusynergies and other
            organisations. The surveys help us in research work and provide
            input to the Project’s various instruments and resources. They are
            part of the different democratic processes the Project follows for
            its development and implementation. The respondents/participants in
            these surveys are primarily people associated with schools, like
            parents, teachers, principals, non-teaching staff, school
            counsellors, and management. The survey contains close-ended
            questions. Participants must select any one of the options in the
            check box for each question. Some survey questions are part of the
            learning outcomes questionnaires for the online
            training/sensitisation webinars for teachers, parents and
            non-teaching staff.
          </p>
          <ul className="mt-10">
            {surveyData.map((data, index) => (
              <div key={index} className="mb-10">
                <li className="font-semibold text-base">Survey #{data.id}</li>
                <li className="text-gray-700">
                  <span className="font-semibold text-base">
                    Survey Title:{" "}
                  </span>
                  {data.title}
                </li>
                <li className="font-semibold text-base">
                  Launch: {data.launch || "N/A"}
                </li>
                <li>
                  <span className="font-semibold text-base">Status: </span>
                  {data.status}
                </li>
                <li>
                  <span className="font-semibold text-base">Result: </span>
                  {Array.isArray(data.resultDate) ? (
                    data.resultDate.map((item, idx) => (
                      <p
                        key={idx}
                        className="text-red-600 hover:underline text-base cursor-pointer"
                      >
                        {item}
                      </p>
                      
                    ))
                  ) : (
                    <a
                      href="#"
                      className="text-red-600 hover:underline text-base"
                    >
                      {data.resultDate || "N/A"}
                    </a>
                  )}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResearchSurveys;
