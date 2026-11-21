import { PageLayout } from "@/components/PageLayout";

export default function Page() {
  const members = [
    { role: "Chief Patron", name: "Dr. G. Viswanathan", designation: "Chancellor, VIT University" },
    { role: "Patron", name: "Mr. Sankar Viswanathan", designation: "Vice President, VIT University" },
    { role: "Patron", name: "Dr. Sekar Viswanathan", designation: "Vice President, VIT University" },
    { role: "Patron", name: "Dr. G. V. Selvam", designation: "Vice President, VIT University" },
    { role: "Patron", name: "Dr. P. Arulmozhivarman", designation: "Vice Chancellor, VIT-AP University" },
    { role: "Patron", name: "Dr. Jagadish Chandra Mudiganti", designation: "Registrar, VIT-AP University" },
    { role: "Conference Chair", name: "Dr. Nagaraju Devarakonda", designation: "VIT-AP University" },
    { role: "Publication Chair", name: "Dr. Nabendu Chaki", designation: "University of Calcutta, India" },
    { role: "Publication Chair", name: "Dr. Agostino Cortesi", designation: "Ca Foscari University, Venice, Italy" },
    { role: "Publication Chair", name: "Dr. Valli Kumari Vatsavayi", designation: "Andhra University, India" },
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
