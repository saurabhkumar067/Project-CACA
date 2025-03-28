import React, { useState } from "react";
import VideoBanner from "../../assets/VideoBanner.jpg";

function Video() {
  const [videos, setVideos] = useState([
    {
      section: "MBSW",
      items: [
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/Chewing-Is-My-Habit_MBSW-Poem.jpg",
          title: "Chewing is My Habit (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/Hand-Wash_MBSW-Poem.jpg",
          title: "Hand Wash (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/Pokso-and-Joey_MBSW-Story.jpg",
          title: "Pocso and Joey (Story)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/08/Tipi-Tap-Tap-Thumbnail_website.png",
          title: "Tipi Tap Tap (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/MBSW_Pokso-Gets-Lost-In-The-Jungle.jpg",
          title: "Pokso Gets Lost in the Jungle (Story)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2024/08/MBSW-UNSAFE-THINGS.jpg",
          title: "I do not do Unsafe Things (Story)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2024/08/MBSW-MY-THINGS-AND-ME.jpg",
          title: "My things and me",
        },
      ],
    },
    {
      section: "MISW",
      items: [
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2024/08/M1SW-ARPIT-LEARNS-TO-RIDE-HIS-BICYCLE-150x150.jpg",
          title: "Arpit learns to ride his bicycle",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2024/08/M1SW-SANA-GOES-TO-THE-ZOO-1.jpg",
          title: "Sana Goes to The Zoo (Story)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/Chew-Chew-Chew_M1SW-Poem.jpg",
          title: "Chew Chew Chew (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/I-am-Happy_M1SW-Poem.jpg",
          title: "I am Happy (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/The-Hare-and-The-Tortoise_M1SW-Story.jpg",
          title: "The Hare and The Tortoise (Bedtime Stories)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/The-Tortoise-and-The-Geese_M1SW-Story.jpg",
          title: "The Tortoise and The Geese (Bedtime Stories)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/The-Monkey-and-The-Crocodile_M1SW-Story.jpg",
          title: "The Monkey and The Crocodile (Bedtime Stories)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/The-Girl-Who-Cried-Wolf_M1SW-Story.jpg",
          title: "The Girl Who Cried Wolf (Story)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M1SW_Say-No_Poem.jpg",
          title: "Say No (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M1SW_Telling-Your-Loved-Ones_Poem.jpg",
          title: "Telling Your Loved Ones (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M1SW_The-Angry-Bee.jpg",
          title: "The Angry Bee (Story)",
        },
      ],
    },
    {
      section: "M2SW",
      items: [
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2024/08/M2SW-FIRST-DAY-IN-THE-CLASS.jpg",
          title: "First day in the class",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2024/08/M2SW-A-NASTY-FIGHT.jpg",
          title: "A Nasty Flight",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/How-Do-You-Feel_M2SW-Poem.jpg",
          title: "How Do You Feel? (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-21-at-12.59.24-PM.jpeg",
          title: "Sana Is Brave (The Crows And The Snake)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/Loudly-and-Clearly_M2SW-Poem.jpg",
          title: "Loudly and Clearly (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/Pokso-and-The-Train_M2SW-Story.jpg",
          title: "Pokso and The Train (Story)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M2SW_The-Secret-Cave-Story.jpg",
          title: "The Secret Cave (Story)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M2SW_With-Love-From-Your-Lunch-Box_Poem.jpg",
          title: "With Love From Your Lunch Box (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M2SW-The-Nest-On-The-Tree.png",
          title: "The Nest On The Tree",
        },
      ],
    },
    {
      section: "M3SW",
      items: [
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/The-Squirrel-and-The-Fox_M3SW-Story.jpg",
          title: "The Squirrel and the Fox",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2024/03/SHADOW.jpg ",
          title: "Shadows",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/The-Pigeons-and-The-Hunter_M3SW-Story.jpg",
          title: "United We Stand Divided We Fall (The Pigeons and The Hunter)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/What-Am-I-Feeling_M3SW-Poem.jpg",
          title: "What am I Feeling?",
        },
        { image: "", title: "See-saw" },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M3SW_Pinocchio-the-Liar-Story-1-150x150.jpg",
          title: "Pinocchio, the Liar",
        },
      ],
    },
    {
      section: "M4SW",
      items: [
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/The-Stag-and-His-Magnificent-Horns_M4SW-Story.jpg",
          title: "The Stag and His Magnificent Horns (Story)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/The-Stag-and-His-Magnificent-Horns_M4SW-Story.jpg",
          title: "The 7-Step Safety Rule",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M4SW_Know-Your-Feelings_Poem.jpg",
          title: "Know Your Feelings (Poem)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2024/08/M1SW-ARPIT-LEARNS-TO-RIDE-HIS-BICYCLE.jpg",
          title: "Arpit Sings a Lullaby",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/Pokso-and-Joey_MBSW-Story-150x150.jpg",
          title: "Joey Gets an Injection (Shoe Laces)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/Sweet-Home_M4SW-Story-150x150.jpg",
          title: "Sweet Home",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M4SW-A-muddy-bath.png",
          title: "A muddy bath",
        },
      ],
    },
    {
      section: "M5SW",
      items: [
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-21-at-12.59.25-PM.jpeg",
          title: "While coming back from the school",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M5SW-%E2%80%93-A-summer-night-camp.png",
          title: "A summer night camp",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/07/Jack-and-Jill-Thumbnail-Website.jpg",
          title: "Jack and Jill",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/Thumbnail.jpg",
          title: "The 7-Step Safety Rule",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-21-at-12.59.25-PM.jpeg",
          title: "The elephant and the six friends",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M5SW_The-Bamboo-and-The-Crooked-Tree-Story.jpg",
          title: "Bamboo and the Crooked Tree (Story)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M5SW_Making-People-Listen_Poem.jpg",
          title: "A football match to remember",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M5SW_The-Humble-Pencil.jpg",
          title: "The Humble Pencil (Story)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/M5SW_Making-People-Listen_Poem-150x150.jpg",
          title: "Making People Listen",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M5SW-%E2%80%93-I-Like-Myself-Types-of-Knots.png",
          title: "I Like Myself (Types of Knots)",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M5SW-I-Like-Myself-Hand-String-Games-150x150.png",
          title: "I Like Myself (Hand)",
        },
      ],
    },
    {
      section: "M6SW",
      items: [
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M6SW-True-wealth.png",
          title: "True wealth",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M6SW-Poem-on-child-rights.png",
          title: "Poem on child rights",
        },
        { image: "image_m6sw_3.png", title: "The spellbee champion" },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M6SW-Ganpati%E2%80%99s-presence-of-mind.png",
          title: "Ganpati’s presence",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M6SW-The-man-and-the-woods.png",
          title: "The man and the woods",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M6SW-The-cub-and-the-hare.png",
          title: "The cub and the hare",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M6SW-Sana-is-brave.png",
          title: "Sana is brave",
        },
      ],
    },
    {
      section: "M7SW",
      items: [
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M7SW-War-and-peace.png",
          title: "War and Peace",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M7SW-A-spooky-house-1.png",
          title: "A Spooky House",
        },
        { image: "", title: "Twinkle Twinkle Little Star" },
      ],
    },
    {
      section: "M8SW",
      items: [
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M8SW-999999-vs-999.png",
          title: "999,999 vs 999",
        },
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M8SW-A-trip-to-remember.png",
          title: "A Trip to Remember",
        },
        { image: "", title: "All About Fire Extinguishers" },
      ],
    },
    {
      section: "M9SW",
      items: [
        {
          image:
            "https://projectcaca.org/wp-content/uploads/2025/03/M9SW-How-to-choose-well.png",
          title: "How to Choose Well",
        },
        { image: "", title: "The Good Samaritans" },
      ],
    },
  ]);

  return (
    <div>
      <div>
        <img
          src={VideoBanner}
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
            I make mistakes growing up. I am not perfect; I am not a robot. | I
            was very different from everybody else growing up. I spoke a
            different language at home, I ate different food, and I looked
            different. So I could always relate to Aladdin in that way, being
            the outcast.
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
          <h3 className="text-center text-4xl text-[#666666] outfit mt-1 mb-8 font-semibold">
            Videos
          </h3>
          <div className="flex gap-6">
            <div className=" w-1/3 h-fit">
              <img
                src="https://projectcaca.org/wp-content/uploads/2023/03/komal-759.jpg"
                alt=""
                className=" w-full object-cover"
              />
            </div>

            <p className="quicksand text-sm w-[90%]">
              ‘Komal’ is a short animated film on Child Sexual Abuse (CSA) by
              the Ministry of Women and Child Development (MWCD), Government of
              India and produced by NGO – CHILDLINE India Foundation. It is
              available in English, Hindi and various Indian languages. The
              girl, Komal, is like any other bright, sensitive and happy seven
              year – old. Her new neighbour – Mr Bakshi, who moved in with his
              wife, is her father’s old friend. Komal bonds with the affable Mr
              Bakshi with whom she has a whale of a time until she discovers Mr
              Bakshi’s bitter reality. The CHILDLINE (1098) Didi explains to the
              children the concept of safe and unsafe touch so that they can be
              better equipped to protect themselves and take help from trusted
              adults if ever caught in a similar situation.
            </p>
          </div>
          <div className="mb-20">
            <p className="quicksand text-sm mt-5 mb-4">
              The CACA safety workbooks are a companion to the Komal film. They
              cover the various safety principles mentioned in the film like
              Safe Touch, Unsafe Touch, Secrets, Trusted Grownups,
              Assertiveness, Telling, It is not your fault, It is okay to be
              afraid, and a lot more in age appropriate and progressive ways.
              These principles form basics for the prevention of child sexual
              abuse.
            </p>
            <div className="grid grid-cols-6 gap-y-10">
              {[
                " Komal In English",
                "Komal In Bengali",
                "Komal In Assamese",
                "Komal In Gujarati",
                "Komal In Hindi",
                "Komal In Kannada",
                "Komal In Marathi",
                "Komal In Malayalam",
                "Komal In Punjabi",
                "Komal In Tamil",
                "Komal In Telegu",
                "Komal In Urdu",
                "Komal In Konkani",
                "Komal In Kashmiri",
              ].map((links, index) => {
                return (
                  <a
                    key={index}
                    href=""
                    className="hover:underline text-red-600"
                  >
                    {links}
                  </a>
                );
              })}
            </div>
          </div>

          {videos.map((videoSection, index) => (
            <div key={index} className="mb-10">
              <h4 className="text-2xl font-bold text-gray-700 mb-4">
                {videoSection.section}
              </h4>
              <div className="grid grid-cols-3 gap-6 overflow-hidden cursor-pointer">
                {videoSection.items.map((video, i) => (
                  <div key={i} className="rounded-lg p-4 shadow-md">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-44 object-contain mb-1 hover:scale-105 duration-500"
                    />
                    <h5 className="text-lg font-semibold text-gray-800 text-center">
                      {video.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Video;
