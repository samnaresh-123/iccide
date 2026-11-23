import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";

export default function PresentSpeakersPage() {
  const dignitaries = [
    {
      role: "Chief Guest",
      name: "Prof. Laxmidhar Behera",
      designation: "Director, IIT Mandi",
      affiliation: "Kamand Campus, Distt. Mandi - 175075, Himachal Pradesh",
      img: "/speakers/laxmidhar-behera.jpg",
      time: "27th Nov, Inaugural Ceremony (09:30 AM)",
    },
    {
      role: "Guest of Honor",
      name: "Mr. G. Mallikarjuna Rao",
      designation: "Scientist",
      affiliation: "Research Centre Imarat (RCI), DRDO, Hyderabad",
      img: "/speakers/mallikarjuna-rao.jpg",
      time: "27th Nov, Inaugural Ceremony (09:30 AM)",
    },
  ];

  const keynoteSpeakers = [
    {
      name: "Prof. Piotr A. Kowalski",
      designation: "Professor",
      affiliation: "Faculty of Physics and Applied Computer Science, AGH University of Krakow, Poland",
      topic: "Sensitivity Analysis for Neural Network Interpretability and Pruning",
      time: "27th November, 11:00 AM IST",
      img: "/speakers/piotr-kowalski.jpg",
      badge: "Keynote Address I",
    },
    {
      name: "Mr. Satya Bharat Mudivarthi",
      designation: "Technology Fellow, Engineering as a Service",
      affiliation: "Deloitte – USI – Hyderabad, India",
      topic: "AI and Cloud Enterprise Adoption and the Future Engineer",
      time: "27th November, 2:00 PM IST",
      img: "/speakers/satya-bharat.jpg",
      badge: "Keynote Address II",
    },
    {
      name: "Dr. T V Gopal",
      designation: "Adjunct Professor",
      affiliation: "Department of Computer Science & Engineering and Artificial Intelligence, Mahindra University, Hyderabad – 500043, Telangana, India",
      topic: "Contextualisation and Interpretation of Data - A Data Spaces Perspective",
      time: "28th November, 10:00 AM IST",
      img: "/speakers/tv-gopal.jpg",
      badge: "Keynote Address III",
    },
    {
      name: "Ms. Sharon Suresh",
      designation: "Engineering Analyst",
      affiliation: "Google, Bengaluru, India",
      topic: "Adversarial Intelligence at Scale: Graph Topology, Behavioral Modeling, and Multimodal Forensics in Modern Fraud Detection",
      time: "28th November, 2:00 PM IST",
      img: "/speakers/sharon-suresh.jpg",
      badge: "Keynote Address IV",
    },
  ];

  return (
    <PageLayout heroTitle="Present Speakers" headingTitle="Present Speakers &amp; Dignitaries">
      <div className="space-y-10">

        {/* Section 1: Inauguration Dignitaries */}
        <div>
          <div className="border-b-2 border-[#650010] pb-2 mb-6">
            <h3 className="text-[#650010] font-bold text-[20px] sm:text-[22px] font-serif">
              Inaugural Dignitaries
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dignitaries.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-2xl p-6 shadow-md border-2 border-[#650010] flex flex-col sm:flex-row items-center sm:items-start gap-5"
              >
                <div className="w-32.5 h-32.5 sm:w-35 sm:h-35 relative rounded-full overflow-hidden border-4 border-[#650010] shrink-0 shadow-sm">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block bg-[#650010] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2">
                    {d.role}
                  </span>
                  <h4 className="text-[#650010] font-bold text-[18px] sm:text-[20px] font-serif">
                    {d.name}
                  </h4>
                  <p className="text-[14px] font-semibold text-gray-900 mt-1">
                    {d.designation}
                  </p>
                  <p className="text-[13px] text-gray-600 mt-1 leading-snug font-serif">
                    {d.affiliation}
                  </p>
                  <p className="text-[12px] font-semibold text-[#650010] mt-3 bg-[#E6CFCF]/40 p-2 rounded">
                    {d.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Keynote & Invited Speakers */}
        <div>
          <div className="border-b-2 border-[#650010] pb-2 mb-6">
            <h3 className="text-[#650010] font-bold text-[20px] sm:text-[22px] font-serif">
              Keynote &amp; Invited Speakers
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keynoteSpeakers.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-2xl p-6 shadow-md border border-[#650010]/30 hover:border-[#650010] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                    <div className="w-30 h-30 relative rounded-full overflow-hidden border-4 border-[#650010] shrink-0 shadow-sm">
                      <Image
                        src={s.img}
                        alt={s.name}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <span className="inline-block bg-[#650010] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-1">
                        {s.badge}
                      </span>
                      <h4 className="text-[#650010] font-bold text-[18px] font-serif">
                        {s.name}
                      </h4>
                      <p className="text-[13px] font-semibold text-gray-800 mt-0.5">
                        {s.designation}
                      </p>
                      <p className="text-[12px] text-gray-600 mt-1 leading-snug font-serif">
                        {s.affiliation}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-[13px] text-gray-500 font-semibold uppercase tracking-wide">
                      Session Topic:
                    </p>
                    <p className="text-[14px] font-serif font-semibold text-[#650010] mt-1 leading-snug">
                      &quot;{s.topic}&quot;
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-gray-200 flex items-center justify-between text-xs text-gray-700 bg-gray-50 p-2 rounded">
                  <span className="font-semibold text-[#650010]">Time:</span>
                  <span className="font-medium">{s.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
