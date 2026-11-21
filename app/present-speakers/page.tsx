import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

export default function Page() {
  const speakers = [
    { img: "/present1.jpg", name: "Dr. Hemasundhar Reddy", title: "Associate Professor, VIT-AP University", talk: "Advances in Machine Learning" },
    { img: "/present3.png", name: "Prof. Piotr A. Kowalski", title: "Polish Academy of Sciences, Poland", talk: "Swarm Intelligence and Optimization" },
    { img: "/present4.jpg", name: "Dr. Rajkumar", title: "University of Melbourne, Australia", talk: "Cloud Computing Paradigms" },
  ];
  return (
    <PageLayout heroTitle="Present Speakers" headingTitle="Present Speakers">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-2">
        {speakers.map((s) => (
          <div key={s.name} className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow border border-[#E6CFCF]">
            <div className="w-[120px] h-[120px] relative rounded-full overflow-hidden border-4 border-[#650010]">
              <Image src={s.img} alt={s.name} fill sizes="120px" className="object-cover" />
            </div>
            <div>
              <p className="text-[#650010] font-semibold text-[15px] sm:text-[17px] font-serif">{s.name}</p>
              <p className="text-[13px] font-medium text-gray-700 mt-1">{s.title}</p>
              <p className="text-[12px] text-gray-500 mt-1 italic">{s.talk}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
