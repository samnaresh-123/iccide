import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import HeroSlider from "@/components/HeroSlider";

function QuickLinks() {
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

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroSlider title="7th International Conference On Computational Intelligence & Data Engineering (ICCIDE-2026)" date="27th – 28th November 2026" />

      {/* Theme + Quick Links */}
      <div className="w-full max-h-[1800px]">
        <div className="px-5 sm:px-8.75 lg:px-12.5 py-5">
          <div className="w-full flex flex-col md:flex-row min-h-112.5 gap-5 sm:gap-8.75 lg:gap-17.5">
            <div className="sm:basis-[65%]">
              <div className="w-full">
                <div className="text-left inline-block">
                  <h2 className="bg-[#650010] px-5 py-4 text-[18px] sm:text-[22px] lg:text-[26px] font-semibold font-sans text-white rounded-3xl rounded-bl-none">
                    Theme Of ICCIDE
                  </h2>
                </div>
                <div className="relative w-full min-h-102.5">
                  <div className="absolute w-full h-full top-3 left-3 bg-black opacity-20 rounded-2xl shadow-lg" />
                  <div className="relative z-10 w-full h-full min-h-102.5 bg-[#E6CFCF] rounded-2xl rounded-tl-none p-3.75 flex justify-center items-center">
                    <p className="text-[#650010] w-full text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif font-medium text-justify">
                      The ICCIDE is conceived as a forum for presenting,
                      exchanging ideas and results of high quality research work
                      in cutting edge technologies in the areas of Computational
                      Intelligence and Data Engineering. It brings together the
                      researchers from academia and industry onto a common
                      platform and help them to develop a comprehensive
                      understanding of the challenges of technological
                      advancements from different viewpoints. This forum also
                      helps in fostering a healthy and vibrant relationship
                      between academia and industry.
                      <br />
                      <br />
                      <span className="text-left block">
                        The proceedings of the conference ICCIDE will be
                        published in{" "}
                        <strong>
                          SPRINGER series of Lecture Notes in Networks and
                          Systems, Indexed in SCOPUS, DBLP, SCImago
                        </strong>
                        , Norwegian Register for Scientific Journals and Series,
                        EI Compendex, WTI Frankfurt eG, INSPEC, zbMATH,{" "}
                        <strong>
                          <br />
                          <a
                            className="underline"
                            href="https://www.springer.com/series/15179"
                            target="_blank"
                            rel="noreferrer"
                          >
                            (https://www.springer.com/series/15179)
                          </a>{" "}
                          <span
                            style={{
                              backgroundColor: "#fff3b0",
                              padding: "2px 6px",
                              borderRadius: "3px",
                            }}
                          >
                            (Confirmed by Springer)
                          </span>
                        </strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <QuickLinks />
          </div>
        </div>
      </div>

      {/* Conference Begins Countdown */}
      <div className="w-full max-h-375 pt-5 pb-10">
        <div className="min-h-92.5 bg-[#E6CFCF] flex flex-col md:flex-row">
          <div className="md:basis-[60%] bg-[#E6CFCF]">
            <div className="px-5 py-3.75">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-serif text-[#650010] font-semibold">
                International Conference On Computational Intelligence &amp;
                Data Engineering (ICCIDE-2026)
              </h2>
              <div className="py-10 flex gap-3 sm:gap-5 items-center justify-start">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="text-[#650010]"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" />
                </svg>
                <p className="text-[#650010] font-semibold text-[16px] sm:text-[20px] lg:text-[24px] font-serif">
                  27th–28th November 2026
                </p>
              </div>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#650010] font-serif font-medium">
                &quot;Empowering Progress, Inspiring Change: Together Towards a
                Sustainable Future.&quot;
              </p>
            </div>
          </div>
          <div className="md:basis-[40%] bg-[#650010] rounded-[10%] rounded-tr-none rounded-br-none relative flex flex-col justify-center items-center gap-5 py-5">
            <h2 className="text-[16px] sm:text-[20px] lg:text-[24px] font-serif font-semibold text-white">
              CONFERENCE BEGINS:
            </h2>
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Dignitaries & Keynote Speakers Section */}
      <div className="w-full pt-10 px-5 sm:px-9 lg:px-12">
        <div className="w-full text-center mb-6">
          <h2 className="bg-[#650010] py-4 px-8 rounded-3xl font-semibold text-[16px] sm:text-[18px] lg:text-[22px] inline-block text-white">
            Inaugural Dignitaries &amp; Keynote Speakers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              role: "Chief Guest - Inauguration",
              name: "Prof. Laxmidhar Behera",
              title: "Director, IIT Mandi",
              sub: "Himachal Pradesh, India",
              img: "/speakers/laxmidhar-behera.jpg",
            },
            {
              role: "Guest of Honor - Inauguration",
              name: "Mr. G. Mallikarjuna Rao",
              title: "Scientist 'G', RCI, DRDO",
              sub: "Hyderabad, India",
              img: "/speakers/mallikarjuna-rao.jpg",
            },
            {
              role: "Keynote Address I",
              name: "Prof. Piotr A. Kowalski",
              title: "Professor, AGH University of Krakow",
              sub: "Krakow, Poland (27th Nov, 11 AM)",
              img: "/speakers/piotr-kowalski.jpg",
            },
            {
              role: "Keynote Address II",
              name: "Mr. Satya Bharat Mudivarthi",
              title: "Technology Fellow, Deloitte USI",
              sub: "AI & Cloud Enterprise (27th Nov, 2 PM)",
              img: "/speakers/satya-bharat.jpg",
            },
            {
              role: "Keynote Address III",
              name: "Dr. T V Gopal",
              title: "Adjunct Professor, Mahindra Univ",
              sub: "Data Spaces Perspective (28th Nov, 10 AM)",
              img: "/speakers/tv-gopal.jpg",
            },
            {
              role: "Keynote Address IV",
              name: "Ms. Sharon Suresh",
              title: "Engineering Analyst, Google",
              sub: "Modern Fraud Detection (28th Nov, 2 PM)",
              img: "/speakers/sharon-suresh.jpg",
            },
          ].map((s) => (
            <div
              key={s.name}
              className="bg-[#E6CFCF] rounded-2xl p-5 flex flex-col items-center text-center shadow border border-[#650010]/20 hover:shadow-lg transition-shadow"
            >
              <div className="w-28 h-28 relative rounded-full overflow-hidden border-4 border-[#650010] shadow mb-3">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-bold text-white bg-[#650010] px-2.5 py-0.5 rounded-full mb-1">
                {s.role}
              </span>
              <h3 className="text-[#650010] font-bold text-[16px] sm:text-[17px] font-serif">
                {s.name}
              </h3>
              <p className="text-[13px] font-semibold text-gray-900 mt-0.5">
                {s.title}
              </p>
              <p className="text-[12px] text-gray-700 font-serif mt-1">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/present-speakers"
            className="inline-block border-2 border-[#650010] text-[#650010] hover:bg-[#650010] hover:text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            View Complete Speaker Details &amp; Abstract Topics →
          </Link>
        </div>
      </div>

      {/* Partners */}
      <div className="w-full max-h-[2000px] pt-7.5">
        <div className="w-full text-center">
          <h2 className="bg-[#650010] py-5 px-10 rounded-3xl font-semibold text-[16px] sm:text-[18px] lg:text-[22px] inline-block text-white">
            Partners
          </h2>
        </div>
        <div className="py-3.75 min-h-85 w-full flex flex-col gap-2.5 md:gap-0 md:flex-row">
          <div className="md:basis-[30%] bg-[#E6CFCF] px-3.75 py-2.5">
            <div className="w-full text-center">
              <h3 className="bg-[#650010] p-2.5 sm:py-5 sm:px-10 font-semibold text-[16px] sm:text-[18px] lg:text-[22px] inline-block text-white">
                Publication Partner
              </h3>
            </div>
            <div className="basis-[70%] w-full h-full relative flex flex-col justify-center items-center pt-7.5 md:-mt-12.5">
              <div className="w-42.5 h-37.5 relative">
                <a
                  href="https://www.springer.com/series/15179"
                  target="_blank"
                  rel="noreferrer"
                  className="relative block w-full h-full"
                >
                  <Image
                    src="/iccide-springer.png"
                    alt="Springer"
                    fill
                    sizes="170px"
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="md:basis-[70%] bg-[#E6CFCF] md:ml-5 px-3.75 py-2.5">
            <div className="w-full text-center">
              <h3 className="bg-[#650010] p-[10px] sm:py-[20px] sm:px-[40px] font-semibold text-[16px] sm:text-[18px] lg:text-[22px] inline-block text-white">
                Knowledge Partners
              </h3>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center gap-[20px] px-[20px] my-[30px]">
              {[
                { src: "/iccide-ieee.png", alt: "IEEE" },
                { src: "/iccide-acm.png", alt: "ACM" },
                { src: "/iccide-scopus.png", alt: "Scopus" },
                { src: "/iccide-csi.png", alt: "CSI" },
                { src: "/iccide-iste.png", alt: "ISTE" },
              ].map((p) => (
                <div
                  key={p.alt}
                  className="w-[110px] sm:w-[120px] lg:w-[130px] h-[120px] relative"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-contain"
                    sizes="130px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
