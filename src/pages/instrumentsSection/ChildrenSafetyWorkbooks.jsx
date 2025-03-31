import React, { useState } from "react";
import ChildrenPicturebooksBanner from "../../assets/ChildrenPicturebooksBanner.jpg";

function ChildrenSafetyWorkbooks() {
  const [safetyWorkbooks, setSafetyWorkbooks] = useState([
    {
      id: 1,
      title: "My Beginner's Safety Workbook",
      class: "UKG",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/MBSW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 2,
      title: "My First Safety Workbook",
      class: "Class 1",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M1SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 3,
      title: "My Second Safety Workbook",
      class: "Class 2",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M2SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 4,
      title: "My Third Safety Workbook",
      class: "Class 3",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M3SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 5,
      title: "My Fourth Safety Workbook",
      class: "Class 4",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M4SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 6,
      title: "My Fifth Safety Workbook",
      class: "Class 5",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M5SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 7,
      title: "My Sixth Safety Workbook",
      class: "Class 6",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M6SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 8,
      title: "My Seventh Safety Workbook",
      class: "Class 7",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M7SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
      id: 9,
      title: "My Eighth Safety Workbook",
      class: "Class 8",
      price: 250,
      currency: "Rs.",
      edition: "For New Edition",
      image: "https://projectcaca.org/wp-content/uploads/2025/02/M8SW-Pink-09-01-P-Cover-Jan.jpg",
    },
    {
        id: 10,
        title: "My Ninth Safety Workbook",
        class: "Class 9",
        price: 250,
        currency: "Rs.",
        edition: "For New Edition",
        image: "https://projectcaca.org/wp-content/uploads/2025/02/M9SW-Pink-09-01-P-Cover-Jan.jpg",
      },
    {
      id: 11,
      class: "Class 10",
      edition: "(It’s On the Way)",
      image: "/images/class9-safety.jpg",
    },
  ]);

  return (
    <div>
      <div>
        <img
          src={ChildrenPicturebooksBanner}
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
          Parents, teachers, and caregivers need to understand that children go through various cognitive moral development stages before they finally understand their actions’ long-term consequences.
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
            Resources
          </h2>
          <h3 className="text-center text-2xl outfit mt-1 mb-4">
            Children Picture Books (From Classes{" "}
            <span className="font-semibold">(UKG To 2)</span>)
          </h3>
          <p className="quicksand text-center">
            Children’s picture books help its young readers to connect with the
            main characters of the workbooks. The idea is to make young readers
            comfortable when it comes to sharing their personal feelings and
            incidents through the various activities of the workbooks. The QR
            codes for the picture books are embedded in the workbooks.
          </p>
          <h4 className="font-semibold text-lg mt-10">Dear Children!</h4>
          <p className="quicksand">
            Sana, Arpit and Pokso will be your companions as you journey through
            your safety workbooks. The three musketeers are childhood friends,
            and enjoy learning skills. Sometimes, they come across situations
            when they are not sure what to do. At times, they talk to their
            friends, parents, grandparents and teachers, but their favourite
            advisor is their tiger friend, Pokso. He always helps them to be
            happy, healthy and safe. But you’re in this story too, because the
            three friends might need your help with some of their problems.
            Enjoy their antics and those of their friends and classmates as you
            make your very own journey to becoming an adult. Be safe!
          </p>
          <div className="grid grid-cols-3 mt-14 gap-y-20">
            {safetyWorkbooks.map((safetybook, index) => {
              return (
                <div className="card cursor-pointer text-center hover:scale-105 duration-500">
                  <div className="mb-4">
                    <img
                      src={safetybook.image}
                      alt={safetybook.title}
                      className="mx-auto w-[200px] h-[290px] object-cover"
                    />
                  </div>
                  <a href="" className="text-red-600 hover:underline text-base">
                    {safetybook.title}
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

export default ChildrenSafetyWorkbooks;
