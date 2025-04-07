import React from "react";
import ProjectCacaBanner from "../../assets/ProjectCacaBanner.jpg"

function ProjectCaca() {
  return (
    <div className="overflow-hidden">
      <div className="min-[320px]:mt-4"><img src={ProjectCacaBanner} alt="Project CACA" /></div>

      <div
        className="flex gap-16 animate-scroll  justify-center items-center"
        style={{
          animation: "scroll 200s linear infinite",
          width: "max-content",
        }}
      >
        <h2 className="text-center text-sm custom-font-shoulder">
          We must treat others the same way we would want them to treat us. |
          Nobody likes bullying behaviour. | Both the bully and he one who is
          being bullied need counselling. | Be a buddy, not a bully. | As a
          bystander, you can help stop taunting and bullying.
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

      <div className="px-20 mt-10 min-[320px]:mt-6 min-[320px]:px-4 md:px-10 xl:px-20">
        <h3 className="text-3xl text-center font-semibold text-gray-600 min-[320px]:text-lg md:text-3xl">
          Project CACA – Project Detail
        </h3>

        <div>
          <h2 className="text-sm text-center text-[#3e4142] mt-3 mb-1 min-[320px]:mt-2 md:text-sm md:mt-3">
            Prevention is better than cure.
          </h2>
          <p className="text-center min-[320px]:text-xs md:text-base">
            The Project is <a href="">research</a> and curriculum-based
            intervention that follows a democratic chain of processes for its
            development and implementation. The Project is committee driven with
            focus on prevention of child sexual abuse. It covers{" "}
            <a href="">legal, psychological and academic aspects</a> of our
            children’s safety and wellbeing. It comprises multiple instruments
            and resources built around the core instrument, CACA Safety
            Workbooks. These instruments and resources form a set of
            deliverables addressed to all the stakeholders, children, parents,
            teachers, and non-teaching staff of a school. The Project’s
            self-sustainability lies in the CACA Safety Workbooks paid
            circulation in schools. The prescription of the CACA Safety
            workbooks in the school booklist initiates the Project
            implementation process.
          </p>

          <h3 className="mt-10 text-center font-bold text-xl">Salient Points</h3>

          <div className="grid-cols-2 grid gap-y-4 gap-x-10  mt-4 min-[320px]:grid-cols-1 md:grid-cols-2">
            <div className="">
              <h3 className="text-xl font-semibold mb-2">Pedagogy</h3>
              <ul className="list-disc text-sm ml-7">
                <li className="my-1">
                  Co-scholastic, Interdisciplinary and integrated as per New
                  National Education Policy 2020.
                </li>
                <li className="my-1">
                  10 World Health Organisation Life Skills, NEP 21st Century
                  Skills and Moral Science (Constitutional and 21st Century
                  Values) – based CACA Safety Workbooks’ chapters easily blend
                  with existing timetable periods of Computer Science, Science,
                  Social Science, English Language, Physical Education, and
                  Environmental Science – EVS. After all, our children’s safety
                  and wellbeing are collaborative efforts.
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-xl font-semibold mb-2">Compliances</h3>
              <ul className="list-disc text-sm ml-8">
                <li className="my-1">
                  Covers what is prescribed regarding our children’s safety and
                  wellbeing for children’s safety and wellbeing in NEP 2020 and
                  NCERT – National Curriculum Framework Ver 1.0.
                </li>
                <li className="my-1">
                  With various circulars, notifications, and guidelines by
                  various authorities that a school must abide by like{" "}
                  <a href="">POCSO Rule Gazette Notification</a>, Exhibition of
                  Komal video to children, POCSO/ Cyber Safety/ Anti Bullying/
                  Disaster Management/ Food Safety Committees formation, and a
                  lot more.
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-xl font-semibold mb-2">Deliverables</h3>
              <ul className="list-disc text-sm ml-8">
                <li className="my-1">
                  The Project begins with a webinar-based interactive teachers’
                  training on the pedagogy of the workbooks.{" "}
                  <a href="">Pink Book</a>
                </li>
                <li  className="my-1">
                  For our children, the Project unfolds as their safety
                  workbooks in their timetable periods years after year.
                </li>
                <li  className="my-1">
                  For teachers, parents and non-teaching staff, the Project
                  unfolds as training/sensitisation webinars on various topics
                  related to children’s safety and wellbeing years after year.
                </li>
                <li  className="my-1">
                  For parents and non-teaching staff the webinars are in
                  English, Hindi, and various regional languages. Judges, Panel
                  Advocates, Psychologists, Social Workers and other subject
                  matter experts from our in-house team and supportive and
                  partner organisations conduct the webinars.
                </li>
                <li  className="my-1">
                  The blue, green, and red companion booklets for parents,
                  teachers and non-teaching staff are in English, Hindi, and
                  regional languages.
                </li>
                <li  className="my-1">
                  Picture books (UKG to 3), Supplementary worksheets, Animated
                  chapter videos, and
                </li>
                <li  className="my-1">Posters for display in school.</li>
                <li  className="my-1">
                  Online Assessment of various teaching challenges for the
                  workbooks faced by teachers.
                </li>
                <li  className="my-1">
                  E-Certificates for teachers for online training, for school
                  for Project Implementation and training cum opinion poll
                  report-card of teachers online training.
                </li>
                <li  className="my-1">National School Psychology Quiz for schools – Psych-Ed</li>
                <li  className="my-1">
                  Guidance and assistance on formulation of a safety policy and
                  committees.
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-xl font-semibold mb-2">Feature:</h3>
              <ul className="list-disc text-sm ml-8">
                <li className="my-1">
                  The last page of each Safety Workbook showcases the Project
                  CACA safety programme’s statement and bibliography.
                </li>
                <li className="my-1">
                  Embedded QR codes: All resources like companion booklets
                  (Blue, Green and Red), Teacher’s Manual, Picture books (UKG to
                  3), Supplementary worksheets, Animated chapter videos, and
                  Posters for display in school are embedded as QR codes on the
                  second last page of each CACA Safety Workbook.
                </li>
                <li className="my-1">
                  All QR code based deliverable material and Psych-Ed Quiz are
                  provided for free. Schools, NGOs, and Govt.
                  organisations/agencies may use them as per their requirement
                  with due credit given to Project CACA.
                </li>
              </ul>
            </div>
          </div>
          </div>

          <h4 className="mt-14 text-sm text-center">
            Institutions should not preserve the problems to which they are a
            solution.
          </h4>
          <p className="text-center mt-2 mb-6 min-[320px]:text-xs md:text-base">
            The Project is being implemented across India in
            CBSE/CISCE/State/Foreign Board affiliated individual as well as
            group schools including Meghalaya Govt. Schools under Samagra
            Shiksha Abhiyan. And, in many, religious minority schools like
            Christian, Muslim, Sikh and Jain. The project is collaborative
            effort, developed and implemented with the help of partner
            organisations like NGO – Counsel to Secure Justice, Fortis Mental
            Health Care and Behavioral Sciences, Edusynergies and supportive
            organization like State Commissions for Protections of Child Rights,
            State/District Legal Services Authorities and more.
          </p>

          <div className="grid grid-cols-2 min-[320px]:grid-cols-1 md:grid-cols-2">
            <div className="">
              <h3 className="text-lg font-semibold">The Project’s 7 instruments are:</h3>
              <ul className="list-decimal ml-8 mt-3 text-sm">
                <li className="my-1">
                  Core Instrument – CACA Safety Workbooks (UKG to class 9, Class
                  10- upcoming)
                </li>
                <li className="my-1">Research – Surveys/Opinion Polls</li>
                <li className="my-1">Peer Reviews</li>
                <li className="my-1">Assessment for teaching challenges</li>
                <li className="my-1">
                  Webinars – Training/Sensitisation of teachers, parents, and
                  non-teaching staff.
                </li>
                <li className="my-1">
                  Litigation and Psychosocial support for POCSO survivors.
                </li>
                <li className="my-1">National School Psychology Quiz for schools – Psych-Ed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">The Project’s 6 resources are:</h3>
              <ul className="list-decimal ml-8 mt-3 text-sm">
                <li className="my-1">
                  Companion booklets (Blues, Green and Red) for teachers,
                  parents, and non-teaching staff.
                </li>
                <li className="my-1">Teachers’ Manual – Pink Book</li>
                <li className="my-1">Posters for display in school.</li>
                <li className="my-1">Videos based on workbooks’ chapters.</li>
                <li className="my-1">Supplementary Worksheets</li>
                <li className="my-1">Picture Books</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCaca;
