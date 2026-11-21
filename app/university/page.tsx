import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

export default function UniversityPage() {
  return (
    <PageLayout heroTitle="University" headingTitle="VIT-AP University">
      <div className="space-y-4">
        <p className="text-[#650010] text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif font-medium">
          VIT-AP University (Vellore Institute of Technology, Andhra Pradesh) is a private deemed university established in 2017 at Amaravati, Andhra Pradesh, India. It is a constituent of the VIT Group of Institutions and is recognised by the University Grants Commission (UGC) of India.
        </p>
        <p className="text-[#650010] text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif font-medium">
          The university offers undergraduate, postgraduate, and doctoral programs across various disciplines, with a strong emphasis on research and innovation.
        </p>
        <div className="flex gap-4">
          <div className="relative w-full h-[200px] mt-4">
            <Image src="/AB1.avif" alt="VIT-AP Campus" fill sizes="50vw" className="object-cover rounded" />
          </div>
          <div className="relative w-full h-[200px] mt-4">
            <Image src="/AB2.avif" alt="VIT-AP Campus" fill sizes="50vw" className="object-cover rounded" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
