import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

export default function Page() {
  const photos = [
    "/2/2017prof2.avif", "/2/2017prof3.avif", "/2/2017prof4.avif",
    "/2/2018prof1.avif", "/2/2018prof2.avif", "/2/2018prof3.avif",
    "/2/2020prof2.avif", "/2/2020prof3.avif", "/2/2020prof4.avif",
    "/2/2021prof1.avif", "/2/2021prof3.avif", "/2/2021prof4.avif",
    "/AB1.avif", "/AB2.avif", "/Cafeteria.avif", "/banner1.avif",
  ];
  return (
    <PageLayout heroTitle="Photo Gallery" headingTitle="Photo Gallery">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((p) => (
          <div key={p} className="relative h-[120px] sm:h-[150px] lg:h-[180px] rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
            <Image src={p} alt="Gallery photo" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
