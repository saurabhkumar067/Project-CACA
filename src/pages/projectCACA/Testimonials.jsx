import React, { useState } from "react";
import TestimonialsBanner from "../../assets/TestomonialsBanner.jpg";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    "District Legal Services Authority, Varanasi",
    "City Civil Court Legal Services Authority, Hyderabad – 07 November 2023",
    "District Legal Services Authority Combined Court Building, Coimbatore – 04 November 2023",
    "Jharkhand State Commission For Protection Of Child Rights (JSCPCR) – 12 October 2023",
    "District Legal Services Authority, Vellore – 11 October 2023",
    "District Legal Services Authority, Tiruvallur – 06 October 2023",
    "District Legal Services Authority, Chengalpattu & Kancheepuram – 06 October 2023",
    "Chhatisgarh State Legal Services Authority Old High Court Building, Bilaspur – 06 October 2023",
    "Tamil Nadu State Legal Services Authority – 03 October 2023",
    "District Legal Services Authority, Saharanpur – 09 September 2023",
    "District Legal Services Authority, Purba Bardhaman – 07 September 2023",
    "District Legal Services Authority, Darjeeling – 01 September 2023",
    "District Legal Services Authority, District & Session Court, Indore – September 2023",
    "District Legal Services Authority, Hooghly – 24 August 2023",
    "District Legal Services Authority, Pune – 23 August 2023",
    "District Legal Services Authority, North 24 Parganas, West Bengal – 23 August 2023",
    "District Legal Services Authority, Mallapuram – 23 August 2023",
    "District Legal Services Authority, Kota – 23 August 2023",
    "Bihar Commission For Protection Of Child Rights – 18 August 2023",
    "District Legal Services Authority, Ahmedabad (Rural) – 18 August 2023",
    "District Legal Services Authority, Gandhinagar – 17 August 2023",
    "District Legal Services Authority, Kozhikode – 16 August 2023",
    "District Legal Services Authority, Ernakulam – 16 August 2023",
    "West Bengal State Legal Services Authority – 14 August 2023",
    "District Legal Services Authority, Rajkot – 9 August 2023",
    "District Legal Services Authority, Gorakhpur – 8 August 2023",
    "District Legal Services Authority, Thiruvananthapuram – 07 August 2023",
    "District Legal Services Authority, Vadodara – 03 August 2023",
    "Kerala State Legal Services Authority – 31 July 2023",
    "District Legal Services Authority, Prayagraj – 27 July 2023",
    "District Legal Services Authority, Jalgaon – 20 December 2022",
    "Uttar Pradesh State Legal Services Authority – 27 September 2022",
    "District Legal Services Authority, Surat – 26 September 2022",
    "District Legal Services Authority, Mumbai – 15 September 2022",
    "District Legal Services Authority, Machilipatnam – 14 September 2022",
    "District Legal Services Authority, Mumbai Suburban – 14 September 2022",
    "West Bengal State Legal Services Authority – 7 September 2022",
    "District Legal Services Authority, Visakhapatnam – 06 September 2022",
    "The District Inspector Of School (DIOS) – 25 August 2022",
    "District Legal Services Authority, Faridabad – 10 August 2022",
    "Directorate Of School Education, Kashmir – 25 June 2022",
    "Office Of Chief Education Officer, Srinagar – 25 June 2022",
    "District Legal Services Authority, Srinagar – 23 June 2022",
    "Telangana State Legal Services Authority – 21 January 2022",
    "Proceedings Of The District Educational Officer & Ex-Officio District Project Officer, Samagra Shiksha, Hyderabad – 18 January 2022",
    "District Education Office, Bhopal, Madhya Pradesh – 07 December 2021",
    "M.P. Commission For Protection Of Child Rights – 01 December 2021",
    "District Legal Services Authority, Chennai – 29 November 2021",
    "District Legal Services Authority, Solapur – 10 December 2020",
    "District Legal Services Authority, Nagpur – December 2020",
    "Maharashtra State Legal Services Authority – 25 November 2020",
    "Punjab State Legal Services Authority – 09 November 2020",
    "Directorate Of School Education, Chandigarh – 05 December 2019",
    "District Legal Services Authority, Madurai – 02 November 2019",
    "Office Of Additional District Magistrate, West Delhi – 16 November 2019",
    "Meghalaya State Commission For Protection Of Child Rights – 05 September 2019",
    "Army Public School – Ahmednagar, Maharashtra – 17 June 2019",
    "Deesksha Vidya Mandir – Anaimalai, Tamil Nadu – 14 June 2019",
    "Bal Bharati Public School – Navi Mumbai, Maharashtra – 13 June 2019",
    "District Legal Services Authority, Chikmagalur – 31 January 2019",
    "Karnataka State Legal Services Authority (Support letter) – December 2018",
    "Gujarat State Legal Services Authority – 23 October 2018",
    "Meghalaya State Legal Services Authority – 20 September 2018",
    "East Delhi District Legal Service Authority – 19 March 2018",
    "District Legal Services Authority, Ahmednagar – 19 March 2018",
    "District Legal Services Authority, New Delhi – 22 March 2017",
  ]);
  return (
    <div className="overflow-hidden">
      <div>
        <img src={TestimonialsBanner} alt="Project CACA" />
      </div>

      <div
        className="flex gap-16 animate-scroll  justify-center items-center"
        style={{
          animation: "scroll 200s linear infinite",
          width: "max-content",
        }}
      >
        <h2 className="text-center text-sm custom-font-shoulder">
          Child Rights: Every child has a right to rest, relax, play, and
          participate in cultural and creative activities. It is an inherent
          part of their growing up and a must for their overall development. |
          Co-curricular activities are an inherent part of a school’s syllabus.
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

      <div className="px-20 mt-10 min-[320px]:px-4 sm:px-10 xl:px-20">
        <h2 className="text-4xl text-center font-semibold text-red-600 border-b pb-6 mb-10 min-[320px]:text-xl min-[320px]:pb-5 xl:text-4xl">
          Project CACA – Testimonials
        </h2>
        <div className="grid grid-cols-3 justify-center items-center gap-y-14 gap-x-10 min-[320px]:grid-cols-1 min-[320px]:gap-y-4 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          {
            testimonials.map((testimonial, index)=>{
              return (
                <a href="" key={index} className="text-sm font-semibold text-red-600 hover:underline  hover:text-red-500 min-[320px]:text-xs lg:text-sm">{testimonial}</a>
              )
            })
          }
        
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
