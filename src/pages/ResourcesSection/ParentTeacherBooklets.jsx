import React from "react";
import ParentTeacherBookletsBanner from "../../assets/ParentTeacherBookletsBanner.jpg";

const ParentTeacherBooklets = () => {
  const booklets = [
    {
      img: "https://projectcaca.org/wp-content/uploads/2023/10/2.jpg",
      links: [
        "Parent Teacher Booklet English – Blue",
        "Parent Teacher Booklet Assamese – Blue",
        "Parent Teacher Booklet Bengali – Blue",
        "Parent Teacher Booklet Garo – Blue",
        "Parent Teacher Booklet Gujarati – Blue",
        "Parent Teacher Booklet Hindi – Blue",
        "Parent Teacher Booklet Kannada – Blue",
        "Parent Teacher Booklet Kashmiri – Blue",
        "Parent Teacher Booklet Khasi – Blue",
        "Parent Teacher Booklet Malayalam – Blue",
        "Parent Teacher Booklet Marathi – Blue",
        "Parent Teacher Booklet Odia – Blue",
        "Parent Teacher Booklet Punjabi – Blue",
        "Parent Teacher Booklet Tamil – Blue",
        "Parent Teacher Booklet Telugu – Blue",
        "Parent Teacher Booklet Urdu – Blue",
      ],
    },
    {
      img: "https://projectcaca.org/wp-content/uploads/2023/10/1-1.png",
      links: ["Parent Teacher Booklet English – Green"],
    },
  ];

  return (
    <div>
      <img
        src={ParentTeacherBookletsBanner}
        alt="Children Picturebooks"
        className="w-full h-full"
      />

      <div className="w-[80%] mx-auto overflow-hidden">
        <div className="flex gap-16 animate-scroll justify-center items-center">
          <h2 className="text-sm custom-font-shoulder whitespace-nowrap">
            Every child has a right to nutrition, and a standard of living and
            improved public health (Article 47). | Investing in childhood
            nutrition is a surefire strategy. The returns are incredibly high.
          </h2>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-scroll { animation: scroll 150s linear infinite; }
        `}
      </style>

      <div className="px-40">
        <h2 className="text-3xl text-[#666666] text-center mt-7 font-semibold">
          Resources
        </h2>
        <h3 className="text-center text-2xl outfit mt-1 mb-10 text-[#666666] font-semibold">
          Parent – Teacher Booklets
        </h3>

        {booklets.map((booklet, idx) => (
          <div
            key={idx}
            className="flex gap-5 items-center border-b pb-10 mb-14 border-[#ddbebe]"
          >
            <img
              src={booklet.img}
              alt="Booklet"
              className="h-[300px] w-[210px] object-cover"
            />
            <div className="grid grid-cols-3 gap-y-7 gap-x-6">
              {booklet.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-red-600 hover:underline text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentTeacherBooklets;
