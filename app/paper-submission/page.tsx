import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";

export default function PaperSubmissionPage() {
  return (
    <PageLayout heroTitle="Paper Submission" headingTitle="Paper Submission">
      <div className="px-3.75 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#650010]/20">
          <a
            className="text-[16px] sm:text-[20px] lg:text-[22px] text-[#650010] font-serif font-semibold hover:underline"
            href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
            target="_blank"
            rel="noreferrer"
          >
            Download the Author Instructions and Paper Template:
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 bg-[#650010] text-white px-5 py-2.5 rounded-xl font-sans font-semibold text-[13px] sm:text-[15px] shadow hover:bg-[#850015] transition-all hover:scale-105 shrink-0"
            href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
            target="_blank"
            rel="noreferrer"
          >
  
            <span>Download Template</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="pt-2 flex flex-col items-center justify-center gap-4">
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCIDE2026"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-105 inline-block"
          >
            <Image
              alt="Microsoft CMT Submission Portal"
              width={380}
              height={140}
              src="/cmt.png"
              className="h-auto w-auto max-w-[320px] sm:max-w-95"
            />
          </a>

          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCIDE2026"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#650010] text-white px-7 py-3 rounded-xl font-sans font-semibold text-[14px] sm:text-[16px] shadow-md hover:bg-[#850015] hover:shadow-lg transition-all hover:scale-105"
          >
            <span>Submit via Microsoft CMT</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#650010] font-serif mt-3.75 px-2.5 text-center sm:text-left">
          The Microsoft CMT service was used for managing the peer-reviewing
          process for this conference. This service was provided for free by
          Microsoft and they bore all expenses, including costs for Azure cloud
          services as well as for software development and support.
        </p>
      </div>
    </PageLayout>
  );
}
