import { PageLayout } from "@/components/PageLayout";

export default function ImportantDatesPage() {
  return (
    <PageLayout heroTitle="Important Dates" headingTitle="Important Dates">
      <table className="text-[10px] sm:text-[14px] lg:text-[16px]">
        <tbody>
          <tr>
            <th className="p-2 sm:p-5 text-[12px] font-medium sm:text-[16px] lg:text-[18px] text-left">
              Submission Deadline
            </th>
            <td className="p-2 sm:p-5 text-[12px] font-bold sm:text-[16px] lg:text-[18px]">
              <span style={{ textDecoration: "line-through", color: "#888" }}>15th September 2026</span>
              <br />
              <span style={{ color: "#0a7d2c", textDecoration: "line-through" }}>Extended to 30th September 2026</span>
            </td>
          </tr>
          <tr>
            <th className="p-2 sm:p-5 text-[12px] font-medium sm:text-[16px] lg:text-[18px] text-left">
              Author Notification
            </th>
            <td className="p-2 sm:p-5 text-[12px] font-bold sm:text-[16px] lg:text-[18px]" style={{ textDecoration: "line-through", color: "#0a7d2c" }}>
              30th October 2026
            </td>
          </tr>
          <tr>
            <th className="p-2 sm:p-5 text-[12px] font-medium sm:text-[16px] lg:text-[18px] text-left">
              Camera Ready Submission &amp; Author Registration
            </th>
            <td className="p-2 sm:p-5 text-[12px] font-bold sm:text-[16px] lg:text-[18px]" style={{ textDecoration: "line-through", color: "#0a7d2c" }}>
              15th November 2026
            </td>
          </tr>
          <tr>
            <th className="p-2 sm:p-5 text-[12px] font-medium sm:text-[16px] lg:text-[18px] text-left">
              Conference Dates
            </th>
            <td className="p-2 sm:p-5 text-[12px] font-bold sm:text-[16px] lg:text-[18px]" >
              27th &amp; 28th November 2026
            </td>
          </tr>
        </tbody>
      </table>
    </PageLayout>
  );
}
