import React, { useState } from "react";
import AdvisorsBanner from "../../assets/AdvisorsBanner.jpg";

function Advisors() {
  const [advisorsData, setadvisorsData] = useState([
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/07/Sh.-Puran-Chand-e1504509861938.png",
      name: "Late Shri. Puran Chand",
      profession:
        "Mentor (Fr. General Secretary, Council of Boards of School Education in India – COBSE):",
      disc: "Puran Chand started his career as a Physics teacher in schools in 1966. Was soon promoted to the cadre of assistant education officer in the Municipal Corporation of Delhi. He joined Kendriya Vidyalaya Sangathan (KVS) as an assistant commissioner. He retired as the joint commissioner (Academics) of Kendriya Vidyalaya Sangathan (KVS) in 2002. His last responsibility was  general secretary – COBSE – Council of Board Education, India. He was a friend, a guide and a guru to Project CACA and many more like us.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2022/02/Stuti-Kacker.jpg",
      name: "Smt. Stuti Narain Kacker",
      profession: "",
      disc: "Smt. Stuti Narain Kacker, an IAS officer (1978 batch), retired in September 2018 as Chairperson of the National Commission for the Protection of Child Rights – NCPCR. With a career spanning almost forty years, she has worked extensively in social justice and empowerment, information and broadcasting, and industrial development, both in the State and Central Government. She is well known for her contribution to the social sectors, including protecting child rights and empowering persons with disabilities. As Secretary to the Government of India, she established the Department of Empowerment of Persons with Disabilities. She served as Joint and Additional Secretary in the Ministry of Information & Broadcasting and the Director of the Indian Institute of Mass Communication (IIMC). She was the key driver in formulating and implementing several policy measures to strengthen the print media industry and IIMC. She holds a Master’s degree in Botany from the University of Allahabad. She is also an M. Phil (Social Sciences) with distinction from the Indian Institute of Public Administration, New Delhi.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/06/Dr.-Kiran-Aggarwal-e1504509140632.jpg",
      name: "Dr. Kiran Aggarwal",
      profession:
        "(Co-Chair, Indian Council of Medical Research (ICMR) – Committee on Children Under Difficult Circumstances | Fr. President, Indian Academy of Paediatrics (IAP), Delhi – EB Member CIAP | Ex-member Child Welfare Committee, Delhi.)",
      disc: "Besides being in a noble profession, her perseverance, desire and dedication to work in the field of child rights and child health have made her a valuable and inherent part of many organisations. She has a rich experience covering many facets of child health and child rights. Some of her past and present associations are: Member of International Society for the Prevention of Child Abuse and Neglect (ISPCAN) since 2002; Co-Chair ICMR (Indian Council of Medical Research) Committee on “call for Proposals on Social; indicators of Children Under difficult circumstances”; Member Editorial team “Indian Pediatrics “ official journal of India academy of Pediatrics; Core research Committee member Child abuse study 2007 Govt. of India (MWCD); Fr. President, India Academy of Pediatrics (IAP) Delhi / EB Member CIAP 2015; Sr. Consultant / Unit Head, Dept. of Pediatrics Hindu Rao Medical College Delhi; Member Child Welfare Committee Delhi (2005-2007); Nodal Officer Child Rights, Rescue /Rehabilitation of Child Labour North District NCT of Delhi; National Convener IAP Child Rights Protection Program 2007 in collaboration with RCPCH UK & UNICEF (IAP President Action Plan); North Zone Coordinator IAP Poor Scholastic Performance Program 2011.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2022/08/Rajesh-Sagar.png",
      name: "Dr. Rajesh Sagar",
      profession: "(MD, FAMS, FIMSA, CCST (UK), FRCP (Edin.)",
      disc: "Currently a Professor in the Department of Psychiatry at All India Institute of Medical Sciences (AIIMS). He is MD from NIMHANS, Bangalore. he is an Honorary Professor in the Department of Psychiatry, University of Melbourne, Australia & University of Leicester, UK. Chair, Mental health group of Global Burden of Disease-India by IHME, USA. In addition, he is a member, of the Central Mental Health Authority (CMHA), Govt. of India, however, served as secretary of the same (2005-2018) and Hon. Advisor for mental health in DGHS/ MoHFW. He has been an Expert/advisory member for several organizations incl expert member of various National Task forces by ICMR and of Ministry of Health & Family Welfare. He has published articles more than 700 research papers, chapters, books. He has received several awards and honors including ICMR Award, Outstanding Researcher award as country’s Topmost researcher in psychology/mental health based on research output in SCOPUS. He has an active interest in activities and research related to child abuse",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/07/Dr.-Amit-Sen-e1504511030493.png",
      name: "Dr. Amit Sen",
      profession:
        "(Director, Children First, Safdarjung; Senior Child & Adolescent Psychiatrist. MD, MRCPsych, CCST in Child & Adolescent Psychiatry):",
      disc: "Dr. Amit Sen has been practicing child psychiatry for 15 years. After finishing medicine from AFMC Pune, he went to NIMHANS Bangalore for an MD in Psychiatry. Completed child and adolescent psychiatry from Newcastle UK. Through the myriads of magical and fulfilling experiences, Dr. Sen feels that he has developed empathy over the years and can connect with children and their families. In doing so, he hopes to make a difference, however little, in their lives.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/07/Dr.-Dinesh-Kumar-e1504511082467.png",
      name: "Dr. Dinesh Kumar",
      profession:
        "(Professor – Dean (Research), National Council of Educational Research and Training – NCERT):",
      disc: "Dr. Dinesh Kumar is Former Head – Publication (NCERT). Previously, he was the Professor of Geology (NCERT) and was involved in the area of genetics research, science education and biology education. He worked with Kendriya Vidyalaya Sangathan (KVS) for 4 years and has around 10 years of teaching experience in schools and colleges.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2021/05/Yashpal-Singh-Kalsi.jpg",
      name: "Yashpal Singh Kalsi",
      profession: "",
      disc: "Yashpal Singh Kalsi is one of the senior most self-defense trainers in India with more than 20 years of experience of conducting hundreds of workshops. An internationally attested Karate and Mixed Martial Arts trainer, he is 6th Dan black belt (one of the highest distinctions in the martial arts world) in Karate from World Karate Federation. He has provided high-level training to India elite force – the Black Cat Commandos has trained Haryana Police Rapid Action Force, continuously works with and trains the Haryana Police. He has trained children and students not only from India, but Greece, U.S.A, Chile, Malaysia, South Africa, Afghanistan, Pakistan, Nepal the U.K., and many other places. A number of his students continue to represent India in national tournaments and official world championships.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/06/Ms.-Kalaanjan-Datta-e1504509258397.jpg",
      name: "Kala Anjan Dutta",
      profession: "",
      disc: "She is Masters in Library & Information Science and Business Economics from Delhi University. Trained in the information services in the United States and Austria under the sponsorship of Department of State, U.S. Government. She has a professional experience of over 35 years, has contributed extensively in education through the library and information science. She is an experienced former Library Director of American Library with a demonstrated history of working in the information service. Skilled in library administration, managing lifelong learning, digital library services and public speaking. She is currently working as Principal, School of Library Science, Delhi Library Association, New Delhi.",
    },
    {
      img: "https://projectcaca.org/wp-content/uploads/2017/07/Dr.-Geeta-Chopra-e1504509324333-150x150.png",
      name: "Dr. Geeta Chopra",
      profession:
        "(Professor in Delhi University, Activist and Author in the field of Child Rights and Childhood Disability) :",
      disc: "A keen researcher and an academician at the Institute of Home Economics, University of Delhi, teaching Child Development for more than 28 years now and guiding Ph.D. students regularly. Major interest areas are Childhood Disabilities, ECCE, Child Survival, Child Rights and Inclusive Education. Received funding for research from national and international agencies for undertaking researchers in the area of disability, child survival, and maternal health. She has authored a book, “Child Rights in India- Challenges and Social Action” published by Springer India. Co-authored a book ‘Child Development: A Practical Manual’. She is the founder Secretary of NGO Manzil, working for preschool children, youth, and women from slums of South Delhi. Work closely with other NGOs offering services to marginalized children.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/07/Smt.-Tanuja-Sharma-e1504511150266.png",
      name: "Tanuja Sharma",
      profession:
        "(Counselling Psychologist/School counsellor, The Indian School Muscat, Oman) :",
      disc: "With 18 years of enriched experience in the field of education and training and deep interest in child welfare and environmental education & related activities, she is actively involved in training and development; strategic planning & analysis and workshops/seminars/ orientation programs for students, teachers and parents; and promotes a conducive, safe and constructive environment, whereby abilities and skills of children can effectively & efficiently be developed for their holistic wellbeing. She has been impaneled by some of the reputed educational & management organizations and is providing services in various capacities like Consultant, Counselling Psychologist, Adviser, Panelist and Trainer to NGOs, educational institutes, training and management organizations",
    },
    {
      img: "https://projectcaca.org/wp-content/uploads/2017/06/final-1-1.jpg",
      name: "Poonam Gautam",
      profession:
        "(Special educator and school counsellor (Rtd.), Loreto Convent School, Delhi)",
      disc: "Poonam Gautam retired from Loreto Convent as a counselor. She formally at Loreto Convent from August 1992 to March 2016. She also taught psychology to class 12 . Here, she also played a pivotal role in setting up the NIOS and Learning Centre for children with learning disabilities. She has also been involved with several learning programmes such as conducting the workshop on Identification of children with learning disabilities in the classroom. Her life’s philosophy is ‘No child is a failure and every child can be an achiever.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/07/Smt.-Hemlata-Suri-e1504511251484.png",
      name: "Hemlata Suri",
      profession:
        "(Counselling Psychologist and a Special Educator; Counsellor, Carmel Convent School, Chanakyapuri, Delhi)",
      disc: "She is a RCI (Rehabilitation Council of India) registered practitioner. She has been associated with CBSE as a Counsellor for last few years. Her forte has been to work within an eclectic frame for the treatment of mental wellbeing and other related problems in children, adolescents, and adults. She has a particular interest in Children with special needs, Behavioural issues with pre-teenage children, Adolescents, issues of various kinds of abuse in children and the impact of various parenting styles on children. With an experience of over seven years in the field of mental health, she has been working extensively with schools as well as the Economically Weaker Sections of the society.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/07/Dr.-Jayanti-Banerjee-e1504511212738.png",
      name: "Dr. Jayanti Banerjee",
      profession:
        "(Faculty Psychology, The Mother’s International School, Delhi)",
      disc: "Dr Jayanti Banerjee counsellor, psychologist and life skill trainer, has been associated with CBSE and National Institute of Open Schooling for the past 15 years. She is currently working with the Mother’s International School as a faculty Psychology, passionate about issues related to children and adolescents. Have conducted workshops and presented research papers at various National and International forums.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/06/Michelle-Mendonca-Picture-e1506658361206.png",
      name: "Michelle Mendonca",
      profession: "",
      disc: "Michelle has an Ll.B. from Mumbai University and a Masters in Organizational Leadership from Eastern University, Pennsylvania. She serves as Project Director for Counsel to Secure Justice, an agency that works with survivors of child sexual abuse. A High-Court appointed trainer, Michelle trains at Judicial Academies in 4 States and has also trained at the National Judicial Academy. She sensitizes judiciary and law enforcement on anti-trafficking and child sex abuse. Michelle also teaches Advocacy, Human Rights and Public Policy at Eastern University. Leading journals have published her articles on anti-trafficking and child sex abuse.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/06/Rupa-Chandra-e1504511354488.jpg",
      name: "Rupa Chandra",
      profession: "(Advocate, Jharkhand High Court)",
      disc: "Rupa Chandra (BA, LLB) is an active member of Jharkhand High Court Bar Council. She has been practicing since 2013. Besides, having expertise in Public Interest litigation, Criminal, Civil, and Taxation related issues she is actively associated with child rights and gender equality initiatives.“One can spend a lifetime trying to forget a few moments of one’s childhood.” She is a strong supporter of POCSO act 2012 and helps SAI from time to time in advocating POCSO act to teachers and parents in schools through workshops.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2019/01/ashok.jpg",
      name: "Ashok Thakur",
      profession: "",
      disc: "Ashok is founder of Muni International School. An alumnus of Delhi University and ex-serviceman, Ashok established the budget private school to pursue his dream. He is passionate about the education sector, and hence left his cushy business and started a school through modest means. Muni International School, a budget private school in west Delhi, is demonstrating a system by which every child reaches their full potential by taking on shared responsibility for learning, school improvement and community action. Through the Eklavya System, children practice their learning by teaching each other, thereby building an ‘everyone can’ sensibility towards themselves and their worlds. Children at Muni International learn not just from the teacher, but also are equipped to seek knowledge from usual and unusual spaces: themselves, their peers, their juniors, and the world outside.",
    },
    {
      img: "http://projectcaca.org/wp-content/uploads/2017/06/Screen-Shot-2019-03-16-at-5.27.16-pm.png",
      name: "Harsh Juneja",
      profession: "(Fr. Vice President, Tata Teleservices Limited)",
      disc: "A Seasoned and self made Professional with over 34 years of Total Experience in various Business Environments, his major part of the career has been in Planning & Business Operations of Manufacturing, Automobiles, Office-Automation and Telecommunication Industries. He is an Associate Member at ASCI (Administrative Staff College of India) Hyderabad, a visiting faculty – IMI, LBSIM NIS, Delhi School of Business, Rawal Institutions, GLA University Executive Member- ‘Sangam Kala Group’ a national level social organization. His is an active Participant in the Conferences Organized by CII, NASSCOM, Voice & Data, ASSOCHAM, amongst others. Worked with Escorts Ltd for 10 years, Modi Xerox Ltd for 11 years and for the past 12+ years working as Vice President & National Head-Strategic Alliances (Enterprise Business Services) at Tata Teleservices Limited.",
    },
    {
      img: "https://projectcaca.org/wp-content/uploads/2017/06/RKK-Photo-2-1.jpg",
      name: "Rajesh Kumar Kathuria",
      profession: "(Chartered Accountant)",
      disc: "Rajesh is a full time practicing fellow chartered accountant. He is actively involved in various social causes and is associated with NGOs like SAF, Social Axiom Foundation that works in the field of prevention of child sexual abuse and AADI – Action for Ability Development and Inclusion which has a vision of “a world in which people with disability are an integral part of society, participating in the community and living life to the fullest, with equitable access to opportunity and services. He did his graduation, B.Com (Hons), from University of Delhi in the year 1987 and chartered accountancy in the year 1988 from ICAI, Delhi. Rajesh has extensive professional experience in the areas of Finance, Auditing, Direct and Indirect Taxation, Corporate Advisory Services and System Development for the past twenty nine years.",
    },
  ]);
  return (
    <div className="overflow-hidden">
      <div>
        <img src={AdvisorsBanner} alt="" />
      </div>

      <div
        className="flex gap-16 animate-scroll  justify-center items-center"
        style={{
          animation: "scroll 200s linear infinite",
          width: "max-content",
        }}
      >
        <h2 className="text-center text-sm custom-font-shoulder">
          Every child in the world has one thing in common – their rights. | The
          right to be protected from violence (article 19 and 34). | The right
          to be protected from armed conflict (articles 38 and 39). | The right
          to be protected from exploitation (articles 19, 32, 34, 36 and 39). |
          The right to be protected from any hazardous employment till the age
          of 14 years (article 24).
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

      <div className="px-20 mt-10 min-[320px]:px-4 xl:px-20">
        <h3 className="text-3xl text-center font-semibold text-gray-600 min-[320px]:text-xl md:text-3xl">
          About Us - Advisors
        </h3>

        <div className="mt-6">
          {advisorsData.map((advisors, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center gap-5 px-3 rounded-xl py-2 mb-8 bg-gray-100 hover:bg-gray-200 duration-300 min-[320px]:block md:flex"
              >
                <div className="w-[350px] h-[150px] min-[320px]:w-[250px] min-[320px]:mx-auto md:w-[550px] lg:w-[350px]">
                  <img
                    src={advisors.img}
                    alt={advisors.name}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>

                <div className="min-[320px]:mt-2 md:mt-0">
                  <h3 className="text-xl font-semibold min-[320px]:text-base lg:text-lg">{advisors.name}</h3>
                  <p className="my-2 text-base outfit min-[320px]:text-sm lg:text-base">{advisors.profession}</p>
                  <p className="text-sm quicksand min-[320px]:text-xs xl:text-sm">
                    {advisors.disc.length > 400
                      ? advisors.disc.slice(0, 400) + "..."
                      : advisors.disc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Advisors;
