import React from "react";
import BibliographyBanner from "../../assets/BibliographyBanner.jpg";

function Bibliography() {
          
      
  return (
    <div>
      <div>
        <img src={BibliographyBanner} alt="Bibliography" className="w-full h-full" />
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
          We do not choose our bodies. Nature has made our bodies. | Being born as a boy or a girl or another is not a choice. |  Gender is a spectrum rather than a binary. We are born that way. | It is natural and okay to be different from each other. | We are the boss of our body.
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

      <div className="px-40 min-[320px]:px-4 md:px-10 xl:px-40">
        <div>
          <h2 className="text-3xl text-[#666666] text-center mt-7 font-semibold min-[320px]:text-xl sm:text-3xl">
            Resources
          </h2>
          <h3 className="text-center text-4xl outfit mt-1 mb-4 text-[#666666] font-semibold min-[320px]:text-2xl sm:text-4xl">Bibliography</h3>

          <p className="quicksand border-b-2 pb-10 mb-10 border-[#666666] min-[320px]:text-xs sm:text-base">
            <strong className="text-[#777777]">Central Board of Secondary Education (CBSE) Circulars: </strong>Screening of film ‘Komal’ and spreading awareness of POCSO E-Box – 2017; Elimination of corporal punishment, 2014 | <strong className="text-[#777777]">Constitution of India</strong> Preamble Fundamental Rights Fundamental Duties | <strong className="text-[#777777]">Council for the Indian School Certificate Examinations (CISCE) Circulars:</strong> Creating awareness regarding the POCSO E-box – 2017 Elimination of corporal punishment – 2014 | <strong className="text-[#777777]">Delhi Commission for Protection of Child Rights</strong> Guidelines for Prevention of Child Abuse in schools, 2014  | <strong className="text-[#777777]">Department of Women and Child Development, Delhi Govt.</strong> Awareness Material (age wise modules) on Prevention of CSA | <strong className="text-[#777777]">Department of Women and Child Development, Karnataka Govt.</strong> Child Protection Policy for schools, 2016 | <strong className="text-[#777777]">Federation of Indian Chambers of Commerce and Industry (FICCI)</strong> Child Safety and Security in K-12 Schools,  A Report, Toolkit and Primer | <strong className="text-[#777777]">Food and Safety Standards Authority of India (FSSAI)/ National Institute of Nutrition (NIN)/ Indian Council of Medical Research (ICMR)</strong> Eat right school (learning material); Nutritive value of Indian foods; Count what you eat | <strong className="text-[#777777]">Indian Academy of Pediatrics (IAP)</strong> Recommended Immunization | <strong className="text-[#777777]">Ministry of Environment, Forest and Climate Change, Govt. of India/ Central Pollution Board</strong> Low-Carbon-Lifestyles, AQI Index | <strong className="text-[#777777]">Ministry of Home Affairs, Govt. of India </strong> Handbook for adolescents/ students on cyber safety – 2019 | <strong className="text-[#777777]">Ministry of Tribal Affairs, Govt. of India </strong>Tribal faces | <strong className="text-[#777777]">Ministry of Women and child development (MWCD), Govt. of India</strong> Gazette Notification, 9 March 2020 – Rules for Protection of Children from Sexual Offences Act, 2012 (32 of 2012); Reader for parents, teachers and communities on ‘Raising Happy Children and Providing Safe Childhoods’, April 2017 Integrated Child Protection Scheme (ICPS) <a href="" className="text-red-600 hover:underline font-semibold">National Policy for Children to reiterate the commitment of ‘Rights based Approach for children</a>”, 2013 | <strong className="text-[#777777]">National Commission for Protection of Child Rights (NCPCR)</strong> POCSO complain management system | <strong className="text-[#777777]">National Council of Educational Research and Training (NCERT)</strong> Adolescence Education Programme, <a href="" className="text-red-600 hover:underline font-semibold">http://aeparc.org/</a> Education for values in schools, a framework <a href="" className="text-red-600 hover:underline font-semibold">Guidelines on Cyber Safety and Security</a> | <strong className="text-[#777777]">National Initiative for School Heads and Teachers Holistic Advancement, NISHTHA, 2019</strong> Module 2: Developing personal – Social qualities & creating safe and healthy school environment Module 5: Health and well-being in schools Module 16: Relevance of Gender Dimensions in Teaching and Learning Process | National Institute of Disaster management (NIDM) and Vigyan Prasar Activity book on disaster management for school students ISBN: 978-93-82571-05-6 | <a href="" className="text-red-600 hover:underline font-semibold">National Institute of Public Cooperation and Child Development (NIPCCD)</a>  | Handbook on Implementation of POCSO Act for School Management and Staff | <strong className="text-[#777777]">National/State Legal Services Authorities (NALSA/SLSA)</strong>  | Legal Literacy Material on child rights related laws | Adolescence Education Programme Training and Resource Materials, 2010 | <strong className="text-[#777777]">Supreme Court</strong> Guide Lines on Child Safety in Schools | <strong className="text-[#777777]">Unified online pledge platform Govt. Of India</strong> Take a pledge <a href="" className="text-red-600 hover:underline font-semibold">https://pledge.mygov.in/</a> <strong className="text-[#777777]">World Health Organisation (WHO)</strong> Life skills education school handbook ‘Prevention of non-communicable diseases’ ISBN 978-92-4-000485-6; Partners in Life Skills Education WHO /MNH / MHP/ 99.2
            </p>


          <div className="border-b-2 pb-10 mb-10 border-[#666666] min-[320px]:mb-5 min-[320px]:pb-5 xl:pb-10 xl:mb-10">

            <strong className="text-[#777777] min-[320px]:text-sm sm:text-base">Helplines and related portals covered for children, parents, teachers and non-teaching/support staff</strong>
          <p className="quicksand mt-3 min-[320px]:text-xs sm:text-base">
          Police 100 | Fire 101 | Ambulance 102 | National single emergency 112 | Railway Police 1052 |  Childline 1098 | NALSA 15100 | NDRF 9711077372 |  Food adulteration 9868686868 | Organ transplant 1800-11-4770 | Consumer protection 1800114000/14404 | Generic Medicine 1800-180-8080 | POCSO E-Box 9868235077/1800115455/ <a href="" className="text-red-600 hover:underline font-semibold">https://ncpcr.gov.in/</a>  | Air pollution (Delhi & NCR) <a href="" className="text-red-600 hover:underline font-semibold">https://cpcb.nic.in/</a> | Cyber Crime https://cybercrime.gov.in/ | Child labour complain <a href="" className="text-red-600 hover:underline font-semibold">https://pencil.gov.in/</a> | Online complain under POSH Act http://www.shebox.nic.in/ | Drug de-addiction 1800-11-0031 | Gender certification of Transgender persons  <a href="" className="text-red-600 hover:underline font-semibold">http://transgender.dosje.gov.in/</a>
          </p>
          </div>

          <div className="border-b-2 pb-10 mb-10 border-[#666666] min-[320px]:mb-5 min-[320px]:pb-5  xl:pb-10 xl:mb-10">

            <strong className="text-[#777777] min-[320px]:text-sm sm:text-base">HPledges undertaken by children, parents, teachers and non-teaching/support staff</strong>
          <p className="quicksand mt-3 min-[320px]:text-xs sm:text-base">
          Abuse prevention | anti-bullying | blood/organ donation | climate change | health | hygiene | road safety | water preservation | and various pledges on <a href="" className="text-red-600 hover:underline font-semibold">https://pledge.mygov.in/</a>
          </p>
          </div>

          <div className="border-b-2 pb-10 mb-10 border-[#666666] min-[320px]:mb-5 min-[320px]:pb-5  xl:pb-10 xl:mb-10">

            <strong className="text-[#777777] min-[320px]:text-sm sm:text-base">Laws Referred</strong>
          <p className="quicksand mt-3 min-[320px]:text-xs sm:text-base">
          The Anti-Dowry Act | The Bonded Labour System (Abolition) Act | The Child Labour (Prohibition and Regulation) Amendment Act. | The Children (Pledging of Labour) Act | The Consumer Protection Act The Domestic Violence Act | The Drugs and Magic Remedies (Objectionable Advertisements) Act | The Factories Act | The Guardians and Wards Act, 1890 and The Hindu Minority and Guardians Act | The Immoral Traffic (Prevention) Act | The Information Technology (Amendment) Act | The Juvenile Justice (Care and Protection of Children) Act | The Maternity (Amendment) Bill | The Mental Health Care Act | The Mines Act | The Motor Vehicles Act – MVA | The Narcotic Drugs and Psychotropic Substances Act (NDPS Act) | The National Food Security Act | Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act | The Prevention of Cruelty to Animals (Slaughter House) Rules | The Prevention of Cruelty to Animals Act | The Prohibition of Child Marriage Act | The Prohibition of Employment as Manual Scavengers and their Rehabilitation Act | The Protection of Children from Sexual Offences Act | The Right of Children to Free and Compulsory Education Act | The Right to Information Act (RTI) | The Rights of Persons with Disabilities Act | The SC/ ST (Prevention of Atrocities) Act | The Sexual Harassment of Women at Workplace (Prevention, prohibition and Redressal)  Act – POSH
          </p>
          <p className="quicksand mt-2 min-[320px]:text-xs sm:text-base">
          The Supreme Court of India (28 November 2001, ) directed state governments to introduce cooked mid-day meals in all government and government-assisted primary schools within six months. This landmark order was one of the first achievements of the Right to Food campaign. | (August 2017) recognised the right to privacy as a fundamental right under Article 21 of the Constitution as a part of the right to “life” and “personal liberty”.  | has ruled that separate toilets for boys and girls as well as drinking water facility are integral to the right to education. | legalised passive euthanasia on 9 March 2018 in its ruling, according to which withdrawal of life support to patients in permanent vegetative states is legitimate, given the proper procedures are followed.
          </p>
          <p className="quicksand mt-2 min-[320px]:text-xs sm:text-base">
          The Transgender Persons (Protection of Rights) Act | The Transplantation of Human Organ Act (THO) of 1994 in India. | The Wildlife (Protection) Act, 1972 | The Young Persons (Harmful Publication) Act, 1956
          </p>
          </div>

          <div className="border-b-2 pb-10 mb-10 border-[#666666] min-[320px]:mb-5 min-[320px]:pb-5  xl:pb-10 xl:mb-10">

            <strong className="text-[#777777] min-[320px]:text-sm">Books Referred</strong>
            <p className="quicksand mt-3 min-[320px]:text-sm sm:text-base">
            National Book Trust NBT: ISBN Code 978-81-237-…..
            </p>
          <p className="quicksand mt-3 min-[320px]:text-xs sm:text-base">
          A Visit to the City Market 2005-0 | A Visit to the Zoo 1109-6 | A wet summer day 655-6 | Alamelu’s Appetite 2980-0 | Bapu 1026-6 | Better than the Best 5093-4 | Children Who Made It Big 2756-1 | Etoa Munda Won the Battle 0171-4 | India’s Young Heroes 1094-5 | l am Better than You 1098-3 | Lost and Found 6337-8 | Mangu’s Top 0310-7 | Mohini and the Demon 0164-6 | My Life: The Tale of a Butterfly 2333-4 | Neha, My Sister 4092-8 | Once in a village 2046-3 | Owl Ball 5440-6 | Pollution 1080-8 | Quakes and Flames 0769-3 | Raju and Jimmi 4538-1 | Some Street Games of India 1099-0 | The Day the River Spoke 2000-5 | The Royal Sweeper 6679-9 | The Wonderful Vacation 3930-4 | We Indians 1097-6
          </p>
          <p className="quicksand mt-2 min-[320px]:text-xs sm:text-base">
          Animal Farm, George Orwell | Bitter Chocolate, Pinki Viarani | Footprints without feet, HG Wells | Lord of the Flies (1954), William Golding | King Matt the First, Janusz Korczak | Oliver Twist (by Charles Dickens), Brendan P. Kelso | Pale Blue Dot – An essay by Carl Sagan | The Astronomer, Rabindranath Tagore | The Little Prince, Antoine de Saint-Exupéry
          </p>
        
          </div>

          <div className="border-b-2 pb-10 mb-10 border-[#666666] min-[320px]:mb-5 min-[320px]:pb-5  xl:pb-10 xl:mb-10">

<strong className="text-[#777777] min-[320px]:text-sm sm:text-base"> Psychometric Test Referred</strong>
<p className="quicksand mt-3 min-[320px]:text-sm sm:text-base">
The Implicit Association Test (IAT) – Havard University
</p>
          </div>

          <div className="">

<strong className="text-[#777777] min-[320px]:text-sm sm:text-base">Web-portals Referred</strong>
<p className="quicksand mt-3 min-[320px]:text-xs sm:text-base">
AQI Index for cities across India <a href="" className="text-red-600 hover:underline font-semibold">https://cpcb.nic.in/</a> | calorie calculator mayo clinic | Children bravery awards  <a href="" className="text-red-600 hover:underline font-semibold">http://www.iccw.co.in/</a> | Central child adoption agency <a href="" className="text-red-600 hover:underline font-semibold">http://cara.nic.in/</a>  | Diabetes information – diabetes atlas <a href="" className="text-red-600 hover:underline font-semibold">https://www.diabetesatlas.org/en/</a> | Earth day <a href="" className="text-red-600 hover:underline font-semibold">https://www.earthday.org/</a> Generic medicine <a href="" className="text-red-600 hover:underline font-semibold">http://janaushadhi.gov.in/</a> | How to hold a pencil? <a href="" className="text-red-600 hover:underline font-semibold">https://bit.ly/3bHRfX</a> | How to solve letter reversals? <a href="" className="text-red-600 hover:underline font-semibold">https://bit.ly/2LMdj91</a> | Invisible gorilla <a href="" className="text-red-600 hover:underline font-semibold">http://www.theinvisiblegorilla.com/</a> | India Census Report census.gov.in | left handers <a href="" className="text-red-600 hover:underline font-semibold">https://www.lefthandersday.com/</a> | Morse code translation <a href="" className="text-red-600 hover:underline font-semibold">https://morsecode.world/international/translator.html</a> | National cadet Corps <a href="" className="text-red-600 hover:underline font-semibold">https://indiancc.nic.in/</a> | Road safety symbols http://delhitrafficpolice.nic.in | Spic Macay  <a href="" className="text-red-600 hover:underline font-semibold">https://spicmacay.org/</a> | World Population Data and forecast <a href="" className="text-red-600 hover:underline font-semibold">https://www.worldometers.info/</a>  <a href="" className="text-red-600 hover:underline font-semibold">https://population.un.org/wpp/</a> | Yoga <a href="" className="text-red-600 hover:underline font-semibold">https://yoga.ayush.gov.in/yoga/</a>
</p>
</div>
          
        </div>
      </div>
      
    </div>
  );
}

export default Bibliography;
