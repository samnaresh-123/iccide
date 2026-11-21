import { PageLayout } from "@/components/PageLayout";

export default function SchoolPage() {
  return (
    <PageLayout heroTitle="School" headingTitle="School of Computer Science and Engineering">
      <div className="space-y-4">
        <p className="text-[#650010] text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif font-medium">
          The School of Computer Science and Engineering at VIT-AP University offers cutting-edge programs in Computer Science, Information Technology, and related fields. It is committed to producing technically competent graduates with strong problem-solving skills and research aptitude.
        </p>
        <p className="text-[#650010] text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif font-medium">
          The school has state-of-the-art laboratories and fosters industry collaboration through internships, joint research projects, and expert lectures.
        </p>
      </div>
    </PageLayout>
  );
}
