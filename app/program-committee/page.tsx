import { PageLayout } from "@/components/PageLayout";

export default function Page() {
  const members = [
    { name: "Prof. Piotr A. Kowalski", affiliation: "Polish Academy of Sciences, Poland" },
    { name: "Prof. Rolf Drechsler", affiliation: "University of Bremen, Germany" },
    { name: "Dr. Chandrasekhar", affiliation: "NIT Warangal, India" },
    { name: "Dr. Venu Gopal", affiliation: "IIT Hyderabad, India" },
    { name: "Dr. Hemasundhar Reddy", affiliation: "VIT-AP University, India" },
    { name: "Dr. Rajkumar", affiliation: "University of Melbourne, Australia" },
    { name: "Dr. S. Mangai", affiliation: "VIT-AP University, India" },
    { name: "Dr. T. Venkat Narayana Rao", affiliation: "Sreenidhi Institute, India" },
    { name: "Dr. Pavan Kumar", affiliation: "NIT Rourkela, India" },
    { name: "Dr. Suresh Babu", affiliation: "JNTUH, India" },
    { name: "Dr. Ramesh Babu", affiliation: "GITAM University, India" },
    { name: "Dr. Swapna", affiliation: "VIT-AP University, India" },
    { name: "Dr. Sai Krishna", affiliation: "VIT-AP University, India" },
    { name: "Dr. Phani Kumar", affiliation: "VIT-AP University, India" },
    { name: "Dr. Sailaja", affiliation: "VIT-AP University, India" },
    { name: "Dr. Uma Devi", affiliation: "VIT-AP University, India" },
    { name: "Dr. Naga Raju", affiliation: "VIT University, India" },
    { name: "Dr. Srinivas", affiliation: "VIT-AP University, India" },
    { name: "Dr. Jaya Prakash", affiliation: "VIT-AP University, India" },
    { name: "Dr. Suresh", affiliation: "VIT-AP University, India" },
  ];
  return (
    <PageLayout heroTitle="Program Committee" headingTitle="Program Committee">
      <div className="overflow-x-auto">
        <table className="w-full text-[13px] sm:text-[14px] lg:text-[16px]">
          <thead>
            <tr className="bg-[#650010] text-white">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Affiliation</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#E6CFCF]/40"}>
                <td className="p-3 font-medium">{m.name}</td>
                <td className="p-3 text-gray-700">{m.affiliation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
