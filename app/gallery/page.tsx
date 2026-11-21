import { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { currentCampusPhotos, vitapGalleryAlbums } from "@/data/vitapGallery";

export const metadata: Metadata = {
  title: "Photo Gallery | ICCIDE 2026 - VIT-AP University",
  description:
    "Photo gallery and event archives of VIT-AP University and ICCIDE 2026.",
};

export default function GalleryPage() {
  const allPhotos = [
    // Current campus images (first 4 - without redirect)
    ...currentCampusPhotos.map((p) => ({
      id: p.id,
      title: p.title,
      image: p.src,
      href: null,
    })),
    // Images from https://vitap.ac.in/gallery (with redirect to vitap.ac.in album)
    ...vitapGalleryAlbums.map((a) => ({
      id: String(a.id),
      title: a.title,
      image: a.coverUrl,
      href: a.vitapUrl,
    })),
  ];

  return (
    <PageLayout heroTitle="Photo Gallery" headingTitle="Photo Gallery">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
        {allPhotos.map((photo) => {
          const cardContent = (
            <>
              {/* Image Container */}
              <div className="relative flex-1 w-full overflow-hidden bg-gray-100">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title Strip (styled after vitap.ac.in) */}
              <div className="bg-white py-2 px-2.5 text-center border-t border-gray-100 h-12 flex items-center justify-center">
                <p className="text-[#650010] text-[12px] sm:text-[13px] font-semibold line-clamp-2 leading-tight group-hover:underline">
                  {photo.title}
                </p>
              </div>
            </>
          );

          return photo.href ? (
            <a
              key={photo.id + photo.title}
              href={photo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-4/3 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white flex flex-col border border-white/60"
              title={`${photo.title} - View on VIT-AP`}
            >
              {cardContent}
            </a>
          ) : (
            <div
              key={photo.id + photo.title}
              className="group relative aspect-4/3 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col border border-white/60"
              title={photo.title}
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}
