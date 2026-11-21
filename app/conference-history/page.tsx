import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

export default function Page() {
  const editions = [
    { year: "2024", edition: "6th", venue: "VIT-AP University", imgs: [] },
    { year: "2022", edition: "5th", venue: "VIT-AP University (Online)", imgs: [] },
    { year: "2021", edition: "4th", venue: "VIT-AP University (Online)", imgs: ["/2/2021prof1.avif", "/2/2021prof3.avif", "/2/2021prof4.avif", "/2/2021prof5.avif"] },
    { year: "2020", edition: "3rd", venue: "VIT-AP University (Online)", imgs: ["/2/2020prof2.avif", "/2/2020prof3.avif", "/2/2020prof4.avif", "/2/2020prof5.avif"] },
    { year: "2018", edition: "2nd", venue: "VIT-AP University", imgs: ["/2/2018prof1.avif", "/2/2018prof2.avif", "/2/2018prof3.avif", "/2/2018prof5.avif"] },
    { year: "2017", edition: "1st", venue: "VIT-AP University", imgs: ["/2/2017prof2.avif", "/2/2017prof3.avif", "/2/2017prof4.avif"] },
  ];
  return (
    <PageLayout heroTitle="Conference History" headingTitle="Conference History">
      <div className="space-y-8">
        {editions.map(({ year, edition, venue, imgs }) => (
          <div key={year} className="border-b border-[#650010]/20 pb-6">
            <h3 className="text-[#650010] font-semibold font-serif text-[18px] sm:text-[20px] mb-1">ICCIDE-{year} ({edition} Edition)</h3>
            <p className="text-gray-600 text-[14px] mb-3">Venue: {venue}</p>
            {imgs.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {imgs.map((img) => (
                  <div key={img} className="relative h-[80px] sm:h-[100px] rounded overflow-hidden">
                    <Image src={img} alt={`ICCIDE ${year}`} fill sizes="25vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
