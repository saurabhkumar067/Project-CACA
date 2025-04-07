import React from "react";
import ChildSexualImage from "../assets/Report-Child-Sexual-Abuse.png";
import ChildLabourImage from "../assets/report child labour.png";
import AdoptaChildImage from "../assets/Adopt a Child.png";
import KomalAwarenessImage from "../assets/Komal, an awareness film on CSA.jpg";
import InformAboutMissingImage from "../assets/Inform About MissingFound Children.png";
import ReportChildImage from "../assets/Report Child In Need-Care.png";
import ChildrenEmpweredImage from "../assets/Children Empowered.png";
import FamiliesSenitizedImage from "../assets/Families Sensitized.png";
import TeacherSupportImage from "../assets/Teacher-Support Staff Trained.png";
import SchoolEmpoweredImage from "../assets/School Empowered.png";
import WorkshopConductedImage from "../assets/Workshop Conducted.png";
import StatesUTDistrictsImage from "../assets/StatesUTDistricts Covered.png";

import HomePageBanner from "../components/HomePageBanner";

function Home() {
  const partnersImage = [
    "https://projectcaca.org/wp-content/uploads/2021/04/New-logo-CSJ.png",
    "https://projectcaca.org/wp-content/uploads/2021/04/New-logo-Fortis.png",
    "https://projectcaca.org/wp-content/uploads/2021/04/EDUSYNERGIEGY-LOGO-13.-1.png",
  ];
  const OutreactRcsaImage = [
    [
    {
      img: ChildSexualImage,
      title: "Report Child Sexual Abuse",
    },
    {
      img: ChildLabourImage,
      title: "Report Child Labour",
    },
    {
      img: AdoptaChildImage,
      title: "Adopt a Child",
    },
    {
      img:KomalAwarenessImage,
      title:"Komal, an awareness film on CSA"
    },
    {
      img:InformAboutMissingImage,
      title:"Inform About MissingFound Children"
    },
    {
      img:ReportChildImage,
      title:"Report Child In Need/Care"
    }
  ],
  [
    {
      img:ChildrenEmpweredImage,
      title:"Children Empowered",
      total:"15,00,000+"
    },
    {
      img:FamiliesSenitizedImage,
      title:"Families Sensitized",
      total:"14,00,000+",
    },
    {
      img:TeacherSupportImage,
      title:"Teacher/Support Staff Trained",
      total:"2,00,000+",
    },
    {
      img:SchoolEmpoweredImage,
      title:"School Empowered",
      total:"3,000+",
    },
    {
      img:WorkshopConductedImage,
      title:"Workshop Conducted",
      total:"7,000+",
    },
    {
      img:StatesUTDistrictsImage,
      title:"States/UT/Districts Covered",
      total:"27/5/400+",
    },
      ]
  ];
  const cacaSchoolImage = [
    "https://projectcaca.org/wp-content/uploads/2017/06/Bal-Bharati-Public-Schools.png",
    // "https://projectcaca.org/wp-content/uploads/2019/10/SSA.jpg",
    "https://projectcaca.org/wp-content/uploads/2017/06/Blue-Bird-School-Aligarh.jpg",
    "https://projectcaca.org/wp-content/uploads/2017/06/Montfort-Senior-Secondary-School.jpg",
    "https://projectcaca.org/wp-content/uploads/2017/06/Shah-International-School.jpeg",
    "https://projectcaca.org/wp-content/uploads/2017/06/Uttam-School-for-Girls-Gaziabad.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/09/DPS.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/09/Lala-Ji-Omega-Shool.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/09/Ryan-International.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/10/Akal-Academy.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/10/Army-Welfare-Education-Society.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/10/Assam-Rifles-Public-Schools.png",
    "https://projectcaca.org/wp-content/uploads/2019/10/Bhartiya-Vidyapeeth.png",
    "https://projectcaca.org/wp-content/uploads/2019/10/Calorx-Public-Schools.gif",
    "https://projectcaca.org/wp-content/uploads/2019/10/Campion-School.png",
    "https://projectcaca.org/wp-content/uploads/2019/10/Carpe-Diem-Int-School.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/10/Christ-Church-School.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/10/DY-Patil-School.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/10/Maeers-MIT-School.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/10/SBOI-Trust.jpg",
    "https://projectcaca.org/wp-content/uploads/2019/10/Air-force-educational-cultural-society.png",
  ]

  return (
    <div className="w-full h-full">
      <HomePageBanner/>
      <div className="h-full w-full py-12 px-20 md:px-8 md:py-8 xl:px-20 2xl:px-38 min-[320px]:py-4 min-[320px]:px-2 ">
        <h2 className="text-center font-bold tracking-wide text-lg custom-font-shoulder md:text-sm xl:text-lg min-[320px]:text-sm">
          Every child should know about his/her rights, National Child Helpline
          Number : <span className="text-[#9c6e6e]">1098</span> (Childline India
          Foundation) and POCSO E Box.
        </h2>
        <p className="my-5 capitalize text-center quicksand font-[500] md:text-xs md:my-3 xl:text-base xl:my-5 min-[320px]:text-xs min-[320px]:my-3">
          United Nations Convention on the Rights of the Child (UNCRC 1989) is a
          legally-binding international agreement setting out the civil,
          political, economic, social and cultural rights of every child,
          regardless of race, religion or abilities. India ratified the
          convention in 1992. The age of a child, as defined by the UNCRC, is
          any person below 18 years. The four core principles of child rights as
          per UNCRC are:
        </p>
        <ul className="list-decimal font-semibold grid grid-cols-2 justify-center items-center w-1/2 gap-y-2 mx-auto place-items-center md:w-[80%] xl:w-1/2 min-[320px]:w-full min-[320px]:text-xs min-[320px]:grid-cols-1 sm:grid-cols-2 xl:text-base">
          <li>Non-Discrimination</li>
          <li>Best Interest of the Child</li>
          <li>Survival and Development</li>
          <li>Participation/ Inclusion</li>
        </ul>
        <p className="mt-5 capitalize text-center quicksand font-[500] md:text-xs xl:text-base min-[320px]:text-xs">
          Children are also citizens. They, too, have rights like other
          citizens. They also have special rights called child rights. An
          empowered child changes everything! The National Policy for Children
          1974, Government of India, declares that the children are the ‘supreme
          asset of the nation’. Project CACA, i.e. Children Against Child Abuse,
          is a right based project. We, at Project CACA, believe that the
          empowerment of children can be the single most impactful step that can
          be taken to challenge and face the issue of child abuse.
        </p>
      </div>
      <div className="h-full mt-10 w-full py-12 px-36 bg-[#E8E8E8] md:px-10 md:py-10 xl:px-36 xl:py-12 2xl:px-44 min-[320px]:py-5 min-[320px]:px-4">
        <h3 className="text-4xl text-center ubuntu-light md:text-3xl xl:text-4xl min-[320px]:text-lg">
          Partners & Supporters
        </h3>
        <p className="mt-8 mb-16  quicksand font-[400] md:mt-6 md:mb-8 md:text-sm xl:text-base 2xl:text-lg min-[320px]:mt-4 min-[320px]:text-xs min-[320px]:mb-5 sm:text-sm">
          Project CACA is an institution (school) driven child rights based
          project for schools. NGO – Social Axiom Foundation, SAF (earlier
          called Social Axiom Insignia, SAI) is the parent organisation of the
          project. The project is developed and implemented in collaboration
          with various partners and supportive organisations like: Counsel to
          Secure Justice – CSJ | Edusynergies | Department of Mental Health and
          Behavioral Sciences, Fortis Health Care | Various State Commissions
          for Protection of Child Rights | Districts Legal Service Authorities |
          Child Welfare Committees.
        </p>
        <div className="flex justify-center gap-20 items-center min-[320px]:gap-5 xl:gap-20">
          {partnersImage.map((item, index) => {
            return <img key={index} src={item} alt="Partners & Supporters" className="md:w-[15%] min-[320px]:w-[25%]" />;
          })}
        </div>
      </div>

      <div className="h-full w-full py-12 px-36 md:px-10 xl:px-24 min-[320px]:px-4 min-[320px]:py-6 lg:py-12">
        <h3 className="text-4xl text-center ubuntu-light md:text-3xl xl:text-4xl min-[320px]:text-2xl">Helplines</h3>
        <div className="grid grid-cols-3 justify-between w-full items-center mt-2 gap-y-10 min-[320px]:grid-cols-1 min-[320px]:mt-5 sm:grid-cols-3 xl:mt-2">
          {OutreactRcsaImage[0].map((item, index) => {
            return (
              <div key={index} className=" h-full flex flex-col justify-between items-center cursor-pointer duration-300 hover:shadow-lg ">
                <img
                  
                  src={item.img}
                  alt={item.title}
                  className="w-1/2 m-auto object-center md:w-1/4 xl:w-1/2"
                />
                <h4 className="text-center text-lg font-[400] outfit text-[#5a4c4cd7] md:text-sm xl:text-lg sm:text-sm">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-12 px-36 bg-[#F5F5F5] md:px-8 xl:px-24 min-[320px]:px-4 min-[320px]:py-6 xl:py-12">
          <img src="https://projectcaca.org/wp-content/uploads/2021/06/New-logo-project-caca-Cop.png" alt="Project CACA" className="mx-auto md:w-1/9 min-[320px]:w-[20%]" />
          <h2 className="text-3xl text-center ubuntu-light my-2 text-[#755757] md:text-2xl min-[320px]:text-lg xl:text-3xl">Project CACA Outreach/Impact</h2>
          <div className="grid grid-cols-3 justify-between w-full items-center gap-y-10 min-[320px]:grid-cols-2 min-[320px]:gap-y-5 lg:grid-cols-3">
          {OutreactRcsaImage[1].map((item, index) => {
            return (
              <div key={index} className=" h-full flex flex-col justify-between items-center">
                <img
                 
                  src={item.img}
                  alt={item.title}
                  className="w-1/2 m-auto object-center md:w-1/3 xl:w-1/2"
                />
                <h4 className="text-center text-lg font-[400] outfit text-[#5a4c4cd7] md:text-sm xl:text-lg min-[320px]:text-xs">
                  {item.title}
                  <p>{item.total}</p>
                </h4>
              </div>
            );
          })}
        </div>

      </div>
    
    <div className="py-12 px-40 md:px-10 lg:px-24 xl:px-34 2xl:px-44 min-[320px]:px-4 min-[320px]:py-6 lg:py-12">
      <h3 className="text-center text-3xl text-[#463838] md:text-2xl xl:text-3xl 2xl:text-4xl min-[320px]:text-lg sm:text-xl">CACA Schools</h3>
      <p className="text-lg quicksand mt-4 mb-1 md:text-sm xl:text-lg 2xl:text-xl min-[320px]:text-sm">These are the schools across India that have implemented Project CACA as a safety programme under their school’s safety policy to keep children happy, healthy and safe. The project covers the entire spectrum of schools, i.e.</p>
      <ul className="quicksand md:text-sm xl:text-base 2xl:text-xl min-[320px]:text-xs sm:text-sm">
        <li><span className="font-semibold">Ownership Type:</span> Govt./Aided/Pvt.</li>
        <li><span className="font-semibold">Board Type:</span> CBSE/ CISCE/ State Boards/ Foreign Boards</li>
        <li><span className="font-semibold">Religious Minority Type:</span> Christian/Muslim/Sikh/Jain</li>
        <li><span className="font-semibold">Group Type:</span> PM Shri | Samagra Shiksha (Meghalaya Govt.) | Army Welfare Education Society Schools | Air Force Educational and Cultural Society Schools | Assam Rifles  Welfare Education Society Schools | Ryan Group of Institutions | Akal Academy  Group of Institutions | SBIOA Educational Trust Schools  | Calorex Schools, etc.</li>
      </ul>

      <div className="relative w-full overflow-hidden mt-10">
      <div 
        className="flex gap-16 h-[25vh] animate-scroll  justify-center items-center md:h-[20vh] xl:h-[25vh]" 
        style={{
          animation: "scroll 200s linear infinite",
          width: "max-content"
        }}
      >
        {cacaSchoolImage.concat(cacaSchoolImage).map((item, index) => (
          <img
            key={index}
            src={item}
            alt="CACA Schools"
            className="object-cover w-[10%] xl:w-[10%] md:w-[2%] md:h-[50%] h-[100%] min-[320px]:h-[50%]"
          />
        ))}
      </div>

      {/* Keyframes for scroll animation */}
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
    </div>
    </div>

    </div>
  );
}

export default Home;
