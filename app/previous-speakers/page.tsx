import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

export default function Page() {
  const years = [
    { year: "2017", imgs: ["/2/2017prof2.avif", "/2/2017prof3.avif", "/2/2017prof4.avif"] },
    { year: "2018", imgs: ["/2/2018prof1.avif", "/2/2018prof2.avif", "/2/2018prof3.avif"] },
    { year: "2020", imgs: ["/2/2020prof2.avif", "/2/2020prof3.avif", "/2/2020prof4.avif"] },
    { year: "2021", imgs: ["/2/2021prof1.avif", "/2/2021prof3.avif", "/2/2021prof4.avif"] },
  ];
  return (
    <PageLayout heroTitle="Previous Speakers" headingTitle="Previous Speakers">
      <div className="space-y-8">
        {years.map(({ year, imgs }) => (
          <div key={year}>
            <h3 className="text-[#650010] font-semibold font-serif text-[18px] sm:text-[20px] mb-3">ICCIDE - {year}</h3>
            <div className="grid grid-cols-3 gap-3">
              {imgs.map((img) => (
                <div key={img} className="relative h-[100px] sm:h-[140px] lg:h-[160px] rounded-lg overflow-hidden">
                  <Image src={img} alt={`ICCIDE ${year} speaker`} fill sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
