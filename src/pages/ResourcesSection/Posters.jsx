import React, { useState } from "react";
import PosterBanner from "../../assets/PosterBanner.jpg";

function Posters() {
  const [posterLinks, setPosterLinks] = useState([
    {
      title: "",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Posters_Catalogue-Master-1.jpg",
    },
    {
      title: "Adolescence 1#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Adolescence_11-2.jpg",
    },
    {
      title: "Being Assertive 2#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Being-Assertive_21.jpg",
    },
    {
      title: "Being Assertive 2#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Being-Assertive_22.jpg",
    },
    {
      title: "Body Ownership 3#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Body-Ownership_31.jpg",
    },
    {
      title: "Bullying 4#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Bullying_41.jpg",
    },
    {
      title: "Bullying 4#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Bullying-42.jpg",
    },
    {
      title: "Bullying 4#3",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Bullying-43.jpg",
    },
    {
      title: "Bullying 4#4",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Bullying-44.jpg",
    },
    {
      title: "Child_Rights 5#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Child-Rights_51.jpg",
    },
    {
      title: "Child_Rights 5#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Child-Rights_52.jpg",
    },
    {
      title: "Child_Rights 5#3",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Child-Rights_53.jpg",
    },
    {
      title: "ChildRightsConstitution 5#4",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Child-Rights_54.jpg",
    },
    {
      title: "Child_Rights 5#5",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Child-Rights_55.jpg",
    },
    {
      title: "Decision Making 6#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Safety_61.jpg",
    },
    {
      title: "Diversity 7#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Decision-Making_71.jpg",
    },
    {
      title: "Diversity 7#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Diversity-72.jpg",
    },
    {
      title: "Emotions Feelings 8#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Diversity_81.jpg",
    },
    {
      title: "Emotions Feelings 8#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Emotions-Feelings_91.jpg",
    },
    {
      title: "Emotions Feelings 8#3",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Emotions-Feelings_92.jpg",
    },
    {
      title: "Emotions Feelings 8#4",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Emotions-Feelings_93.jpg",
    },
    {
      title: "Environment 9#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Environment-91.jpg",
    },
    {
      title: "Gender Equality 10#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Gender-Equality_101.jpg",
    },
    {
      title: "Gender Equality 10#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Gender-Equality_102.jpg",
    },
    {
      title: "Growing Up 11#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Growing-Up-111.jpg",
    },
    {
      title: "Growing Up 11#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Growing-Up-112.jpg",
    },
    {
      title: "Growing Up 11#3",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Growing-Up-113.jpg",
    },
    {
      title: "Health 12#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Health_111.jpg",
    },
    {
      title: "Health 12#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Health_112.jpg",
    },
    {
      title: "Health 12#3",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Health_113.jpg",
    },
    {
      title: "Health 12#4",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Hygiene_121.jpg",
    },
    {
      title: "Health 12#5",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Hygiene_122.jpg",
    },
    {
      title: "Health 12#6",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Health-126.jpg",
    },
    {
      title: "Health 12#7",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Health-127.jpg",
    },
    {
      title: "Health 12#8",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Health-128.jpg",
    },
    {
      title: "Hygiene 13#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Hygiene-131.jpg",
    },
    {
      title: "Hygiene 13#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Hygiene-132.jpg",
    },
    {
      title: "Interpersonal Relationship 14#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Interpersonal-Relationship_131.jpg",
    },
    {
      title: "Interpersonal Relationship 14#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Interpersonal-Relationship_132.jpg",
    },
    {
      title: "Morals Values Ethics 15#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Morals-Values-Ethics_141.jpg",
    },
    {
      title: "Morals Values Ethics 15#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Morals-Values-Ethics_142.jpg",
    },
    {
      title: "Morals Values Ethics 15#3",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Morals-Values-Ethics_143.jpg",
    },
    {
      title: "Morals Values Ethics 15#4",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Morals-Values-Ethics_144.jpg",
    },
    {
      title: "Morals Values Ethics 15#5",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Morals-Values-Ethics-155.jpg",
    },
    {
      title: "Private Parts 16#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Private-Parts_151.jpg",
    },
    {
      title: "Safety 17#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Safety_161.jpg",
    },
    {
      title: "Safety 17#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Safety_162.jpg",
    },
    {
      title: "Safety 17#3",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Safety_163.jpg",
    },
    {
      title: "Safety 17#4",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Safety-174.jpg",
    },
    {
      title: "Safety 17#5",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Safety-175.jpg",
    },
    {
      title: "Safety Circle 18#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Safety-Circle_171.jpg",
    },
    {
      title: "Safety Circle 18#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Safety-Circle_172.jpg",
    },
    {
      title: "Safety Circle 18#3",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Safety-Circle_173.jpg",
    },
    {
      title: "Safety Circle 18#4",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Safety-Circle_174.jpg",
    },
    {
      title: "Scared 19#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Scared_181.jpg",
    },
    {
      title: "Secrets 19#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Secrets_191.jpg",
    },
    {
      title: "Secrets 19#3",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Secrets_192.jpg",
    },
    {
      title: "Strangers 20#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Strangers_201.jpg",
    },
    {
      title: "Substance Abuse 21#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Substance-Abuse_211.jpg",
    },
    {
      title: "Touches 22#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Touches_221.jpg",
    },
    {
      title: "Emergencies 23#1",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Emergencies_231.jpg",
    },
    {
      title: "Emergency 23#2",
      image:
        "https://projectcaca.org/wp-content/uploads/2022/07/Link_Emergencies_232.jpg",
    },
    {
      title: "Emergencies 23#3",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Emergencies-233.jpg",
    },
    {
      title: "Emergencies 23#4",
      image:
        "https://projectcaca.org/wp-content/uploads/2023/05/Emergencies-234-1.jpg",
    },
    {
      title: "Other 24#1",
      image: "https://projectcaca.org/wp-content/uploads/2023/05/Other-241.jpg",
    },
    {
      title: "School Safety Pledge",
      image: "https://projectcaca.org/wp-content/uploads/2024/10/Capture.jpg",
    },
  ]);

  return (
    <div>
      <div>
        <img
          src={PosterBanner}
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
            Any person below the age of 18 years is a child/ minor/ juvenile, in
            the age group of 15 to 24 or 34 years is a youth and in the age
            group of 13 to 19 years is a teenager.
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

      <div className="px-32">
        <div>
          <h2 className="text-3xl text-[#666666] text-center mt-7 font-semibold">
            Resources
          </h2>
          <h3 className="text-center text-2xl outfit mt-1 mb-8 text-red-600 hover:underline cursor-pointer">
            Posters Catalogue
          </h3>
          <h3 className="font-semibold text-lg ">A Message for Teachers</h3>
          <p className="quicksand text-center">
            The resource ‘posters’ depict values, messages, rules, habits, and
            characters of various chapters in the workbooks. These posters also
            connect to the physical spaces and situations in schools.
          </p>
          <p className="quicksand">
            They are to be displayed in classrooms, corridors, canteen, staff
            room, dance room, games room, medical room, and more. The displayed
            posters build confidence among children as they see the workbooks’
            content unfolding in the school’s physical spaces.
          </p>
          <div className="grid grid-cols-4 mt-14 gap-y-20">
            {posterLinks.map((posterLinks, index) => {
              return (
                <div key={index} className="card cursor-pointer text-center ">
                  <div className="mb-4">
                    <img
                      src={posterLinks.image}
                      alt={posterLinks.title}
                      className="mx-auto w-[200px] h-[290px] object-cover hover:scale-105 duration-500"
                    />
                  </div>
                  <a href="" className="text-red-600 hover:underline text-base">
                    {posterLinks.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posters;
