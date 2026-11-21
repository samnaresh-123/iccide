import { PageLayout } from "@/components/PageLayout";

export default function RegistrationPage() {
  return (
    <PageLayout heroTitle="Registration" headingTitle="Registration">
      <table className="border border-gray-500 text-[10px] sm:text-[14px] lg:text-[16px] max-w-187.5">
        <thead>
          <tr>
            <th className="p-2 sm:p-5 border border-gray-500">Category</th>
            <th className="p-2 sm:p-5 border border-gray-500">From India</th>
            <th className="p-2 sm:p-5 border border-gray-500">From Abroad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 sm:p-5 border border-gray-500">Academicians/Research Scholars</td>
            <td className="p-2 sm:p-5 border border-gray-500">INR 10000/-</td>
            <td className="p-2 sm:p-5 border border-gray-500">USD 300</td>
          </tr>
          <tr>
            <td className="p-2 sm:p-5 border border-gray-500">Listeners</td>
            <td className="p-2 sm:p-5 border border-gray-500">INR 2000/-</td>
            <td className="p-2 sm:p-5 border border-gray-500">USD 100</td>
          </tr>
          <tr>
            <td className="p-2 sm:p-5 border border-gray-500">Industrial Persons</td>
            <td className="p-2 sm:p-5 border border-gray-500">INR 12,000/-</td>
            <td className="p-2 sm:p-5 border border-gray-500">USD 400</td>
          </tr>
        </tbody>
      </table>
    </PageLayout>
  );
}
