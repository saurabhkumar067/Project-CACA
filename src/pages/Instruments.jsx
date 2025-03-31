import React, { useState } from "react";
import InstrumentsBanner from "../assets/InstrumentsBanner.jpg";

function Instruments() {
  const [videos, setVideos] = useState([
    {
      section: "Andhra Pradesh",
      items: [
        {
          city: "Guntur",
          image:
            "https://projectcaca.org/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-31-at-9.38.37-AM.jpeg",
          title: "STEM School",
        },
        {
          city: "Nellore",
          image:
            "https://projectcaca.org/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-28-at-12.57.27-PM.jpeg",
          title: "Adani World School",
        },
        {
          city: "Prakasam",
          image:
            "https://projectcaca.org/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-28-at-12.51.01-PM-1.jpeg",
          title: "Icon Global School",
        },
      ],
    },
    {
      section: "Assam",
      items: [
        {
          city: "Guwahati",
          image:
            "https://projectcaca.org/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-28-at-12.25.44-PM.jpeg",
          title: "Royal Global School",
        },
      ],
    },
    {
      section: "Bihar",
      items: [
        {
          city: "Patna",
          image:
            "https://projectcaca.org/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-31-at-9.58.24-AM.jpeg",
          title: "SCPCR, Patna",
        },
      ],
    },
    {
      section: "Chandigarh",
      items: [
        {
          city: "Chandigarh",
          image:
            "https://projectcaca.org/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-31-at-2.42.02-PM.jpeg",
          title: "Manav Mangal High School",
        },
        {
          city: "Mohali",
          image:
            "https://projectcaca.org/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-31-at-2.40.02-PM.jpeg",
          title: "Manav Mangal Smart School",
        },
      ],
    },
    {
      section: "Chattisgarh",
      items: [
        {
          city: "Bilaspur",
          image:
            "https://projectcaca.org/wp-content/uploads/2024/01/CBD-RAIPUR.jpe",
          title:
            "DLSA Raipur, DLSA Bilaspur and DLSA Durg (SLSA – Chhattisgarh)",
        },
        {
          city: "Raipur",
          image:
            "https://projectcaca.org/wp-content/uploads/2024/01/aDARSH-vIDYALAYA.jpeg",
          title: "Adarsh Vidyalaya",
        },
      ],
    },
    {
      section: "Delhi",
      items: [
        {
          city: "East Delhi",
          image:
            "https://projectcaca.org/wp-content/uploads/2023/11/queen.jpeg",
          title: "Queen Global International School",
        },
        {
          city: "North Delhi",
          image:
            "https://projectcaca.org/wp-content/uploads/2023/11/academic.jpeg",
          title: "Academic Height Public School",
        },
        {
          city: "South West Delhi",
          image:
            "https://projectcaca.org/wp-content/uploads/2023/11/l.-b..jpeg",
          title: "L.B.S. School",
        },
      ],
    },
    {
      section: "Gujarat",
      items: [
        {
          city: "Ahmedabad",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Zebar-School-for-Children-1.jpg",
          title: "Zebar School for Children",
        },
        {
          city: "Vapi",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/05/Shree-Krishna-International-School-Vapi.png",
          title: "Shree Krishna International School",
        },
      ],
    },
    {
      section: "Haryana",
      items: [
        {
          city: "Ambala",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/St.-Paul%E2%80%99s-High-School.jpg",
          title: "St. Paul’s High School",
        },
        {
          city: "Gurugram",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Kunskapsskolan-School-1.jpg",
          title: "Kunskapsskolan School",
        },
        {
          city: "Panipat",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Bal-Vikas-Progressive-School-1.jpg",
          title: "Bal Vikas Progressive School",
        },
        {
          city: "Karnal",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/05/Adarsh-public-School.jpg",
          title: "Adarsh Public School",
        },
        {
          city: "Faridabad",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/05/Ryan-International-School-Faridabad-1-150x150.jpg",
          title: "Ryan International School",
        },
      ],
    },
    {
      section: "Himachal Pradesh",
      items: [
        {
          city: "Kangra",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Partap-World-School-2.jpg",
          title: "Partap World School",
        },
        {
          city: "Shimla",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Auckland-School-1.jpg",
          title: "Auckland School",
        },
        {
          city: "Sirmour",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Akal-Academy.jpeg",
          title: "Akal Academy",
        },
      ],
    },
   
    {
      section: "Jammu & Kashmir",
      items: [
        {
          city: "Jammu & Kashmir",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Delhi-Public-School.jpg",
          title: "Delhi Public School",
        },
        
      ],
    },
    {
      section: "Karnataka",
      items: [
        {
          city: "Bengaluru Urban",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/K.L.E.-Society%E2%80%99s-International-School.jpg",
          title: "K.L.E. Society’s International School",
        },
        {
          city: "Chikkamagaluru",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/The-Malnad-Educational-Society-1.jpg",
          title: "The Malnad Educational Society",
        },
        {
          city: "Mangaluru",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/St-Theresa%E2%80%99s-School.jpg",
          title: "St Theresa’s School",
        },
        {
          city: "Mysuru",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/JSS-Mahavidyapeetha.jpg",
          title: "JSS Mahavidyapeetha",
        },
        {
          city: "Chikkaballapur",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Noble-School.jpg",
          title: "Noble School",
        },
      ],
    },
    {
      section: "Kerala",
      items: [
        {
          city: "Kannur",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Marygiri-Senior-Secondary-School-1.jpg",
          title: "Marygiri Senior Secondary School",
        },
        
      ],
    },
    {
      section: "Madhya Pradesh",
      items: [
        {
          city: "Bhopal",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Sagar-Public-School.jpeg",
          title: "Sagar Public School",
        },
        {
          city: "Indore",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Sica-Senior-Secondary-School-Sch-No.78.jpg",
          title: "Sica Senior Secondary School Sch No.78",
        },
        {
          city: "Ujjain",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Jolly-Memorial-Mission-School-1.jpg",
          title: "Jolly Memorial Mission School",
        },
        {
          city: "Betul",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/R.D.-Public-School-1.jpg",
          title: "R.D. Public School",
        },
        {
          city: "Jabalpur",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Bishop-House-1.jpeg",
          title: "Bishop House",
        },
        {
          city: "Sehore",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Sharda-Vidya-Mandir-Hr-Secondary-School-1.jpg",
          title: "Sharda Vidya Mandir Hr",
        },
        {
          city: "Gwalior",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Army-Public-School-gwalior.jpeg",
          title: "Army Public School",
        },
      ],
    },
    {
      section: "Maharashtra",
      items: [
        {
          city: "Ahmednagar",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Dahanukar-School-1.jpg",
          title: "Dahanukar School",
        },
        {
          city: "Amravati",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/New-Orange-City-Convent-School.jpg",
          title: "New Orange City Convent School",
        },
        {
          city: "Jalgaon",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Orion-English-Medium-School-State-Board.png",
          title: "Orion English Medium School (State Board)",
        },
        {
          city: "Kolhapur",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/New-Model-English-School-1.jpg",
          title: "New Model English School",
        },
        {
          city: "Mumbai",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Campion-School.jpg",
          title: "Campion School",
        },
        {
          city: "Nagpur",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Seva-Sadan-Saksham-High-School.jpeg",
          title: "Seva Sadan Saksham High School",
        },
        {
          city: "Navi Mumbai",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Bharati-Vidyapeeth-English-Medium-School.jpeg",
          title: "Bharati Vidyapeeth English Medium School",
        },
        {
          city: "Pune",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Vidya-Pratishthan-Dr.Cyrus-Poonawalla.jpg",
          title: "Vidya Pratishthan Dr.Cyrus Poonawalla",
        },
        {
          city: "Raigad",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Bethany-Convent-School.jpeg",
          title: "Bethany Convent School",
        },
        {
          city: "Sangli",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Bharati-Vidyapeeth-Primary-English-Medium-School-Kolhapur.png",
          title: "Bharati Vidyapeeth Primary English Medium School",
        },
        {
          city: "Satara",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Shreemant-Shivajiraje-English-Medium-School-CBSE.jpg",
          title: "Shreemant Shivajiraje English Medium School (CBSE)",
        },
        {
          city: "Thane",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Holy-Angels-School.jpg",
          title: "Holy Angels School",
        },
        {
          city: "Wardha",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Bhavans-Girdhardas-Mohoto-Vidya-Mandir.png",
          title: "Bhavan’s Girdhardas Mohoto Vidya Mandir",
        },
        {
          city: "Bhandara",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/royal-public-school-bhandara.jpg",
          title: "Royal Public School",
        },
      ],
    },
    {
      section: "Manipur",
      items: [
        {
          city: "",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Assam-Rifles-Public-School-Mantripukhri.jpeg",
          title: "Assam Rifles Public School, Mantripukhri",
        },
        
      ],
    },
    {
      section: "Meghalaya",
      items: [
        {
          city: "East Khasi Hill",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/St.-Edmunds-School.jpg",
          title: "Assam Rifles Public School, Mantripukhri",
        },
        
      ],
    },
    {
      section: "Nagaland",
      items: [
        {
          city: "Dimapur",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/04/Assam-Rifles-Public-School.jpeg",
          title: "Assam Rifles Public School",
        },
        {
          city: "Kohima",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Assam-Rifles-Public-School-1.jpeg",
          title: "Assam Rifles Public School",
        },
      ],
    },
    {
      section: "Punjab",
      items: [
        {
          city: "Amritsar",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/05/Baring-School-Jandiala-Guru.jpg",
          title: "Baring School Jandiala Guru",
        },
        {
          city: "Barnala",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Gobind-International-Public-School.jpg",
          title: "Gobind International Public School",
        },
        {
          city: "Ferozepur",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Jogindra-Convent-School.jpg",
          title: "Jogindra Convent School",
        },
        {
          city: "Gurdaspur",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Guru-Tegh-Bahadur-International-School.jpeg",
          title: "Guru Tegh Bahadur International School",
        },
        {
          city: "Hoshiarpur",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Sant-Baba-Hari-Singh-Model-School-1.jpeg",
          title: "Sant Baba Hari Singh Model School",
        },
        {
          city: "Jalandhar",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Ryan-International-School-Jalandhar.png",
          title: "Ryan International School",
        },
        {
          city: "Ludhiana",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Ryan-International-School-Jalandhar-1.png",
          title: "Ryan International School",
        },
        {
          city: "Moga",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Pathways-Global-School.jpeg",
          title: "Pathways Global School",
        },
        {
          city: "Mohali",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/New-Angel-Public-School.png",
          title: "New Angel Public School",
        },
        {
          city: "Patiala",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Carpe-Diem-International-School.jpg",
          title: "Carpe Diem International School",
        },
        {
          city: "Sangrur",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Delhi-Public-School-2.jpg",
          title: "Delhi Public School, Dhuri",
        },
        {
          city: "Tarn Taran Sahib",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Punjab-Children-Academy.png",
          title: "Punjab Children Academy",
        },
      ],
    },
    {
      section: "Rajasthan",
      items: [
        {
          city: "Ajmer",
          image:
            "https://projectcaca.org/wp-content/uploads/2021/05/Ryan-International-School-Ajmer.png",
          title: "Ryan International School",
        },
        {
          city: "Bhilwara",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/Sangam-School-of-Excellence.jpg",
          title: "Sangam School of Excellence",
        },
        {
          city: "Jaipur",
          image: "https://projectcaca.org/wp-content/uploads/2021/04/The-City-Palace-School-1.jpg",
          title: "The City Palace School",
        },
        {
          city: "Udaipur",
          image: "https://projectcaca.org/wp-content/uploads/2021/05/Ryan-International-School-Udaipur.png",
          title: "Ryan International School",
        },
      ],
    },
    // {
    //   section: "",
    //   items: [
    //     {
    //       city: "",
    //       image:
    //         "",
    //       title: "",
    //     },
    //     {
    //       city: "",
    //       image: "",
    //       title: "",
    //     },
    //   ],
    // },
    {
      "section": "Tamil Nadu",
      "items": [
                {
          "city": "Chengalpattu",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/Prasan-Vidya-Mandir.png",
          "title": "Prasan Vidya Mandir"
        },
        {
          "city": "Chennai",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Sri-Ramakrishna-Matric-Higher-Secondary-School.jpeg",
          "title": "Bhavan’s Rajaji Vidyashram"
        },
        {
          "city": "Coimbatore",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Sathya-Saai-Public-School.jpg",
          "title": "Sri Ramakrishna Matric Higher Secondary School"
        },
        {
          "city": "Cuddalore",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Sathya-Saai-Public-School.jpg",
          "title": "Sathya Saai Public School"
        },
        {
          "city": "Erode",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/Saratha-International-Sr.-Sec.-School.jpg",
          "title": "Saratha International Sr. Sec. School"
        },
        {
          "city": "Karur",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/Venus-Global-Campus-CBSE.png",
          "title": "Venus Global Campus (CBSE)"
        },
        {
          "city": "Madurai",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Good-Shephard-Matric-Hr-Secondary-School.jpg",
          "title": "Good Shephard Matric Hr Secondary School"
        },
        {
          "city": "Tenkasi",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/Treasure-Island-International-CBSE-School.png",
          "title": "Treasure Island International CBSE School"
        },
        {
          "city": "Dindigul",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/SMBM-National-Public-School.png",
          "title": "SMBM National Public School"
        },
        {
          "city": "Thiruvallur",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/Angel-Mat-Hr.-Sec.-School.jpg",
          "title": "Angel Mat Hr. Sec. School"
        },
        {
          "city": "Trichy",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/SBOA-School-CBSE.png",
          "title": "SBOA School CBSE"
        }
      ]
    },
    {
      "section": "Uttar Pradesh",
      "items": [
        {
          "city": "Agra",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Sumeet-Rahul-Goel-Memorial-Senior-Secondary-School-1.jpeg",
          "title": "Sumeet Rahul Goel Memorial Sr. Sec. School"
        },
        {
          "city": "Aligarh",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Blue-Bird-Sr.-Sec-School.jpg",
          "title": "Blue Bird Sr. Sec School"
        },
        {
          "city": "Bareilly",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/download.jpg",
          "title": "St. Francis Convent School"
        },
        {
          "city": "Bijnor",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Dayawati-Dharamvira-Public-School.jpg",
          "title": "Dayawati Dharamvira Public School"
        },
        {
          "city": "Noida",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/Samsara-The-World-Academy.png",
          "title": "Samsara The World Academy"
        },
        {
          "city": "Ghaziabad",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Rajkiya-Balika-Inter-College.jpeg",
          "title": "Rajkiya Balika Inter College"
        },
        {
          "city": "Hapur",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Rainbow-Public-School.jpg",
          "title": "Rainbow Public School"
        },
        {
          "city": "Jhansi",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Army-Public-School.jpeg",
          "title": "Army Public School, Babina Cantt"
        },
        {
          "city": "Kanpur Urban",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Methodist-High-School-1.jpeg",
          "title": "Methodist High School"
        },
        {
          "city": "Kanpur Rural",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Halim-Muslim-English-School.jpeg",
          "title": "Halim Muslim English School"
        },
        {
          "city": "Lakhimpur Kheri",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/Lucknow-Public-School.png",
          "title": "Lucknow Public School"
        },
        {
          "city": "Lucknow",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Lucknow-Public-School.jpg",
          "title": "Lucknow Public School"
        },
        {
          "city": "Mathura",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/Mount-Hill-Academy.jpg",
          "title": "Mount Hill Academy"
        },
        {
          "city": "Meerut",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/Dewan-Public-School-International.jpg",
          "title": "Dewan Public School International"
        },
        {
          "city": "Prayagraj",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Air-Force-School-Allahabad.jpg",
          "title": "The Air Force School"
        },
        {
          "city": "Raebareli",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/New-Standard-Public-School.jpg",
          "title": "New Standard Public School"
        },
        {
          "city": "Saharanpur",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Air-Force-School-Saraswa.jpeg",
          "title": "Air Force School, Saraswa"
        },
        {
          "city": "Shahjahanpur",
          "image": "https://projectcaca.org/wp-content/uploads/2021/05/Ryan-International-School-Shaharanpur.png",
          "title": "Ryan International School"
        },
      ]
    },
    
    {
      "section": "Uttarakhand",
      "items": [
        {
          "city": "Almora",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Army-Public-School.jpg",
          "title": "Army Public School"
        },
        {
          "city": "Kordwar",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Bishop%E2%80%99s-House.jpeg",
          "title": "Bishop’s House"
        },
        {
          "city": "Nainital",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Ananda-Academy.jpeg",
          "title": "Ananda Academy"
        },
        {
          "city": "Rudrapur",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/Jaycees-Public-School.jpeg",
          "title": "Jaycees Public School"
        },
       
      ]
    },
    {
      "section": "West Bengal",
      "items": [
        {
          "city": "Kalimpong",
          "image": "https://projectcaca.org/wp-content/uploads/2021/06/Army-Public-School.jpg",
          "title": "Army Public School"
        },
        {
          "city": "Kolkata",
          "image": "https://projectcaca.org/wp-content/uploads/2021/04/BDM-International-School-1.jpeg",
          "title": "BDM International School"
        },
        
      ]
    }

  ]);

  return (
    <div>
      <div>
        <img
          src={InstrumentsBanner}
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
            One of the greatest discoveries a person makes, one of her/his great
            surprises, is to find she/he can do what she/he was afraid she/he
            could not do. | Courage is resistance to fear, mastery of fear – not
            absence of fear.
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
            Events
          </h2>
          <h3 className="text-center text-4xl text-[#666666] outfit mt-1 mb-8 font-semibold">
            Training/Webinar
          </h3>
          <div className="mb-10">
            <p className="quicksand text-sm  text-center">
              Events comprise training, sensitisation, awareness and
              capacity-building webinars for the stakeholders, i.e., teachers,
              non-teaching staff and parents. Each participating teacher gets an
              E-Certificate on filling out an online questionnaire. The school
              is provided with an appreciation cum endorsement letter for the
              sensitisation webinar for the non-teaching staff. The software
              used for the webinars is Zoom.
            </p>
            <p className="quicksand text-sm mt-8 text-center">
              The webinars primarily cover Academic, Psychological (clinical)
              and Legal aspects of our children’s safety and well-being. Here is
              a list of webinars available to a school under its safety and
              well-being policy for children.{" "}
              <a href="" className="text-red-700 font-semibold hover:underline">
                Click here for a list of webinars conducted
              </a>
              .
            </p>
            <p className="quicksand text-sm mt-8 text-center">
              A resource person pool of judges, panel advocates, paediatricians,
              psychologists, psychiatrists, academicians and social workers from
              Project CACA’s team/ advisors/ committee, partners and supporting
              organisations like Counsel to Secure Justice, Department of Mental
              Health and Behavioural Sciences – Fortis Health Care,
              State/District Legal Services Authorities, State Commissions for
              Protection of Child Rights and NGOs conduct these webinars.{" "}
              <a href="" className="text-red-700 font-semibold hover:underline">
                Click here for the list of webinars available to a school.
              </a>
            </p>
          </div>

          {videos.map((videoSection, index) => (
            <div key={index} className="mb-10">
              <h4 className="text-2xl font-bold text-gray-700 mb-4">
                {videoSection.section}
              </h4>
              <div className="grid grid-cols-3 gap-6 overflow-hidden cursor-pointer">
                {videoSection.items.map((video, i) => (
                  <div key={i} className="rounded-lg p-4 shadow-md">
                    {/* <h5 className="text-lg text-gray-800 text-center">
                      {video.city}
                    </h5> */}
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-44 object-contain hover:scale-105 duration-500"
                    />
                    <h5 className="text-base font-semibold text-gray-800 mt-2 text-center">
                      {video.title}, <span className="font-normal">{video.city}</span>
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

export default Instruments;
