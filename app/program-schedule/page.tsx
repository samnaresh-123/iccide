import { PageLayout } from "@/components/PageLayout";

export default function ProgramSchedulePage() {
  const day1Schedule = [
    {
      time: "08:30 AM - 09:30 AM",
      session: "Registration & Welcome Kit Distribution",
      speaker: "Organizing Committee",
      venue: "Registration Desk, Main Lobby",
    },
    {
      time: "09:30 AM - 10:45 AM",
      session: "Inaugural Ceremony",
      speaker: (
        <div>
          <p className="font-semibold text-[#650010]">Chief Guest: Prof. Laxmidhar Behera</p>
          <p className="text-xs text-gray-600">Director, IIT Mandi</p>
          <p className="font-semibold text-[#650010] mt-1">Guest of Honor: Mr. G. Mallikarjuna Rao</p>
          <p className="text-xs text-gray-600">Scientist, RCI, DRDO, Hyderabad</p>
        </div>
      ),
      venue: "Main Auditorium",
    },
    {
      time: "10:45 AM - 11:00 AM",
      session: "High Tea Break",
      speaker: "—",
      venue: "Foyer Area",
    },
    {
      time: "11:00 AM - 12:00 PM",
      session: "Keynote Address I",
      speaker: (
        <div>
          <p className="font-semibold text-[#650010]">Prof. Piotr A. Kowalski</p>
          <p className="text-xs text-gray-600">Professor, AGH University of Science &amp; Technology, Poland</p>
          <p className="text-xs italic text-gray-500 mt-0.5">Topic: Keynote Address</p>
        </div>
      ),
      venue: "Main Auditorium",
    },
    {
      time: "12:00 PM - 01:00 PM",
      session: "Technical Track I: Computational Intelligence (Oral Presentations)",
      speaker: "Paper Authors & Session Chairs",
      venue: "Seminar Halls 1 & 2",
    },
    {
      time: "01:00 PM - 02:00 PM",
      session: "Lunch Break",
      speaker: "—",
      venue: "University Cafeteria",
    },
    {
      time: "02:00 PM - 03:00 PM",
      session: "Keynote Address II",
      speaker: (
        <div>
          <p className="font-semibold text-[#650010]">Mr. Satya Bharat Mudivarthi</p>
          <p className="text-xs text-gray-600">Technology Fellow, Engineering as a Service, Deloitte USI</p>
          <p className="text-xs font-medium text-gray-800 mt-0.5">
            Topic: &quot;AI and Cloud Enterprise Adoption and the Future Engineer&quot;
          </p>
        </div>
      ),
      venue: "Main Auditorium",
    },
    {
      time: "03:00 PM - 05:00 PM",
      session: "Technical Track II: Data Engineering & Analytics (Oral Presentations)",
      speaker: "Paper Authors & Session Chairs",
      venue: "Seminar Halls 1 & 2",
    },
  ];

  const day2Schedule = [
    {
      time: "09:30 AM - 10:00 AM",
      session: "Morning Assembly & Announcements",
      speaker: "Session Coordinators",
      venue: "Main Auditorium",
    },
    {
      time: "10:00 AM - 11:00 AM",
      session: "Keynote Address III",
      speaker: (
        <div>
          <p className="font-semibold text-[#650010]">Dr. T V Gopal</p>
          <p className="text-xs text-gray-600">Adjunct Professor, Mahindra University, Hyderabad</p>
          <p className="text-xs font-medium text-gray-800 mt-0.5">
            Topic: &quot;Contextualisation and Interpretation of Data - A Data Spaces Perspective&quot;
          </p>
        </div>
      ),
      venue: "Main Auditorium",
    },
    {
      time: "11:00 AM - 11:15 AM",
      session: "Tea Break",
      speaker: "—",
      venue: "Foyer Area",
    },
    {
      time: "11:15 AM - 01:00 PM",
      session: "Technical Track III: Deep Learning, Cyber Security & IoT",
      speaker: "Paper Authors & Session Chairs",
      venue: "Seminar Halls 1 & 2",
    },
    {
      time: "01:00 PM - 02:00 PM",
      session: "Lunch Break",
      speaker: "—",
      venue: "University Cafeteria",
    },
    {
      time: "02:00 PM - 03:00 PM",
      session: "Keynote Address IV",
      speaker: (
        <div>
          <p className="font-semibold text-[#650010]">Ms. Sharon Suresh</p>
          <p className="text-xs text-gray-600">Engineering Analyst, Google, Bengaluru</p>
          <p className="text-xs font-medium text-gray-800 mt-0.5">
            Title: &quot;Adversarial Intelligence at Scale: Graph Topology, Behavioral Modeling, and Multimodal Forensics in Modern Fraud Detection&quot;
          </p>
        </div>
      ),
      venue: "Main Auditorium",
    },
    {
      time: "03:00 PM - 04:30 PM",
      session: "Technical Track IV: Emerging Trends in AI & Big Data",
      speaker: "Paper Authors & Session Chairs",
      venue: "Seminar Halls 1 & 2",
    },
    {
      time: "04:30 PM - 05:30 PM",
      session: "Valedictory Ceremony & Best Paper Awards",
      speaker: "Conference Chairs & Dignitaries",
      venue: "Main Auditorium",
    },
  ];

  return (
    <PageLayout heroTitle="Program Schedule" headingTitle="Conference Program Schedule">
      <div className="font-serif space-y-8 text-[14px] sm:text-[15px] lg:text-[16px]">
        
        {/* Intro */}
        <div className="bg-white p-4 rounded-xl border border-[#650010]/20 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            <p className="font-bold text-[#650010] text-[16px]">
              7th ICCIDE - 2026 Schedule
            </p>
            <p className="text-xs text-gray-600">
              Dates: 27th &amp; 28th November 2026 | All times are in Indian Standard Time (IST)
            </p>
          </div>
          <span className="bg-[#650010] text-white text-xs font-bold px-3 py-1 rounded-full">
            Confirmed Sessions
          </span>
        </div>

        {/* Day 1 */}
        <div>
          <div className="bg-[#650010] text-white px-4 py-3 rounded-t-xl font-bold flex justify-between items-center">
            <span>Day 1 — Friday, 27th November 2026</span>
            <span className="text-xs font-normal opacity-90">Inauguration &amp; Keynotes I &amp; II</span>
          </div>
          <div className="overflow-x-auto bg-white rounded-b-xl border border-gray-300 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wider border-b">
                  <th className="p-3 w-[22%]">Time (IST)</th>
                  <th className="p-3 w-[45%]">Session Details</th>
                  <th className="p-3 w-[33%]">Speaker / Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {day1Schedule.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#E6CFCF]/20"}>
                    <td className="p-3 font-semibold text-[#650010] whitespace-nowrap text-xs sm:text-sm">
                      {row.time}
                    </td>
                    <td className="p-3 font-medium text-gray-900">
                      {row.session}
                      <p className="text-[11px] text-gray-500 mt-0.5">Venue: {row.venue}</p>
                    </td>
                    <td className="p-3 text-sm">{row.speaker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Day 2 */}
        <div>
          <div className="bg-[#650010] text-white px-4 py-3 rounded-t-xl font-bold flex justify-between items-center">
            <span>Day 2 — Saturday, 28th November 2026</span>
            <span className="text-xs font-normal opacity-90">Keynotes III &amp; IV &amp; Valedictory</span>
          </div>
          <div className="overflow-x-auto bg-white rounded-b-xl border border-gray-300 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wider border-b">
                  <th className="p-3 w-[22%]">Time (IST)</th>
                  <th className="p-3 w-[45%]">Session Details</th>
                  <th className="p-3 w-[33%]">Speaker / Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {day2Schedule.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#E6CFCF]/20"}>
                    <td className="p-3 font-semibold text-[#650010] whitespace-nowrap text-xs sm:text-sm">
                      {row.time}
                    </td>
                    <td className="p-3 font-medium text-gray-900">
                      {row.session}
                      <p className="text-[11px] text-gray-500 mt-0.5">Venue: {row.venue}</p>
                    </td>
                    <td className="p-3 text-sm">{row.speaker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
