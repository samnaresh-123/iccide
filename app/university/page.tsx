import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

const schoolsColumn1 = [
  { name: "School of Computer Science & Engineering", href: "https://vitap.ac.in/allschools/SCOPE" },
  { name: "School of Electronics Engineering", href: "https://vitap.ac.in/allschools/SENSE" },
  { name: "School of Mechanical Engineering", href: "https://vitap.ac.in/allschools/SMEC" },
  { name: "School of Advanced Sciences", href: "https://vitap.ac.in/allschools/SAS" },
];

const schoolsColumn2 = [
  { name: "School of Business", href: "https://vitap.ac.in/allschools/VSB" },
  { name: "School of Law", href: "https://vitap.ac.in/allschools/VSL" },
  { name: "School of Social Sciences and Humanities", href: "https://vitap.ac.in/allschools/VISH" },
  { name: "School of Bio Sciences and Technology", href: "https://vitap.ac.in/allschools/sbst" },
];

const galleryImages = [
  { src: "/3.avif", alt: "VIT-AP Campus 1" },
  { src: "/pic1.avif", alt: "VIT-AP Campus 2" },
  { src: "/pic2.avif", alt: "VIT-AP Campus 3" },
  { src: "/banner1.avif", alt: "VIT-AP Campus 4" },
];

export default function UniversityPage() {
  return (
    <>
      <PageLayout heroTitle="About VIT-AP University" headingTitle="About University">
        <div className="p-3.75">
          <p className="text-[#650010] text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif font-medium leading-relaxed">
            VIT-AP University, founded under the eminent guidance of Founder and Chancellor Dr. G Viswanathan, is emerging as one of the promising and prominent academic institutes of India. Despite being a quite young institute, the excellent and unique quality of teaching-learning, research and innovations shows the aspiration of the institute to become a global level institute. VIT-AP attracts students from almost all the states of India because of its academic excellence. VIT-AP has introduced many innovations in the academic process including FFCS (Fully Flexible Credit System), PBL (Project Based Learning), fully digitized academic portals that assist students in equipping themselves for the futuristic world. Hackathons / Makeathons are part of the university curriculum kindles the interest and curiosity of the students towards new innovations.
          </p>
        </div>
      </PageLayout>

      {/* Eight Prominent Schools Section */}
      <section className="w-full">
        <div className="px-5 sm:px-12.5 lg:px-25 py-7.5 sm:py-10 lg:py-12.5">
          <div className="w-full text-center">
            <div className="inline-block cursor-pointer">
              <h2 className="px-5 py-3.75 sm:py-5.5 lg:py-7 bg-[#650010] text-[16px] sm:text-[20px] lg:text-[24px] text-white font-sans font-bold rounded-3xl">
                The University comprises of eight prominent schools namely
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 pt-6 sm:pt-8.75 lg:pt-11 gap-y-2.5 sm:gap-x-6 lg:gap-x-9">
            {/* Column 1 */}
            <div className="flex flex-col gap-2.5 md:gap-5">
              {schoolsColumn1.map((school) => (
                <a
                  key={school.name}
                  href={school.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center cursor-pointer"
                >
                  <p className="px-1.25 md:px-7.5 xl:px-14.5 py-3 sm:py-4 lg:py-5 text-[#650010] border-4 border-[#650010] hover:bg-[#650010] rounded-3xl text-[14px] sm:text-[16px] lg:text-[20px] hover:text-white font-sans font-medium transition-colors">
                    {school.name}
                  </p>
                </a>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2.5 md:gap-5">
              {schoolsColumn2.map((school) => (
                <a
                  key={school.name}
                  href={school.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center cursor-pointer"
                >
                  <p className="px-1.25 md:px-7.5 xl:px-14.5 py-3 sm:py-4 lg:py-5 text-[#650010] border-4 border-[#650010] hover:bg-[#650010] rounded-3xl text-[14px] sm:text-[16px] lg:text-[20px] hover:text-white font-sans font-medium transition-colors">
                    {school.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-1.25">
        <div className="min-h-100 bg-[#E6CFCF] h-full relative flex">
          {/* Vertical GALLERY badge */}
          <div className="w-8.75 sm:w-12.5 lg:w-20 absolute top-0 left-0 h-full bg-[#650010] z-10 rounded-3xl rounded-tl-none rounded-bl-none">
            <div className="w-full h-full flex flex-col items-center justify-center text-[16px] sm:text-[20px] lg:text-[24px] text-white font-serif tracking-widest">
              <span>G</span>
              <span>A</span>
              <span>L</span>
              <span>L</span>
              <span>E</span>
              <span>R</span>
              <span>Y</span>
            </div>
          </div>

          {/* Gallery images grid */}
          <div className="ml-11 sm:ml-15 lg:ml-22.5 w-full h-full flex justify-center items-center z-20 min-h-100">
            <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center z-20 w-full h-full px-5 gap-7.5 sm:gap-12.5 lg:gap-17.5 py-7.5">
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  className="h-62.5 sm:h-67.5 lg:h-77.5 w-full relative overflow-hidden group transition-all duration-300 ease-in-out"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="group-hover:scale-125 transition-all duration-500 ease-in-out object-cover"
                  />
                  <div className="absolute -top-4 -left-4 w-full h-full border-8 border-[#650010] -z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
