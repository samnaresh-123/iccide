import { PageLayout } from "@/components/PageLayout";

const day1 = [
  { time: "9:00 – 9:45 AM",      event: "Registration" },
  { time: "10:00 – 11:30 AM",    event: "Inaugural Ceremony" },
  { time: "11:30 – 11:45 AM",    event: "High Tea" },
  {
    time: "11:45 AM – 12:30 PM",
    event: "Keynote #01",
    detail:
      "Prof. Piotr Andrzej Kowalski — AGH University of Krakow\n" +
      "Coordinator: Prof. Deepthi Godavarthi | Venue: AB2 Auditorium (Tanguturi Prakasham Auditorium)",
    talk: "Sensitivity Analysis for Neural Network Interpretability and Pruning",
  },
  {
    time: "12:30 – 1:30 PM",
    event: "Technical Sessions 1, 2 & 3",
    detail:
      "Session 1 (Offline · CB-318A) — Coordinator: Prof. Arindam Dey | Chair 1: Prof. Edara Sreenivasa Reddy | Chair 2: Prof. Reeja S. R. | Papers: 17, 101, 276\n" +
      "Session 2 (Offline · CB-318B) — Coordinator: Prof. Azees Maria John Francis | Chair 1: Prof. Hari Seetha | Chair 2: Prof. Kuppusamy P | Papers: 311, 406, 410\n" +
      "Session 3 (Offline · CB-305) — Coordinator: Dr. Prakash Kumar Sarangi | Chair 1: Prof. Prabha Selvaraj | Chair 2: Prof. Kareemulla Shaik | Papers: 278, 425, 451",
  },
  { time: "1:30 – 2:30 PM",      event: "Lunch Break" },
  {
    time: "2:30 – 3:30 PM",
    event: "Keynote #02",
    detail:
      "Mr. SatyaBharat Mudivarthi — Technology Fellow, Engineering as a Service, Deloitte – USI – Hyderabad\n" +
      "Coordinator: Prof. Amgothu Shanthi | Venue: Mahatma Gandhi Block (CB)-305",
    talk: "AI and Cloud Enterprise Adoption and the Future Engineer",
  },
  { time: "3:30 – 3:45 PM",      event: "Coffee Break" },
  {
    time: "3:45 – 5:00 PM",
    event: "Technical Sessions 4, 5 & 6",
    detail:
      "Session 4 (Offline · CB-318A) — Coordinator: Prof. P. Lalitha Kumari | Chair 1: Prof. G. Muneeswari | Chair 2: Prof. Surendra Reddy Vinta | Papers: 458, 467, 542\n" +
      "Session 5 (Offline · CB-318B) — Coordinator: Prof. Bolem Sai Chandana | Chair 1: Prof. Suresh Dara | Chair 2: Prof. Aravapalli Rama Satish | Papers: 444, 457, 494\n" +
      "Session 6 (Offline · CB-305) — Coordinator: Dr. Saroja Kumar Rout | Chair 1: Prof. Mithilesh Kumar Dubey | Chair 2: Prof. Tauseef Khan | Papers: 496, 511, 527",
  },
  { time: "5:00 – 6:00 PM",      event: "Cultural Programme" },
  { time: "7:00 PM",             event: "Gala Dinner" },
];

const day2 = [
  {
    time: "10:00 – 11:00 AM",
    event: "Keynote #03",
    detail:
      "Dr. T V Gopal — Adjunct Professor, Dept. of CS & AI, Mahindra University, Hyderabad, India\n" +
      "Coordinator: Prof. Ganji Tejasree | Venue: Mahatma Gandhi Block (CB)-305",
    talk: "Contextualisation and Interpretation of Data - A Data Spaces Perspective",
  },
  { time: "11:00 – 11:30 AM",    event: "Coffee Break" },
  {
    time: "11:30 AM – 1:00 PM",
    event: "Technical Sessions 7, 8 & 9",
    detail:
      "Session 7 (Offline · CB-318A) — Coordinator: Prof. Asish Kumar Dalai | Chair 1: Prof. Bharathi V C | Chair 2: Prof. Tarun Narayan Shankar | Papers: 316, 375, 443, 448, 550\n" +
      "Session 8 (Offline · CB-305) — Coordinator: Dr. Srikanth Busa | Chair 1: Prof. Pamulapati Ashok Reddy | Chair 2: Prof. Kumar Debasis | Papers: 378, 402, 409, 533\n" +
      "Session 9 (Online · CB-318B) — Coordinator: Prof. Kartika Natarajan | Chair 1: Prof. Anil Vitthalrao Turukmane | Chair 2: Prof. Harikiran Jonnadula | Papers: 11, 59, 61, 66, 118, 262, 275, 548\n" +
      "Session 9 Meeting link: https://meet.google.com/mzh-skiw-ctw",
  },
  { time: "1:00 – 2:00 PM",      event: "Lunch Break" },
  {
    time: "2:00 – 3:00 PM",
    event: "Keynote #04",
    detail:
      "Ms. Sharon Suresh — Google Lab, Pune, India\n" +
      "Coordinator: Dr. Bellamkonda Lakshmi Praveena | Venue: Mahatma Gandhi Block (CB)-305",
    talk: "Adversarial Intelligence at Scale: Graph Topology, Behavioral Modeling, and Multimodal Forensics in Modern Fraud Detection",
  },
  { time: "3:00 – 3:30 PM",      event: "Coffee Break" },
  {
    time: "2:30 – 4:00 PM",
    event: "Technical Sessions 10 & 11",
    detail:
      "Session 10 (Online · CB-318A) — Coordinator: Prof. Monali Bordoloi | Chair 1: Prof. Ganesh Reddy Karri | Chair 2: Prof. R. Nanda Kumar | Papers: 279, 293, 345, 346, 367, 411, 476, 207\n" +
      "Session 10 Meeting link: https://meet.google.com/qkt-dnyo-fdx\n" +
      "Session 11 (Online · CB-318B) — Coordinator: Prof. Marriboyina Sreedevi | Chair 1: Prof. Eswaraiah Rayachoti | Chair 2: Prof. Udit Narayan Kar | Chair 3: Prof. Anand J Kulkarni (MIT Pune) (70301 29900) | Papers: 248, 499, 536, 537, 555, 563, 552\n" +
      "Session 11 Meeting link: https://meet.google.com/uoh-xkze-xfz",
  },
  { time: "4:00 – 4:30 PM",      event: "Valedictory Session" },
];

type Row = {
  time: string;
  event: string;
  detail?: string;
  talk?: string;
};

/**
 * Renders a detail line:
 *  - bolds the mode/venue token, e.g. (Offline · CB-318A) or (Online · CB-318B)
 *  - turns any https:// URL into a clickable link
 */
function DetailLine({ text }: { text: string }) {
  const parts = text.split(/(\((?:Offline|Online) · CB-[^)]+\)|https?:\/\/\S+)/g);
  return (
    <p className="text-xs text-gray-600 mt-0.5 wrap-break-word">
      {parts.map((part, i) => {
        if (/^\((?:Offline|Online) · CB-[^)]+\)$/.test(part)) {
          return <strong key={i} className="font-bold text-gray-800">{part}</strong>;
        }
        if (/^https?:\/\//.test(part)) {
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#650010] underline font-medium"
            >
              {part}
            </a>
          );
        }
        return part;
      })}
    </p>
  );
}

function ScheduleTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-b-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wider border-b">
            <th className="p-3 w-[20%]">Time (IST)</th>
            <th className="p-3">Event / Details</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="p-3 font-medium text-[#650010] whitespace-nowrap align-top text-xs sm:text-sm">
                {row.time || "—"}
              </td>
              <td className="p-3 align-top">
                <p className="font-semibold text-gray-900">{row.event}</p>
                {row.detail &&
                  row.detail.split("\n").map((line, i) => (
                    <DetailLine key={i} text={line} />
                  ))}
                {row.talk && (
                  <p className="text-xs text-gray-700 mt-0.5 italic">&ldquo;{row.talk}&rdquo;</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProgramSchedulePage() {
  return (
    <PageLayout heroTitle="Program Schedule" headingTitle="Conference Program Schedule">
      <div className="font-serif space-y-8 text-[14px] sm:text-[15px]">

        <div className="bg-white p-4 rounded-xl border border-[#650010]/20 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            <p className="font-bold text-[#650010] text-[16px]">7th ICCIDE – 2026 Schedule</p>
            <p className="text-xs text-gray-600 mt-0.5">
              27th &amp; 28th November 2026 &nbsp;|&nbsp; All times are Indian Standard Time (IST)
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              Technical session venue: Mahatma Gandhi Block (CB), Rooms 318 A, 318 B &amp; 305
            </p>
          </div>
        </div>

        {/* Day 1 */}
        <div>
          <div className="bg-[#650010] text-white px-4 py-3 rounded-t-xl font-bold flex flex-wrap justify-between items-center gap-1">
            <span>Day 1 — Friday, 27th November 2026</span>
            <span className="text-xs font-normal opacity-80">Venue: AB2 Auditorium (Tanguturi Prakasham Auditorium)</span>
          </div>
          <ScheduleTable rows={day1} />
        </div>

        {/* Day 2 */}
        <div>
          <div className="bg-[#650010] text-white px-4 py-3 rounded-t-xl font-bold">
            Day 2 — Saturday, 28th November 2026
          </div>
          <ScheduleTable rows={day2} />
        </div>

      </div>
    </PageLayout>
  );
}