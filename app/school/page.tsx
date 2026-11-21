import { PageLayout } from "@/components/PageLayout";

export default function SchoolPage() {
  return (
    <PageLayout heroTitle="School" headingTitle="School of Computer Science and Engineering">
      <div className="space-y-4">
        <h2 className="text-[#650010] font-bold text-3xl">VISION</h2>

        <p className="text-[#650010] text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif font-medium">
         To become one of the world’s premier teaching and research Schools in Computer Science and Engineering.
        </p>
        <h2 className="text-[#650010] font-bold text-3xl">MISSION</h2>
        <p className="text-[#650010] text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif font-medium">
         The School aims at imparting fundamental concepts in the core and emerging areas of Computer Science and Engineering and produce skilled, qualified, competent and ethical computer professionals with the ability to meet the demands of industry and society and also lead in academics, industry and community. 
        </p>
        <h2 className="text-[#650010] font-bold text-3xl">ABOUT SCHOOL</h2>
        <p className="text-[#650010] text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif font-medium">
         The Department of Computer Science and Engineering was established in 2017 and became the School of Computer Science and Engineering (SCOPE) in January 2019. At present, the School is headed by Dr. S Sudhakar Ilango. The School has qualified and committed faculty members who offer impressive instruction in a variety of modes, exploring experiential learning approaches and new pedagogical methods in order to provide proper learning to students. The school provides the necessary infrastructure, hardware, and software to support the faculty for their continuous learning and research.
        </p>
       
      </div>
    </PageLayout>
  );
}
