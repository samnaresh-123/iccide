import { PageLayout } from "@/components/PageLayout";

export default function Page() {
  const members = [
    { role: "Chief Patron", name: "Dr. G. Viswanathan", designation: "Chancellor, VIT Group of Institutions" },
    { role: "Patron", name: "Mr. Sankar Viswanathan", designation: "Vice President, VIT Group" },
    { role: "Patron", name: "Mr. Sekar Viswanathan", designation: "Vice President, VIT Group" },
    { role: "Patron", name: "Dr. G. V. Selvam", designation: "Vice President, VIT Group" },
    { role: "Patron", name: "Dr. S. Narayanan", designation: "Vice Chancellor, VIT-AP University" },
    { role: "Conference Chair", name: "Dr. Nagaraju Devarakonda", designation: "Professor & Dean, VIT-AP" },
    { role: "Organizing Chair", name: "Dr. K. Venkatesh Sharma", designation: "Professor, VIT-AP" },
    { role: "Organizing Secretary", name: "Dr. Hemasundhar Reddy", designation: "Associate Professor, VIT-AP" },
    { role: "Publication Chair", name: "Dr. Rajkumar Buyya", designation: "Professor, University of Melbourne" },
    { role: "Technical Chair", name: "Dr. Rajkumar", designation: "Senior Researcher" },
  ];
  return (
    <PageLayout heroTitle="Organizing Committee" headingTitle="Organizing Committee">
      <div className="overflow-x-auto">
        <table className="w-full text-[13px] sm:text-[14px] lg:text-[16px]">
          <thead>
            <tr className="bg-[#650010] text-white">
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Designation</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#E6CFCF]/40"}>
                <td className="p-3 font-semibold text-[#650010]">{m.role}</td>
                <td className="p-3 font-medium">{m.name}</td>
                <td className="p-3 text-gray-700">{m.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
