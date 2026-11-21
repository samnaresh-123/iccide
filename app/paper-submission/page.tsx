import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";

export default function PaperSubmissionPage() {
  return (
    <PageLayout heroTitle="Paper Submission" headingTitle="Paper Submission">
      <div className="font-serif space-y-4 text-[14px] sm:text-[16px] lg:text-[18px]">
        <p className="text-[#650010] font-semibold text-[16px] sm:text-[20px] lg:text-[22px]">
          Submit your paper via Microsoft CMT
        </p>
        <p>
          Authors are invited to submit original unpublished research papers not
          being considered elsewhere. Submissions must be in PDF format using the
          Springer LNCS template.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Papers must be written in English</li>
          <li>Maximum 12 pages (including references) in LNCS format</li>
          <li>All submissions will be peer-reviewed by at least 3 experts</li>
          <li>Authors of accepted papers must register and present</li>
        </ul>
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="https://cmt3.research.microsoft.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#650010] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4a000b] transition"
          >
            Submit via CMT
          </a>
          <a
            href="https://www.springer.com/gp/authors-editors/book-authors-editors/book-manuscript-guidelines"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-[#650010] text-[#650010] px-6 py-3 rounded-full font-semibold hover:bg-[#650010] hover:text-white transition"
          >
            LNCS Template
          </a>
        </div>
        <div className="relative w-full h-[200px] mt-4">
          <Image
            src="/cmt.png"
            alt="CMT submission portal"
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>
    </PageLayout>
  );
}
