import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

/* Hero banner shared by every inner page */
export function PageHero({ title }: { title: string }) {
  return <HeroSlider title={title} />;
}

/* Pill-style section heading */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-left inline-block">
      <h2 className="bg-[#650010] px-5 py-4 text-[18px] sm:text-[22px] lg:text-[26px] font-semibold font-sans text-white rounded-3xl rounded-bl-none">
        {children}
      </h2>
    </div>
  );
}

/* Card with offset shadow */
export function SectionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full bg-[#E6CFCF] rounded-2xl rounded-tl-none relative z-1 flex justify-center items-start ${className}`}
    >
      <div className="absolute w-full h-full top-3 left-3 bg-black -z-10 rounded-2xl opacity-20 shadow-lg" />
      <div className="p-3.75 w-full">{children}</div>
    </div>
  );
}

/* Quick Links sidebar */
export function QuickLinks() {
  const links = [
    { label: "Program Schedule", href: "/program-schedule" },
    { label: "Accepted Papers", href: "/accepted-papers" },
    { label: "Venue", href: "/venue" },
    { label: "Inaugral Invitation", href: "/invitation" },
    { label: "Conference History", href: "/conference-history" },
    { label: "Brochure", href: "/brochure" },
    { label: "Photo Gallery", href: "/gallery" },
  ];
  return (
    <div className="sm:basis-[35%] border-4 border-[#650010] rounded-[13%] rounded-tr-none rounded-bl-none max-h-120">
      <div className="flex flex-col justify-center items-center text-center p-3.75 w-full h-full rounded-[13%] rounded-tr-none rounded-bl-none">
        <h2 className="sm:text-[24px] lg:text-[30px] xl:text-[35px] font-serif font-semibold text-[#650010]">
          Quick Links
        </h2>
        <div className="grid grid-rows-7 grid-cols-1 gap-1.75 w-full h-full font-semibold">
          {links.map((l) => (
            <div
              key={l.label}
              className="border-2 border-[#650010] rounded-2xl text-[#650010] bg-white hover:text-white hover:bg-[#650010] transition-colors"
            >
              <Link
                href={l.href}
                className="w-full h-full flex justify-center items-center text-[14px] sm:text-[16px] p-2 lg:text-[18px]"
              >
                {l.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Standard inner-page wrapper: Hero + two-column content + quicklinks */
export function PageLayout({
  heroTitle,
  headingTitle,
  children,
}: {
  heroTitle: string;
  headingTitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHero title={heroTitle} />
      <div className="w-full max-h-[1800px]">
        <div className="px-5 sm:px-8.75 lg:px-12.5 py-5">
          <div className="w-full flex flex-col md:flex-row min-h-112.5 gap-5 sm:gap-8.75 lg:gap-17.5">
            <div className="sm:basis-[65%]">
              <div className="w-full">
                <SectionHeading>{headingTitle}</SectionHeading>
                <SectionCard className="min-h-102.5">{children}</SectionCard>
              </div>
            </div>
            <QuickLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
