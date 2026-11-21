import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";

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
    <div className="sm:basis-[35%] border-4 border-[#650010] rounded-[13%] rounded-tr-none rounded-bl-none max-h-[480px]">
      <div className="flex flex-col justify-center items-center text-center p-[15px] w-full h-full rounded-[13%] rounded-tr-none rounded-bl-none">
        <h2 className="sm:text-[24px] lg:text-[30px] xl:text-[35px] font-serif font-semibold text-[#650010]">Quick Links</h2>
        <div className="grid grid-rows-7 grid-cols-1 gap-[7px] w-full h-full font-semibold">
          {links.map((l) => (
            <div key={l.label} className="border-2 border-[#650010] rounded-2xl text-[#650010] bg-white hover:text-white hover:bg-[#650010] transition-colors">
              <Link href={l.href} className="w-full h-full flex justify-center items-center text-[14px] sm:text-[16px] p-2 lg:text-[18px]">{l.label}</Link>
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
      {/* Hero */}
      <div className="w-full h-[250px] sm:h-[350px] lg:h-[450px]">
        <div
          className="w-full h-full flex justify-center items-center text-center bg-no-repeat bg-cover bg-center px-[20px] relative"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(/pic1.avif)" }}
        >
          <div className="z-10 absolute top-[45%] left-2 text-white cursor-pointer">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
            </svg>
          </div>
          <div className="absolute w-full h-full top-0 left-0">
            <video autoPlay muted loop playsInline className="h-full w-full object-cover">
              <source src="/intro.mp4" />
            </video>
          </div>
          <div className="z-10 absolute top-[45%] right-2 text-white cursor-pointer">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </div>
          <h1 className="text-[16px] sm:text-[22px] lg:text-[28px] mx-[30px] font-serif font-semibold text-white max-w-[700px] z-10">
            7th International Conference On Computational Intelligence &amp; Data Engineering (ICCIDE-2026)
          </h1>
        </div>
      </div>

      {/* Theme + Quick Links */}
      <div className="w-full max-h-[1800px]">
        <div className="px-[20px] sm:px-[35px] lg:px-[50px] py-[20px]">
          <div className="w-full flex flex-col md:flex-row min-h-[450px] gap-[20px] sm:gap-[35px] lg:gap-[70px]">
            <div className="sm:basis-[65%]">
              <div className="w-full">
                <div className="text-left inline-block">
                  <h2 className="bg-[#650010] px-[20px] py-[16px] text-[18px] sm:text-[22px] lg:text-[26px] font-semibold font-sans text-white rounded-3xl rounded-bl-none">
                    Theme Of ICCIDE
                  </h2>
                </div>
                <div className="w-full min-h-[410px] bg-[#E6CFCF] rounded-2xl rounded-tl-none relative z-[1] flex justify-center items-center">
                  <div className="absolute w-full h-full top-3 left-3 bg-black -z-10 rounded-2xl opacity-20 shadow-lg" />
                  <div className="p-[15px]">
                    <p className="text-[#650010] w-full text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif font-medium text-justify">
                      The ICCIDE is conceived as a forum for presenting, exchanging ideas and results of high quality research work in cutting edge technologies in the areas of Computational Intelligence and Data Engineering. It brings together the researchers from academia and industry onto a common platform and help them to develop a comprehensive understanding of the challenges of technological advancements from different viewpoints. This forum also helps in fostering a healthy and vibrant relationship between academia and industry.
                      <br /><br />
                      <span className="text-left block">
                        The proceedings of the conference ICCIDE will be published in{" "}
                        <strong>SPRINGER series of Lecture Notes in Networks and Systems, Indexed in SCOPUS, DBLP, SCImago</strong>
                        , Norwegian Register for Scientific Journals and Series, EI Compendex, WTI Frankfurt eG, INSPEC, zbMATH,{" "}
                        <strong>
                          <br />
                          <a className="underline" href="https://www.springer.com/series/15179" target="_blank" rel="noreferrer">
                            (https://www.springer.com/series/15179)
                          </a>{" "}
                          <span style={{ backgroundColor: "#fff3b0", padding: "2px 6px", borderRadius: "3px" }}>
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
      <div className="w-full max-h-[1500px] pt-[20px] pb-[40px]">
        <div className="min-h-[370px] bg-[#E6CFCF] flex flex-col md:flex-row">
          <div className="md:basis-[60%] bg-[#E6CFCF]">
            <div className="px-[20px] py-[15px]">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-serif text-[#650010] font-semibold">
                International Conference On Computational Intelligence &amp; Data Engineering (ICCIDE-2026)
              </h2>
              <div className="py-[40px] flex gap-3 sm:gap-5 items-center justify-start">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[#650010]" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" />
                </svg>
                <p className="text-[#650010] font-semibold text-[16px] sm:text-[20px] lg:text-[24px] font-serif">
                  27th–28th November 2026
                </p>
              </div>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#650010] font-serif font-medium">
                &quot;Empowering Progress, Inspiring Change: Together Towards a Sustainable Future.&quot;
              </p>
            </div>
          </div>
          <div className="md:basis-[40%] bg-[#650010] rounded-[10%] rounded-tr-none rounded-br-none relative flex flex-col justify-center items-center gap-[20px] py-[20px]">
            <h2 className="text-[16px] sm:text-[20px] lg:text-[24px] font-serif font-semibold text-white">CONFERENCE BEGINS:</h2>
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="w-full max-h-[2000px] pt-[30px]">
        <div className="w-full text-center">
          <h2 className="bg-[#650010] py-[20px] px-[40px] rounded-3xl font-semibold text-[16px] sm:text-[18px] lg:text-[22px] inline-block text-white">Partners</h2>
        </div>
        <div className="py-[15px] min-h-[340px] w-full flex flex-col gap-[10px] md:gap-0 md:flex-row">
          <div className="md:basis-[30%] bg-[#E6CFCF] px-[15px] py-[10px]">
            <div className="w-full text-center">
              <h3 className="bg-[#650010] p-[10px] sm:py-[20px] sm:px-[40px] font-semibold text-[16px] sm:text-[18px] lg:text-[22px] inline-block text-white">Publication Partner</h3>
            </div>
            <div className="basis-[70%] w-full h-full relative flex flex-col justify-center items-center pt-[30px] md:-mt-[50px]">
              <div className="w-[170px] h-[150px] relative">
                <a href="https://www.springer.com/series/15179" target="_blank" rel="noreferrer" className="relative block w-full h-full">
                  <Image src="/iccide-springer.png" alt="Springer" fill sizes="170px" className="object-contain" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:basis-[70%] bg-[#E6CFCF] md:ml-[20px] px-[15px] py-[10px]">
            <div className="w-full text-center">
              <h3 className="bg-[#650010] p-[10px] sm:py-[20px] sm:px-[40px] font-semibold text-[16px] sm:text-[18px] lg:text-[22px] inline-block text-white">Knowledge Partners</h3>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center gap-[20px] px-[20px] my-[30px]">
              {[
                { src: "/iccide-ieee.png", alt: "IEEE" },
                { src: "/iccide-acm.png", alt: "ACM" },
                { src: "/iccide-scopus.png", alt: "Scopus" },
                { src: "/iccide-csi.png", alt: "CSI" },
                { src: "/iccide-iste.png", alt: "ISTE" },
              ].map((p) => (
                <div key={p.alt} className="w-[110px] sm:w-[120px] lg:w-[130px] h-[120px] relative">
                  <Image src={p.src} alt={p.alt} fill className="object-contain" sizes="130px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
