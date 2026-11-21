import { PageLayout } from "@/components/PageLayout";

interface ConferenceEdition {
  year: string;
  edition: string;
  dates: string;
  venue: string;
  summary: string;
  proceedingsSeries: string;
  proceedingsUrl: string;
  speakers: string[];
}

const historyData: ConferenceEdition[] = [
  {
    year: "2024",
    edition: "6th",
    dates: "9th - 10th August 2024",
    venue: "VIT-AP University, Amaravati",
    summary:
      "The Sixth International Conference ICCIDE-2024 was conducted on 9-10 August 2024 at VIT-AP University. The Proceedings of the Conference were published in Lecture Notes in Networks and Systems (LNNS) Series of SPRINGER.",
    proceedingsSeries: "Lecture Notes in Networks and Systems (LNNS) Series of SPRINGER",
    proceedingsUrl: "https://www.springer.com/series/15179",
    speakers: [
      "Hemasundar Reddy Lanka, (Technology Architect at Publicis Sapient, Greater Minneapolis-St. Paul Area, USA)",
      "Prof. Michael Fernando, (University of Central Lancashire)",
      "Dr. Nandimandalam Mohan Krishna Varma, (R&D Center, Principal Researcher at GS Co., LTD.)",
      "Prof. Dr. Marco Aiello, (Head of the Service Computing Dep. IAAS - University of Stuttgart, Germany)",
      "Sangarapillai Lambotharan, BEng, PhD, DIC, PGCAP, SMIEEE, FHEA, FIET, (Professor of Signal Processing and Communications, Director of the Institute for Digital Technologies, Loughborough University, London)",
    ],
  },
  {
    year: "2022",
    edition: "5th",
    dates: "12th - 13th August 2022",
    venue: "VIT-AP University, Amaravati",
    summary:
      "The Fifth International Conference ICCIDE-2022 was conducted on 12-13 August 2022 at VIT-AP University. The Proceedings of the Conference were published in Lecture Notes on Data Engineering and Communications Technologies (LNDECT, volume 163) Series of SPRINGER.",
    proceedingsSeries: "Lecture Notes on Data Engineering and Communications Technologies (LNDECT, volume 163) Series of SPRINGER",
    proceedingsUrl: "https://link.springer.com/series/15362",
    speakers: [
      "Prof. Johan Debayle, (Head of Department PMDM, France)",
      "Dr. Selvakumar Manickam, (Universiti Sains Malaysia, Malaysia)",
      "Mr. Karthick Vankayala, (Director and Principal Consultant at First Identity, Australia)",
      "Dr. Chhavi Dhiman, (Delhi Technological University, Delhi, India)",
    ],
  },
  {
    year: "2021",
    edition: "4th",
    dates: "13th - 14th August 2021",
    venue: "VIT-AP University, Amaravati",
    summary:
      "The Fourth International Conference ICCIDE-2021 was conducted on 13-14 August 2021 at VIT-AP University. The Proceedings of the Conference were published in Lecture Notes on Data Engineering and Communications Technologies (LNDECT) Series of SPRINGER.",
    proceedingsSeries: "Lecture Notes on Data Engineering and Communications Technologies (LNDECT) Series of SPRINGER",
    proceedingsUrl: "https://www.springer.com/in/book/9789811063183",
    speakers: [
      "Prof. Gerhard W. Dueck (University of New Brunswick, Canada)",
      "Prof. Rolf Drechsler (University of Bremen, Germany)",
      "Prof. Kiarash Bazargan (University of Minnesota, USA)",
      "Prof. Robert Wille (Johannes Kepler University, Austria)",
      "Prof. Anand Nayyar (Duy Tan University, Vietnam)",
    ],
  },
  {
    year: "2020",
    edition: "3rd",
    dates: "8th - 9th August 2020",
    venue: "Vasavi College of Engineering (Autonomous), Hyderabad",
    summary:
      "The Third International Conference ICCIDE-2020 was conducted on 8-9 August 2020 at Vasavi College of Engineering (Autonomous), Hyderabad. The Proceedings of the Conference were published in Lecture Notes on Data Engineering and Communications Technologies (LNDECT) Series of SPRINGER.",
    proceedingsSeries: "Lecture Notes on Data Engineering and Communications Technologies (LNDECT) Series of SPRINGER",
    proceedingsUrl: "https://www.springer.com/in/book/9789811063183",
    speakers: [
      "Prof. Rajkumar Buyya (University of Melbourne, Australia)",
      "Prof. Maode Ma, Professor, (Nanyang Technological University, Singapore)",
      "Prof. Giuseppe Di Fatta, (University of Reading, London, UK)",
      "Dr. Atul Negi, Professor, (University of Hyderabad, India)",
      "Prof. P. Sateesh Kumar (IIT Roorkee, India)",
      "Dr. K. Raghavendra, Scientist/Engineer 'SG', ISRO, India",
      "Mr. Aninda Bose, Senior Publishing Editor, Springer New Delhi",
    ],
  },
  {
    year: "2018",
    edition: "2nd",
    dates: "28th - 29th September 2018",
    venue: "Vignan University, Guntur",
    summary:
      "The Second International Conference ICCIDE-2018 was conducted on 28-29 September 2018 at Vignan University, Guntur. The Proceedings of the Conference were published in Lecture Notes on Data Engineering and Communications Technologies (LNDECT) Series of SPRINGER.",
    proceedingsSeries: "Lecture Notes on Data Engineering and Communications Technologies (LNDECT) Series of SPRINGER",
    proceedingsUrl: "https://www.springer.com/in/book/9789811063183",
    speakers: [
      "Prof. Yingxu Wang from University of Calgary, Canada",
      "Prof. Newton Howard from University of Oxford, UK",
      "Prof. Fiorini Rodolfo from Politecnico di Milano University, Italy",
      "Prof. David Westwick from Schulich School of Engineering, University of Calgary, Canada",
      "Prof. C. Chandra Sekhar from IIT Madras, Chennai, India",
      "Mr. Aninda Bose, Senior Editor, Springer, New Delhi, India",
    ],
  },
  {
    year: "2017",
    edition: "1st",
    dates: "14th - 15th July 2017",
    venue: "Lakireddy Bali Reddy College of Engineering (Autonomous), Mylavaram",
    summary:
      "The First International Conference ICCIDE-2017 was conducted on 14-15 July 2017 at Lakireddy Bali Reddy College of Engineering (Autonomous), Mylavaram. The Proceedings of the Conference were published in Lecture Notes on Data Engineering and Communications Technologies (LNDECT) Series of SPRINGER.",
    proceedingsSeries: "Lecture Notes on Data Engineering and Communications Technologies (LNDECT) Series of SPRINGER",
    proceedingsUrl: "https://www.springer.com/in/book/9789811063183",
    speakers: [
      "Prof. Venu Govindaraju (University at Buffalo, USA)",
      "Prof. Stephen Marsland (Massey University, New Zealand)",
      "Prof. Agostino Cortesi (Ca’ Foscari University, Italy)",
      "Prof. D. Janakiram (IIT Madras, India)",
    ],
  },
];

export default function ConferenceHistoryPage() {
  return (
    <PageLayout heroTitle="Conference History" headingTitle="Conference History">
      <div className="font-serif space-y-8 text-[14px] sm:text-[15px] lg:text-[16px]">
        {historyData.map((conf) => (
          <div
            key={conf.year}
            className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#650010]/20 shadow-sm hover:border-[#650010] transition-colors space-y-4"
          >
            {/* Header: Edition & Dates */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#650010]/15 pb-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-[#650010] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {conf.edition} Edition
                </span>
                <h3 className="text-[#650010] font-bold text-[19px] sm:text-[22px]">
                  ICCIDE - {conf.year}
                </h3>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 bg-[#E6CFCF]/40 px-3 py-1 rounded-lg">
                {conf.dates}
              </span>
            </div>

            {/* Description & Venue */}
            <div className="space-y-2 text-gray-800 leading-relaxed">
              <p>{conf.summary}</p>
              <p className="text-sm">
                <strong className="text-[#650010]">Proceedings: </strong>
                <a
                  href={conf.proceedingsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#650010] underline font-medium hover:text-[#4a000b] wrap-break-word"
                >
                  {conf.proceedingsSeries}
                </a>
              </p>
            </div>

            {/* Keynote Speakers */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#650010] mb-2">
                Keynote Speakers
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-900 leading-snug">
                {conf.speakers.map((spk, idx) => (
                  <li key={idx} className="font-medium">
                    {spk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
