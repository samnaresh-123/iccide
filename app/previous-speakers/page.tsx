import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

interface Speaker {
  name: string;
  desc: string;
  img: string;
}

interface YearGroup {
  year: string;
  speakers: Speaker[];
}

const yearGroups: YearGroup[] = [
  {
    year: "2024",
    speakers: [
      {
        name: "Hemasundar Reddy Lanka",
        desc: "Technology Architect at Publicis Sapient, Greater Minneapolis-St. Paul Area, USA",
        img: "/preivious-speakers/hemasundhar%20reddy.jpg",
      },
      {
        name: "Prof. Michael Fernando",
        desc: "University of Central Lancashire.",
        img: "/preivious-speakers/present1.jpg",
      },
      {
        name: "Dr. Nandimandalam Mohan Krishna Varma",
        desc: "R&D Center, Principal Researcher at GS Co.,LTD.",
        img: "/preivious-speakers/mohan.jpg",
      },
      {
        name: "Prof. Dr. Marco Aiello",
        desc: "Head of the Service Computing Dep. IAAS - University of Stuttgart, Germany",
        img: "/preivious-speakers/present3.png",
      },
      {
        name: "Sangarapillai Lambotharan, BEng, PhD, DIC, PGCAP, SMIEEE, FHEA, FIET",
        desc: "Professor of Signal Processing and Communications Director of the Institute for Digital Technologies Loughborough University, London Queen Elizabeth Olympic Park, The Broadcast Centre Here East, Lesney Ave, London E20 3BS, UK",
        img: "/preivious-speakers/present4.jpg",
      },
    ],
  },
  {
    year: "2022",
    speakers: [
      {
        name: "Prof. Johan Debayle FIET, FIACSIT, SMIEEE",
        desc: "Head of Department PMDM, LGF CNRS UMR 5307, MINES Saint- Etienne, France.",
        img: "/preivious-speakers/Johan%20Debayle.avif",
      },
      {
        name: "Dr. Selvakumar Manickam,",
        desc: "Director and Associate Professor, Universiti Sains Malaysia, Malaysia.",
        img: "/preivious-speakers/Dr.%20Selvakumar%20Manickam.avif",
      },
      {
        name: "Mr. Karthick Vankayala,",
        desc: "Director and Principal Consultant at First Identity, Australia.",
        img: "/preivious-speakers/Karthick%20Vankayala.avif",
      },
      {
        name: "Dr. Chhavi Dhiman,",
        desc: "Assistant Professor, Dept.of Electronics and Communication Engineering, Delhi Technological University, Delhi, India.",
        img: "/preivious-speakers/image.avif",
      },
    ],
  },
  {
    year: "2021",
    speakers: [
      {
        name: "Prof.Gerhard W.Dueck,",
        desc: "University of New Brunswick, CANADA.",
        img: "/preivious-speakers/2021prof1.avif",
      },
      {
        name: "Prof.Rolf Drechsler,",
        desc: "University of Bremen, Germany.",
        img: "/preivious-speakers/rolf2.jpg",
      },
      {
        name: "Prof.Kiarash Bazarganposition,",
        desc: "University of Minnesota, USA.",
        img: "/preivious-speakers/2021prof3.avif",
      },
      {
        name: "Prof. Anand Nayyar,",
        desc: "Duy Tan University, Vietnam.",
        img: "/preivious-speakers/2021prof4.avif",
      },
      {
        name: "Prof.Robert Wille,",
        desc: "Johannes Kepler University Linz, Austria.",
        img: "/preivious-speakers/2021prof5.avif",
      },
    ],
  },
  {
    year: "2020",
    speakers: [
      {
        name: "Prof. Rajkumar Buyya,",
        desc: "University of Melbourne, Australia.",
        img: "/preivious-speakers/rajkumar.jpg",
      },
      {
        name: "Prof. P. Sateesh Kumar,",
        desc: "IIT Roorkee, India.",
        img: "/preivious-speakers/2020prof2.avif",
      },
      {
        name: "Prof. Maode Ma,",
        desc: "Nanyang Technological University, Singapore.",
        img: "/preivious-speakers/2020prof3.avif",
      },
      {
        name: "Dr. K. Raghavendra,",
        desc: "Scientist/Engineer ‘SG’, ISRO, India",
        img: "/preivious-speakers/2020prof4.avif",
      },
      {
        name: "Prof. Giuseppe Di Fatta,",
        desc: "University of Reading, London, UK.",
        img: "/preivious-speakers/2020prof5.avif",
      },
      {
        name: "Mr. Aninda Bose,",
        desc: "Senior Publishing Editor, Springer New Delhi, India.",
        img: "/preivious-speakers/2020prof6.avif",
      },
      {
        name: "Dr. Atul Negi,",
        desc: "University of Hyderabad, India.",
        img: "/preivious-speakers/2020prof7.avif",
      },
    ],
  },
  {
    year: "2018",
    speakers: [
      {
        name: "Prof.Yingxu Wang ,",
        desc: "University of Calgary, Canada.",
        img: "/preivious-speakers/2018prof1.avif",
      },
      {
        name: "Prof.David Westwick ,",
        desc: "Schulich School of Engineering University, Canada.",
        img: "/preivious-speakers/2018prof2.avif",
      },
      {
        name: "Prof. Newton Howard,",
        desc: "University of Oxford, UK.",
        img: "/preivious-speakers/2018prof3.avif",
      },
      {
        name: "Prof.C.Chandra Sekhar ,",
        desc: "IIT Madras, Chennai, India.",
        img: "/preivious-speakers/chandrasekhar.jpg",
      },
      {
        name: "Prof.Fiorini Rodolfo ,",
        desc: "Politecnico di MilanoUniversity, Italy.",
        img: "/preivious-speakers/2018prof5.avif",
      },
      {
        name: "Mr. Aninda Bose,",
        desc: "Senior Publishing Editor, Springer New Delhi, India.",
        img: "/preivious-speakers/2018prof6.avif",
      },
    ],
  },
  {
    year: "2017",
    speakers: [
      {
        name: "Prof. Venu Govindaraju",
        desc: "University at Buffalo, USA.",
        img: "/preivious-speakers/venu.jpg",
      },
      {
        name: "Prof. Agostino Cortesi ,",
        desc: "Ca’ Foscari University, Italy.",
        img: "/preivious-speakers/2017prof2.avif",
      },
      {
        name: "Prof. Stephen Marsland,",
        desc: "Massey University, New Zealand.",
        img: "/preivious-speakers/2017prof3.avif",
      },
      {
        name: "Prof. D. Janakiram ,",
        desc: "IIT Madras, Chennai, India.",
        img: "/preivious-speakers/2017prof4.avif",
      },
    ],
  },
];

export default function Page() {
  return (
    <PageLayout heroTitle="Previous Speakers" headingTitle="Previous Speakers">
      <div className="w-full">
        {yearGroups.map(({ year, speakers }) => (
          <div key={year} className="mb-4">
            <h2 className="pb-3.75 text-[#650010] font-bold text-[18px] sm:text-[22px] lg:text-[26px]">
              Previous Speakers {year}
            </h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 pb-8.75">
              {speakers.map((speaker, idx) => (
                <div
                  key={`${speaker.name}-${idx}`}
                  className="h-55 sm:h-74.5 lg:h-87.5 bg-white"
                >
                  <div className="p-1.25 sm:p-2.5 flex flex-col w-full h-full">
                    <div className="basis-[70%] bg-black w-full h-full relative overflow-hidden">
                      <Image
                        src={speaker.img}
                        alt={speaker.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="basis-[30%] flex flex-col justify-center items-center text-center">
                      <p className="text-[10px] sm:text-[12px] lg:text-[14px] font-semibold text-black">
                        {speaker.name}
                      </p>
                      <p className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal text-black">
                        {speaker.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
