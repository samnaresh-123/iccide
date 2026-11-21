import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";

interface KeynoteSpeaker {
  topic: string;
  time: string;
  date: string;
  name: string;
  role: string;
  affiliation: string[];
  image: string;
}

const keynotes: KeynoteSpeaker[] = [
  {
    topic: "Keynote Address (Topic: To be announced)",
    time: "11:00 AM IST",
    date: "27th November 2026",
    name: "Prof. Piotr A. Kowalski",
    role: "Professor",
    affiliation: [
      "Faculty of Physics and Applied Computer Science",
      "AGH University of Science and Technology, Krakow, Poland",
    ],
    image: "/speakers/piotr-kowalski.jpg",
  },
  {
    topic: "AI and Cloud Enterprise Adoption and the Future Engineer",
    time: "02:00 PM IST",
    date: "27th November 2026",
    name: "Mr. Satya Bharat Mudivarthi",
    role: "Technology Fellow",
    affiliation: [
      "Engineering as a Service",
      "Deloitte – USI – Hyderabad, India",
    ],
    image: "/speakers/satya-bharat.jpg",
  },
  {
    topic:
      "Contextualisation and Interpretation of Data - A Data Spaces Perspective",
    time: "10:00 AM IST",
    date: "28th November 2026",
    name: "Dr. T V Gopal",
    role: "Adjunct Professor",
    affiliation: [
      "Department of Computer Science and Engineering & Artificial Intelligence",
      "Mahindra University, Survey No: 62/1A, Bahadurpally, Jeedimetla",
      "Hyderabad – 500043, Telangana, India",
    ],
    image: "/speakers/tv-gopal.jpg",
  },
  {
    topic:
      "Adversarial Intelligence at Scale: Graph Topology, Behavioral Modeling, and Multimodal Forensics in Modern Fraud Detection",
    time: "02:00 PM IST",
    date: "28th November 2026",
    name: "Ms. Sharon Suresh",
    role: "Engineering Analyst",
    affiliation: ["Google, Bengaluru, India"],
    image: "/speakers/sharon-suresh.jpg",
  },
];

export default function InvitationPage() {
  return (
    <PageLayout
      heroTitle="Inaugural Invitation"
      headingTitle="Inaugural Ceremony Invitation"
    >
      <div className="font-serif space-y-8 text-[14px] sm:text-[16px] lg:text-[17px] text-gray-800">
        {/* Header Invitation Note */}
        <div className="text-center py-5 border-b border-[#650010]/20 bg-white/60 rounded-2xl p-5 shadow-sm">
          <p className="text-[#650010] font-bold text-[20px] sm:text-[24px] lg:text-[28px] leading-tight">
            7th International Conference on Computational Intelligence &amp;
            Data Engineering
          </p>
          <p className="text-[#650010] font-semibold text-[16px] sm:text-[19px] mt-1">
            (ICCIDE - 2026)
          </p>
          <p className="mt-3 text-black font-medium italic text-[15px] sm:text-[17px]">
            Cordially invites you to the Inaugural Ceremony &amp; Distinguished
            Keynote Addresses
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-[#650010] text-white px-6 py-2 rounded-full mt-4 font-semibold text-xs sm:text-sm shadow">
            <span>Friday, 27th November 2026</span>
            <span>|</span>
            <span>09:30 AM IST</span>
          </div>
          <p className="text-xs sm:text-sm mt-3 text-gray-700 font-sans">
            <strong>Venue:</strong> Auditorium, VIT-AP University, Amaravati,
            Andhra Pradesh - 522241, India
          </p>
        </div>

        {/* Section 1: Inauguration Dignitaries */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 bg-[#650010] rounded-full" />
            <h2 className="text-[#650010] font-bold text-[20px] sm:text-[24px]">
              Inaugural Ceremony Dignitaries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chief Guest Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-[#650010] flex flex-col items-center text-center">
              <span className="bg-[#650010] text-white text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full mb-4">
                Chief Guest
              </span>
              <div className="w-37.5 h-37.5 relative rounded-full overflow-hidden border-4 border-[#650010] shadow-md mb-4 shrink-0">
                <Image
                  src="/speakers/laxmidhar-behera.jpg"
                  alt="Prof. Laxmidhar Behera"
                  fill
                  sizes="150px"
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-[#650010] font-bold text-[19px] sm:text-[21px]">
                Prof. Laxmidhar Behera
              </h3>
              <p className="text-[14px] font-semibold text-gray-900 mt-1">
                Director, IIT Mandi
              </p>
              <p className="text-[13px] text-gray-600 mt-2 leading-relaxed">
                Kamand Campus, Distt. Mandi - 175075
                <br />
                Himachal Pradesh, India
              </p>
            </div>

            {/* Guest of Honor Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-[#650010] flex flex-col items-center text-center">
              <span className="bg-[#650010] text-white text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full mb-4">
                Guest of Honor
              </span>
              <div className="w-37.5 h-37.5 relative rounded-full overflow-hidden border-4 border-[#650010] shadow-md mb-4 shrink-0">
                <Image
                  src="/speakers/mallikarjuna-rao.jpg"
                  alt="Mr. G. Mallikarjuna Rao"
                  fill
                  sizes="150px"
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-[#650010] font-bold text-[19px] sm:text-[21px]">
                Mr. G. Mallikarjuna Rao
              </h3>
              <p className="text-[14px] font-semibold text-gray-900 mt-1">
                Scientist
              </p>
              <p className="text-[13px] text-gray-600 mt-2 leading-relaxed">
                Research Centre Imarat (RCI)
                <br />
                DRDO, Hyderabad, India
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Keynote Addresses */}
        <div className="space-y-4 pt-2">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keynotes.map((spk, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md border border-[#650010]/30 hover:border-[#650010] transition-colors flex flex-col justify-between space-y-4"
              >
                <div>
                  {/* Timing & Badge */}
                  <div className="flex items-center justify-between gap-2 flex-wrap border-b border-[#650010]/15 pb-2.5 mb-3.5">
                    <span className="bg-[#650010] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                      Keynote Session
                    </span>
                    <span className="text-xs font-semibold text-[#650010] bg-[#E6CFCF]/50 px-2.5 py-0.5 rounded-md">
                      {spk.date} | {spk.time}
                    </span>
                  </div>

                  {/* Speaker Details */}
                  <div className="flex items-center gap-4">
                    <div className="w-27.5 h-27.5 relative rounded-full overflow-hidden border-4 border-[#650010] shrink-0 shadow-sm">
                      <Image
                        src={spk.image}
                        alt={spk.name}
                        fill
                        sizes="110px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#650010] font-bold text-[17px] sm:text-[19px] leading-snug">
                        {spk.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900 mt-0.5">
                        {spk.role}
                      </p>
                      {spk.affiliation.map((line, lIdx) => (
                        <p
                          key={lIdx}
                          className="text-[11px] sm:text-xs text-gray-600 leading-tight mt-0.5"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Topic / Title Box */}
                <div className="bg-[#E6CFCF]/30 p-3 rounded-xl border border-[#650010]/20">
                  <p className="text-xs font-bold text-[#650010] uppercase tracking-wider">
                    Topic / Address Title:
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 mt-1 leading-snug italic">
                    &ldquo;{spk.topic}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note to Attendees */}
        <div className="bg-white/80 p-4 rounded-xl border border-[#650010]/30 text-center text-xs sm:text-sm text-gray-700 space-y-1">
          <p className="font-semibold text-[#650010]">
            All participants, registered authors, and delegates are cordially
            invited to attend the sessions.
          </p>
          <p className="text-gray-600">
            Please be seated 15 minutes prior to the commencement of each
            scheduled session.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
