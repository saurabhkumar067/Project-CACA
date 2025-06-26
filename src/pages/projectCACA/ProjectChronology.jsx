import React, { useState } from "react";
import ProjectChronologyBanner from "../../assets/ProjectChronologyBanner.jpg";
import FGD2 from "../../assets/FGD-2.jpg";
import Convention1 from "../../assets/Convention-1.jpg";
import CBD2 from "../../assets/CBD-2.jpg";

function ProjectChronology() {
    const [keyParticipants, setKeyParticipants] = useState([
        [
        "Late Shri Puran Chand – Fr. General Secretary, Council of Boards of School Education (COBSE); Fr. Chairperson Project CACA Committee",
        "V. Ramgopal Rao – Director, IIT- Delhi",
        "Dr Dinesh Kumar – Fr. Head Publication, Presently HOD-Science – National Council of Educational Research and Training (NCERT)",
        "Shri Nagendra Goyal – Deputy Commissioner, Kendriya Vidyalaya Sangathan (KVS)",
        "Dr Amit Sen – Senior Child & Adolescent Psychiatrist – Keynote Speaker",
        "Dr Sandeep Chatterjee – Registrar, IIT Delhi",
        "Yashpal Singh Kalsi – Senior Self Defense Instructor",
        "Dr Nimmi Rastogi – Coordinator Health, Delhi Dialogue Commission, Ministry of Health & Family Welfare, Govt. of NCT of Delhi"
      ],
      [
        "Dr A. K. Pandey – Chairperson, The National Progressive Schools’ Conference (NPSC)",
        "Dr Amit Sen – Eminent Child Psychiatrist, Children First",
        "Dr Amrita Burman – Director, The Sunbeam Schools",
        "Dr Dinesh Kumar – Fr. Head Publication & present HOD Science, NCERT",
        "Ms Hemlata Suri – Student Counsellor, Carmel Convent School",
        "Dr Indu Khetrapal – Eminent Educationist – Principal/Secretary, Salwan Public School",
        "Michelle Mendonca – Project Director, Counsel to Secure Justice (CSJ)",
        "Mr Priyank Kanoongo – Member – RTE and Education, NCPCR",
        "Mr Ravi Bhatnagar – Manager External Affairs, Reckitt Benckiser",
        "Ms Tanuja Sharma – Student Counsellor, The Indian School – Oman",
        "Mr Yashpal Singh Kalsi – Eminent Self Defence Expert"
      ],
      [
        "Air Force Educational and Cultural Society – Delhi",
        "Army Public Schools – Delhi; (AFECS)",
        "ARWES (Assam Rifles Welfare Education Society) – Assam Rifles Headquarters, Laitkor, Shillong",
        "BDM International School, Kolkata, West Bengal",
        "Bhartiya Vidya Bhawan AKRR – Hyderabad",
        "Catholic Bishops’ Conference of India (CBCI) – Delhi",
        "CBSE Sahodya Complex – Chennai",
        "CM International – Pune",
        "(DLSA) District Session Courts – Chikmagalur, Bengaluru (Karnataka), Nagpur (Maharastra)",
        "FDRC, AWES (Army Welfare Education Society) – Delhi",
        "Gurukul, the School – Ghaziabad",
        "IISER Indian Institute of Science Education and Research – Mohali",
        "(IIT) Indian Institute of Technology – Delhi",
        "KL International School – Meerut",
        "Manav Rachna International School – Faridabad",
        "Salwan Public School – Gurugram",
        "Marks School – Delhi",
        "Vidyashilp Academy – Bangalore",
        "(WRCAE) Governing Council meeting of Western Region Catholic Association"
      ]
      
      
    ]
      )
    
  return (
    <div>
      <div>
        <img src={ProjectChronologyBanner} alt="ChildrenPicturebooks" className="w-full h-full" />
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
          Children should know the route that they take every day while going to and coming back from school. They should be encouraged to tell or share with their loved ones various incidents that occur while going to and coming back from school.
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

      <div className="px-40 min-[320px]:px-4 sm:px-10 xl:px-40">
        <div>
          <h2 className="text-3xl text-[#666666] text-center mt-7 font-semibold min-[320px]:text-xl md:text-3xl">
            Resources
          </h2>
          <h3 className="text-center text-3xl outfit mt-1 mb-4 text-[#666666] font-semibold min-[320px]:text-2xl md:text-3xl">Project Chronology</h3>
          <p className="quicksand text-center min-[320px]:text-xs md:text-base">The project has evolved through a democratic chain of events and processes like opinion polls, focus group discussions, conventions, consensus-building discussions and a pilot programme held across India. It continuously evolves under the project committee through quantitative and qualitative assessments and peer reviews.</p>

          <div className="border-b-2 border-[#777777] pb-8 mb-8">
          <h4 className="font-semibold text-lg mt-10 hover:underline text-red-600 cursor-pointer min-[320px]:text-base md:text-lg">1. Opinion Poll, July 2016</h4>
          <p className="quicksand mt-2 min-[320px]:text-xs md:text-base">An opinion poll of parents and teachers from 80+ schools of 30+cities across India on the utility of safety workbooks on CSA for school students was conducted in 2016. Refer opinion poll on page 13.</p>
          <p className="quicksand mt-4 min-[320px]:text-xs md:text-base"><span className="font-semibold text-[#666666]">Outcome:</span> The poll overwhelmingly reflected the children books as the need of the hour.</p>
          </div>

          <div className="border-b-2 border-[#777777] pb-8 mb-8">
            <div>

          <h4 className="text-lg text-[#666666] min-[320px]:text-base  md:text-lg"><span className="font-semibold text-lg min-[320px]:text-base  md:text-lg">2. Focus group Discussion – FGD, IIT Delhi, 23rd July 2016</span> – Abuse Against Children and Ways to Combat the Issue</h4>
          <p className="quicksand mt-2 min-[320px]:text-xs  md:text-base">The FGD had a participation of around 50+ attendees comprising mainly of school counsellors, special educators, academicians, lawyers and representatives of various voluntary organisations working on the issues of child abuse, law enforcement agencies like Special Police Unit for Women and Children, Delhi Police and a group of schools like Kendriya Vidyalaya Sangathan amongst others. The discussion received an overwhelming response through qualitative participation and contribution from industry, academia, voluntary organisations and other stakeholders.</p>
          </div>
          <div>
            <img src={FGD2} alt="" className="mt-2" />
            <strong className="text-[#777777] mt-2 block min-[320px]:text-sm  md:text-base">The key participants included –</strong>
            <ul className="list-disc quicksand ml-7 mt-5 min-[320px]:text-xs min-[320px]:mt-3  md:text-base md:mt-5">
                {
                    keyParticipants[0].map((key, idx)=>(
                        <li key={idx} className="mb-2">{key}</li>
                    ))
                }
            </ul>
            <p className="quicksand mt-4 min-[320px]:text-xs  md:text-base"><span className="font-semibold text-[#666666]">Outcome:</span> Age-appropriate and progressive child-centric; safety workbooks based on core principles is the way forward.</p>
          </div>

            </div>

            <div className="border-b-2 border-[#777777] pb-8 mb-8">
            <div>

          <h4 className="text-lg text-[#666666] min-[320px]:text-base  md:text-lg"><span className="font-semibold text-lg min-[320px]:text-base  md:text-lg">3. Convention – IIT Delhi, 12th November 2016</span> – To Empower Schools Against Child Sexual Abuse</h4>
          <p className="quicksand mt-2 min-[320px]:text-xs md:text-base">Project CACA brought together various stakeholders for an open discussion at the convention which saw qualitative participation and contribution from 150+ schools, 20+ organisations, 10+ NGOs. The effectiveness of POCSO E-Box and implication of the POCSO Act on the school environment, school-related guidelines of various State Commissions for Protection of Child Rights and challenges on the implementation of various board circulars like CBSE – POCSO and self-defence circulars were part of the talks and open discussion.</p>
          </div>
          <div>
            <img src={Convention1} alt=""  className="mt-2"/>
            <strong className="text-[#777777] mt-2 block min-[320px]:text-sm  md:text-base">Key Speakers (in alphabetical order)</strong>
            <ul className="list-disc quicksand ml-7 mt-5 min-[320px]:mt-3  md:mt-5">
                {
                    keyParticipants[1].map((key, idx)=>(
                        <li key={idx} className="mb-2 min-[320px]:text-xs  md:text-base">{key}</li>
                    ))
                }
            </ul>
            <p className="quicksand mt-4 min-[320px]:text-xs  md:text-base"><span className="font-semibold text-[#666666]">Outcome:</span> CACA Safety Workbooks are important life skills and value education books; however, a consensus has to be built at the grassroots level with the teachers before implementation in the school education system.</p>
          </div>

            </div>

            <div className="border-b-2 border-[#777777] pb-8 mb-8">
            <div>

          <h4 className="text-lg text-[#666666] min-[320px]:text-base  md:text-lg"><span className="font-semibold text-lg min-[320px]:text-base  md:text-lg">4. Consensus Building Discussions</span> – CBD, December 2016 onward</h4>
          <p className="quicksand mt-2 min-[320px]:text-xs  md:text-base">CBD is a continuous process. It is achieved through workshops (real and virtual). It is held with teachers and principals on the utility, challenges and implementation of Project CACA. Till date, more than 1,000 schools have participated in it. The discussions are held at various host institutions where other schools are also invited. Some of the CBD hosts are (in alphabetical order):</p>
          </div>
          <div>
            <img src={CBD2} alt=""  className="mt-2"/>
            <strong className="text-[#777777] mt-2 block min-[320px]:text-sm  md:text-base">Key Speakers (in alphabetical order)</strong>
            <ul className="list-disc quicksand ml-7 mt-5 min-[320px]:mt-3 md:mt-5">
                {
                    keyParticipants[2].map((key, idx)=>(
                        <li key={idx} className="mb-2 min-[320px]:text-xs  md:text-base">{key}</li>
                    ))
                }
            </ul>
            <p className="quicksand mt-4 min-[320px]:text-xs  md:text-base"><span className="font-semibold text-[#666666]">Outcome:</span> The first consensus led us to the pilot programme, and since then, the continuum helps in advocacy and shaping of the project.</p>
          </div>

            </div>

            <div className="border-b-2 border-[#777777] pb-8 mb-8">
           

          <h4 className="text-lg text-[#666666] font-semibold min-[320px]:text-base  md:text-lg">5. Pilot programme, 2017-18</h4>
          <p className="quicksand mt-2 min-[320px]:text-xs  md:text-base">A pilot programme was run in 15 districts, across 20 schools covering 21,000+ students, their parents, teachers and non-teaching staff.</p>
          
         
            <p className="quicksand mt-4 min-[320px]:text-xs  md:text-base"><span className="font-semibold text-[#666666]">Outcome:</span> The pilot reconfirmed the opinion poll result that CACA Safety Workbooks are effective tools for all the stakeholders involved and are the way forward.</p>
          </div>
          <div className=" pb-8 mb-8">
          <h4 className="font-semibold text-lg mt-10 text-[#666666] min-[320px]:text-base  md:text-lg">7. Peer reviews (Dec 2020 onward)</h4>
          <p className="quicksand mt-2 min-[320px]:text-xs  md:text-base">Another democratic process of ‘peer review’ to improve and strengthen the credibility of the project was introduced in Dec 2020.</p>
         
          </div>

            
          
        </div>
      </div>
      
    </div>
  );
}

export default ProjectChronology;
