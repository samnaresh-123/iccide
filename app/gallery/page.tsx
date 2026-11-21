import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

export default function Page() {
  const photos = [
    "/AB1.avif", "/AB2.avif", "/Cafeteria.avif", "/banner1.avif",
  ];
  return (
    <PageLayout heroTitle="Photo Gallery" headingTitle="Photo Gallery">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((p) => (
          <div key={p} className="relative h-30 sm:h-37.5 lg:h-45 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
            <Image src={p} alt="Gallery photo" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
