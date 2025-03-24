import React from "react";
import AboutBanner from "../assets/aboutus.jpg";
import AboutImage1 from "../assets/aboutus1.jpg";
import AboutImage2 from "../assets/aboutus2.jpg";

function About() {
  return (
    <div className="">
      <div>
        <img src={AboutBanner} alt="" />
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
            Children are also citizens. They, too, have rights like other
            citizens. They also have special rights called child rights. | The
            right to an identity (articles 7 and 8). | The right to equality
            (Article 14) | The right against discrimination (article 15). | The
            right of minorities for protection of their interests (article 29) |
            The right to education (article 28) | The right to an opinion
            (article 12 and 13) | The right to privacy.
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
      animation: scroll 100s linear infinite;
    }
  `}
      </style>

      <div className="flex px-40  mt-10">
        <div className="w-[70%] border-r mr-5 pr-5">
          <div>
            <h3 className="text-3xl font-semibold text-gray-600">
              About Us - Overview
            </h3>
            <img src={AboutImage1} alt="" className="mx-auto mt-8 mb-4" />
            <p className="text-lg quicksand">
              Social Axiom Foundation – SAF is a non-profit organisation
              registered in India under Section 25 of the Companies Act, 1956.
              Corporate identity number is U85300DL2018NPL330830. Donations to
              SAF are tax deductible under 12A / 80G of the Income Tax Act.
            </p>
            <p className="my-4 quicksand text-lg">Our main objectives are:</p>
            <ul className="text-base quicksand list-decimal ml-10">
              <li>
                To initiate, carry out, execute, implement, aid, advocate, and
                assist activities towards the improvements and protection of
                rights of children as defined in the constitution of India and
                the UN Convention of Rights of the Child 1989, ratified by India
                in 1992 on a sustained and evolving basis.
              </li>
              <li>
                To coordinate, facilitate, work hand in hand, assist and partner
                with appropriate governmental, non-government and private
                organisations in strengthening the existing system of protection
                and creating awareness of child rights.
              </li>
              <li>
                To work in the domain of schools in particular and society at
                large in India and abroad.
              </li>
              <li>
                To bring institution driven behaviour changes in the society
                that are required for the improvement of and protection of child
                rights.
              </li>
              <li>
                To do research and development in the field of child rights.
              </li>
              <li>
                To develop, devise and execute models for creating awareness and
                preventive mechanisms on the issues of child rights, abuse and
                gender equality.
              </li>
            </ul>
            <p className="my-4 text-center border-b pb-5 border-gray-400 italic">
              “One can spend a lifetime trying to forget a few moments of one’s
              childhood.”
            </p>
          </div>
          <div>
            <img src={AboutImage2} alt="" className="mx-auto mt-5 mb-2" />
            <p className="my-4 quicksand text-lg">
              We have made a foray against one of the biggest threats facing our
              society, i.e., Child Sexual Abuse with our initiative, i.e.,
              Project Children Against Child Abuse or simply Project CACA. The
              Project is being run under the aegis of our advisors, chairperson
              and members of the project committee and various partner and
              supportive organizations. It is an institution driven child
              rights-based project and a collective move towards creating a
              better and safer living environment for our children. The project
              was initiated by our mentor Late Sh. Puran Chand (Fr. General
              Secretary – COBSE) in 2016.
            </p>
            <p className="my-4 pb-5 italic">
              “Ethical Axioms are found and trusted not very differently from
              the axioms of science. Truth is what stands the test of
              experience.”
            </p>
          </div>
        </div>

        <div className="w-[30%]">
          <h3 className="text-3xl font-semibold text-gray-600">About Us</h3>
          <ul className="text-xl list-disc ml-8 text-blue-700 flex flex-col gap-4 mt-6 font-[300]">
            <li className="hover:underline cursor-pointer">Overview</li>
            <li className="hover:underline cursor-pointer">Team</li>
            <li className="hover:underline cursor-pointer">Advisors</li>
            <li className="hover:underline cursor-pointer">
              Partners and Supportes
            </li>
            <li className="hover:underline cursor-pointer">Directors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
