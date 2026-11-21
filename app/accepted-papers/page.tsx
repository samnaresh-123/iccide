import { PageLayout } from "@/components/PageLayout";

export default function AcceptedPapersPage() {
  return (
    <PageLayout heroTitle="Accepted Papers" headingTitle="Accepted Papers">
      <div className="font-serif space-y-4 text-[14px] sm:text-[16px] lg:text-[18px]">
        <p className="text-[#650010] font-semibold text-[18px] sm:text-[22px]">
          List of Accepted Papers
        </p>
        <p className="text-black">
          The list of accepted papers will be published after the review process
          is complete. Authors will be notified by 30th October 2026.
        </p>
        <div className="mt-4 p-6 bg-white rounded-xl border-2 border-[#650010]/20 text-center">
          <p className="text-[#650010] font-semibold text-[18px]">
            Results Awaited
          </p>
          <p className="text-gray-600 mt-2">
            Submission deadline: 30th September 2026
          </p>
          <p className="text-gray-600">Notification date: 30th October 2026</p>
        </div>
      </div>
    </PageLayout>
  );
}
