import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";

export default function BrochurePage() {
  return (
    <PageLayout heroTitle="Brochure" headingTitle="Brochure">
      <div className="w-full flex flex-col items-center gap-6 py-2">
        {/* Action Buttons for downloading or viewing full size */}
        <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#650010]/20">
          <p className="text-[14px] sm:text-[16px] font-serif font-semibold text-[#650010]">
            7th International Conference on Computational Intelligence and Data Engineering (ICCIDE – 2026)
          </p>
          
        </div>

        {/* Brochure Image Display */}
        <div className="w-full max-w-2xl bg-white p-2 sm:p-4 rounded-2xl shadow-md border border-[#650010]/20 flex justify-center">
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src="/brochure.jpg"
              alt="ICCIDE-2026 Conference Brochure"
              width={1024}
              height={1024}
              priority
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
