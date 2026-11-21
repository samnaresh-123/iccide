import { PageLayout } from "@/components/PageLayout";

export default function ProgramSchedulePage() {
  return (
    <PageLayout heroTitle="Program Schedule" headingTitle="Program Schedule">
      <div className="font-serif space-y-4 text-[14px] sm:text-[16px] lg:text-[18px]">
        <p className="text-[#650010] font-semibold text-[18px] sm:text-[22px]">
          Conference Program Schedule
        </p>
        <p className="text-black">
          The detailed program schedule will be updated soon. Please check back
          closer to the conference dates.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="border border-gray-500 text-[12px] sm:text-[14px] lg:text-[16px] w-full">
            <thead>
              <tr className="bg-[#650010] text-white">
                <th className="p-3 border border-gray-400 text-left">Time</th>
                <th className="p-3 border border-gray-400 text-left">
                  Day 1 - 27th Nov 2026
                </th>
                <th className="p-3 border border-gray-400 text-left">
                  Day 2 - 28th Nov 2026
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-500">09:00 - 10:00</td>
                <td className="p-3 border border-gray-500">
                  Registration &amp; Inauguration
                </td>
                <td className="p-3 border border-gray-500">Keynote Session II</td>
              </tr>
              <tr className="bg-[#E6CFCF]/30">
                <td className="p-3 border border-gray-500">10:00 - 11:00</td>
                <td className="p-3 border border-gray-500">Keynote Session I</td>
                <td className="p-3 border border-gray-500">
                  Technical Session III
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-500">11:00 - 11:15</td>
                <td className="p-3 border border-gray-500">Tea Break</td>
                <td className="p-3 border border-gray-500">Tea Break</td>
              </tr>
              <tr className="bg-[#E6CFCF]/30">
                <td className="p-3 border border-gray-500">11:15 - 13:00</td>
                <td className="p-3 border border-gray-500">
                  Technical Session I
                </td>
                <td className="p-3 border border-gray-500">
                  Technical Session IV
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-500">13:00 - 14:00</td>
                <td className="p-3 border border-gray-500">Lunch Break</td>
                <td className="p-3 border border-gray-500">Lunch Break</td>
              </tr>
              <tr className="bg-[#E6CFCF]/30">
                <td className="p-3 border border-gray-500">14:00 - 16:00</td>
                <td className="p-3 border border-gray-500">
                  Technical Session II
                </td>
                <td className="p-3 border border-gray-500">
                  Technical Session V &amp; Valedictory
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
