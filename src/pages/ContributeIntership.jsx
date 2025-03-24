import React, { useState } from "react";
import contributeBanner from "../assets/contributeBanner.jpg";


function ContributeIntership() {
  const [currentInterns, setCurrentInterns] = useState([
    {
      name: "Ms. Tanvi Markan",
      role: "Psychology Intern",
      education: "M.Sc. Child and Adolescent Mental Health",
      university: "University College London (UCL)",
      location: "Location: London, United Kingdom",
      image: "http://projectcaca.org/wp-content/uploads/2025/02/Tanvi.jpg",
    },
    {
      name: "Ms. Vinita Kumari",
      role: "Child Protection Policy Intern",
      education: "B.B.A. LLB & M.A. Criminology",
      university: "National Forensic Sciences University",
      location: "Location: Delhi",
      image: "http://projectcaca.org/wp-content/uploads/2025/02/Vinita.jpg",
    },
    {
      name: "Ms. Divya Gautam",
      role: "Lesson Plan Development Intern",
      education: "M.A. in Education",
      university: "Dr. B.R. Ambedkar University, Delhi",
      location: "Location: Faridabad",
      image: "http://projectcaca.org/wp-content/uploads/2024/11/Divya.jpg",
    },
    {
      name: "Mr. Abdulla Sarfraz K",
      role: "Social Media Intern",
      education: "M.A. Development Studies",
      university: "Indian Institute of Technology, Madras",
      location: "Location: Kerala",
      image: "http://projectcaca.org/wp-content/uploads/2024/01/Mr.-Abdulla-Sarfraz-K..jpg",
    },
  ])

  const [pastInterns, setPastInterns] = useState([
    {
      name: "Mr. Shashwat Singh",
      role: "Child Protection Policy Intern",
      duration: "December 2024",
      education: "B.A. LLB (Hons)",
      university: "OP Jindal Global University",
    },
    {
      name: "Ms. Ira Singhal",
      role: "Child Protection Policy Intern",
      duration: "December 2024",
      education: "B.A. LLB (Hons)",
      university: "OP Jindal Global University",
    },
    {
      name: "Ms. Krishna B. Nair",
      role: "Creative Content Writing Intern",
      duration: "April 2024 to October 2024 & November 2024 to January 2025",
      education: "B.A. Psychology and English",
      university: "Christ University, Bangalore",
    },
    {
      name: "Ms. Aishwarya",
      role: "Assessment Intern",
      duration: "November 2024 to December 2024",
      education: "M.A. Criminology",
      university: "National Forensic Sciences University, Delhi",
    },
    {
      name: "Ms. Anashwara Uday Menon",
      role: "Psychology Intern",
      duration: "September 2023 to November 2023 & April 2024 to September 2024",
      education: "B.A. Psychology and Philosophy",
      university: "Jesus and Mary College, Delhi University",
    },
    {
      name: "Ms. Shaoni Mallick",
      role: "Psychology Intern",
      duration: "October 2023 to July 2024",
      education: "BA Hons Psychology",
      university: "Bethune College, University of Calcutta",
    },
    {
      name: "Ms. Deepalika Deb",
      role: "Research Intern",
      duration: "May 2024 & June 2024",
      education: "MA Political Science",
      university: "St. Xavier’s College (Autonomous), Kolkata",
    },
    {
      name: "Ms. Snehal Asthana",
      role: "Research Intern",
      duration: "June 2024 & August 2024 & September 2024",
      education: "MA Criminology",
      university: "National Forensic Sciences University, Delhi",
    },
    {
      name: "Ms. Tanvi Saxena",
      role: "Social Media Intern",
      duration: "May 2024",
      education: "MA Criminology",
      university: "National Forensic Sciences University, Delhi",
    },
    {
      name: "Ms. Aishwarya",
      role: "Research Intern",
      duration: "April 2024",
      education: "MA Criminology",
      university: "National Forensic Sciences University, Delhi",
    },
    {
      name: "Mr. Mayank Agarwal",
      role: "Legal Intern",
      duration: "January 2024 to March 2024",
      education: "MA Criminology",
      university: "NICFS",
    },
    {
      name: "Ms. Prerna Wadhawan",
      role: "Psychology Intern",
      duration: "January 2024 & February 2024",
      education: "MA Psychology",
      university: "Amity University",
    },
    {
      name: "Mr. Abdulla Sarfaraz K.",
      role: "Psychology Intern",
      duration: "January 2024 & February 2024",
      education: "BA Hons Psychology",
      university: "Jamia Millia Islamia",
    },
    {
      name: "Ms. Purnima Manektalia",
      role: "Psychology Intern",
      duration: "January 2024",
      education: "BA Hons Psychology",
      university: "Jagannath Institute of Management Studies",
    },
    {
      name: "Ms. Renuka Simoes",
      role: "Psychology Intern",
      duration: "October 2023",
      education: "BA Psychology",
      university: "St. Xaviers College, Mapusa",
    },
    {
      name: "Ms. Priyal Singh",
      role: "Psychology Intern",
      duration: "September 2023",
      education: "BA Psychology & HRM",
      university: "Zakir Husain College, Delhi University",
    },
    {
      name: "Ms. Eshita Mahajan",
      role: "Psychology Intern",
      duration: "September 2023",
      education: "BA Hons Psychology",
      university: "Kamala Nehru College, Delhi University",
    },
    {
      name: "Ms. Svadha",
      role: "Content Assessment",
      duration: "2019-20",
      education: "Master’s in Social Work",
      university: "Delhi School of Social Work, Delhi University",
    },
    {
      name: "Ms. Mansi Sharma",
      role: "Content Coordination",
      duration: "2018-19",
      education: "BA (Hons) – Psychology",
      university: "Delhi University",
    },
    {
      name: "Ms. Muskam Dhaman",
      role: "Content Coordination",
      duration: "2018-19",
      education: "BA (Hons) – Psychology",
      university: "Delhi University",
    },
    {
      name: "Ms. Nishtha Grover",
      role: "Testing – Project Umbrella (IIT Kanpur) Teaching Aid",
      duration: "2017-18",
      education: "Masters in Psychology",
      university: "Delhi University",
    },
    {
      name: "Ms. Nalini Menon",
      role: "Content Coordination",
      duration: "2017-18",
      education: "PG in Gender Studies",
      university: "Ambedkar University, Delhi",
    },
    {
      name: "Ms. Drishti Agarwal",
      role: "Content Coordination",
      duration: "2016-17",
      education: "Master’s in Social Work",
      university: "Delhi School of Social Work",
    },
    {
      name: "Ms. Kritii Tikku",
      role: "Content Coordination",
      duration: "2016-17",
      education: "Master’s in Social Work",
      university: "Delhi School of Social Work",
    },
    {
      name: "Jasmeen Sood",
      role: "Content Coordination",
      duration: "2016-17",
      education: "Master’s in Psychology",
      university: "Jamia Millia Islamia University",
    },
  ])
  return (
    <div>
      <div>
        <img
          src={contributeBanner}
          alt="Contribute/Intership"
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
            When children feel ignored, or even just a bit out of favour with
            us, it rattles them, and fear shows up in their limit-pushing
            behaviour. Reassuring hugs, kisses and ‘I love you’ will certainly
            help to mend these bridges, but the messages of love that matter the
            most are heard through our patience, empathy, acceptance, respectful
            leadership, and the genuine interest we take in knowing our child.
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
            Contribute/Internship
          </h2>
          <p className="text-base mt-1 text-center">
            Contribute as an Intern/Freelancer/Regular Employee
          </p>

          <div>
            <div>
              <h3 className="text-4xl mt-7">Intern/Volunteer</h3>
              <p className="quicksand mt-1">
                For the intern/volunteer, we are committed to providing a
                fulfilling and enriching experience that aligns with your
                personal and professional goals. We offer flexible and
                adjustable timings/tenures to accommodate the needs of
                college/university students and volunteers pursuing their
                interests.
              </p>
              <p className="quicksand mt-2">
                Our internship program ranges from 1 to 6 months, depending on
                the nature of the work. Interns/volunteers may work from our
                office, from home, or travel to different locations for
                fieldwork, depending on the requirements of the project.
              </p>
            </div>
            <div>
              <h3 className="text-xl mt-7">ELIGIBILITY</h3>
              <p className="quicksand mt-1">
                To be eligible for our program, interns/volunteers must be at
                least a graduate or currently enrolled in a college/university.
                If applying for an internship as a requirement from their
                college/university, they must provide a signed request letter.
              </p>
            </div>
            <div>
              <h3 className="text-xl mt-7">INTERNSHIP COSTS</h3>
              <p className="quicksand mt-1">
                We understand the financial burden that an internship can pose,
                and therefore, we offer honorariums and reimbursements for
                agreed-upon expenses like travel, etc. incurred while working
                with us.
              </p>
            </div>
            <div>

          <p className="quicksand mt-8 mb-2">
            To apply for our program, please follow the Google link provided
            below. We look forward to welcoming you to our team and supporting
            you in achieving your goals. We’ll reach out to you, when your
            profile is shortlisted. For any queries, email us at
          </p>
          <a href="" className="text-[#666666] font-semibold">contentcoordinator@projectcaca.org</a>
          <div className="mt-1"><span className="font-bold text-lg text-[#666666]">Apply here:</span><a href="https://rb.gy/l4jz0" className="font-semibold text-lg ml-2 text-blue-800">Click</a></div>
          </div>
          </div>
          <div className="my-10">
            <h2 className="font-bold text-2xl">Current Interns/Volunteers</h2>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {
                currentInterns.map((current, index)=>{
                  return (
                    <div key={index} className="card bg-[#faf3f3e8] rounded-xl overflow-hidden pb-2 hover:shadow-lg hover:scale-105 duration-500">
                <img src={current.image} alt={current.name} className="w-full h-[200px] object-cover rounded-b-xl mx-auto" />
                <div className="px-3">

                <h3 className="text-lg font-semibold leading-[0.5] mt-4">{current.name}</h3>
                <span className="text-sm">{current.role}</span>
                <p className="text-sm mt-2">{current.education}</p>
                <p className="text-sm">{current.university}</p>
                <p  className="text-sm">{current.location}</p>
                </div>

              </div>
                  )
                })
              }
              
            </div>
          </div>

          <div>
          <h2 className="font-bold text-2xl">Past Interns / Volunteers</h2>

              <ul className="list-disc ml-10 mt-3">
                {
                  pastInterns.map((intern, index)=>{
                    return(
                      <li className="mb-3 quicksand">{intern.name} - {intern.role} - {intern.duration} - {intern.education} - {intern.university}</li>
                    )
                  })
                }
              </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContributeIntership;
