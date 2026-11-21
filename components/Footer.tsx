import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-h-[1800px] w-full h-full pt-5">
      <div className="px-5 md:px-8.75 lg:px-18.75 sm:py-7.5 flex flex-col md:flex-row w-full h-full min-h-102.5">

        {/* Nav link columns */}
        <div className="md:basis-[60%] mr-2.5">
          <div className="w-full h-full flex flex-col md:grid md:grid-cols-3 gap-2.5">

            {/* Mobile compact rows */}
            <div className="flex md:hidden justify-center items-center gap-10 flex-wrap text-[14px] text-[#650010] font-semibold font-serif pb-2.5">
              <Link href="/">Home</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
            <div className="flex md:hidden justify-center items-center gap-5 flex-wrap text-[14px] text-[#650010] font-semibold font-serif text-center pb-2.5">
              <div>
                <h2>About</h2>
                <ul className="text-[12px] sm:text-[14px] lg:text-[16px] text-black flex gap-2.5">
                  <li><Link href="/university">University</Link></li>
                  <li><Link href="/conference">Conference</Link></li>
                  <li><Link href="/school">School</Link></li>
                </ul>
              </div>
            </div>
            <div className="flex md:hidden justify-center items-center gap-5 flex-wrap text-[14px] text-[#650010] font-semibold font-serif text-center pb-2.5">
              <div>
                <h2>Committees</h2>
                <ul className="text-[12px] sm:text-[14px] lg:text-[16px] text-black flex gap-2.5">
                  <li><Link href="/organizing-committee">Organizing Committee</Link></li>
                  <li><Link href="/program-committee">Program Committee</Link></li>
                </ul>
              </div>
            </div>
            <div className="flex md:hidden justify-center items-center gap-5 flex-wrap text-[14px] text-[#650010] font-semibold font-serif text-center pb-2.5">
              <div>
                <h2>Speakers</h2>
                <ul className="text-[12px] sm:text-[14px] lg:text-[16px] text-black flex gap-2.5">
                  <li><Link href="/present-speakers">Present Speakers</Link></li>
                  <li><Link href="/previous-speakers">Previous Speakers</Link></li>
                </ul>
              </div>
            </div>

            {/* Desktop col 1 */}
            <div className="hidden md:flex flex-col justify-center items-center text-start pl-3">
              <div className="flex flex-col gap-6.25 items-start justify-center text-left">
                <div className="text-left text-[18px] lg:text-[20px] xl:text-[22px] font-semibold text-[#650010] font-serif">
                  <Link href="/">Home</Link>
                </div>
                <div className="text-left">
                  <span className="text-left text-[18px] lg:text-[20px] xl:text-[22px] font-semibold text-[#650010] font-serif">About</span>
                  <ul className="ml-4 text-[12px] sm:text-[14px] lg:text-[16px] text-black">
                    <li><Link href="/university" className="hover:text-[#650010]">University</Link></li>
                    <li><Link href="/conference" className="hover:text-[#650010]">Conference</Link></li>
                    <li><Link href="/school" className="hover:text-[#650010]">School</Link></li>
                  </ul>
                </div>
                <div className="text-left text-[18px] lg:text-[20px] xl:text-[22px] font-semibold text-[#650010] font-serif">
                  <Link href="/contact-us">Contact Us</Link>
                </div>
              </div>
            </div>

            {/* Desktop col 2 */}
            <div className="hidden md:flex flex-col justify-center items-center text-start">
              <div className="flex flex-col gap-6.25 items-start justify-center text-left">
                <div className="text-left">
                  <span className="text-left text-[18px] lg:text-[20px] xl:text-[22px] font-semibold text-[#650010] font-serif">Committees</span>
                  <ul className="ml-4 text-[12px] sm:text-[14px] lg:text-[16px] text-black">
                    <li><Link href="/organizing-committee" className="hover:text-[#650010]">Organizing Committee</Link></li>
                    <li><Link href="/program-committee" className="hover:text-[#650010]">Program Committee</Link></li>
                  </ul>
                </div>
                <div className="text-left">
                  <span className="text-left text-[18px] lg:text-[20px] xl:text-[22px] font-semibold text-[#650010] font-serif">Speakers</span>
                  <ul className="ml-4 text-[12px] sm:text-[14px] lg:text-[16px] text-black">
                    <li><Link href="/present-speakers" className="hover:text-[#650010]">Present Speakers</Link></li>
                    <li><Link href="/previous-speakers" className="hover:text-[#650010]">Previous Speakers</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Desktop col 3 */}
            <div className="flex flex-col justify-center items-center text-center md:text-start">
              <div className="flex flex-row flex-wrap md:flex-col gap-6.25 items-center md:items-start justify-center text-center md:text-left">
                {[
                  { label: "Important Dates", href: "/important-dates" },
                  { label: "Registration", href: "/registration" },
                  { label: "Paper Submission", href: "/paper-submission" },
                  { label: "Call for Papers", href: "/call-for-papers" },
                ].map((l) => (
                  <div key={l.label} className="text-left text-[14px] lg:text-[20px] xl:text-[22px] font-semibold text-[#650010] font-serif">
                    <Link href={l.href} className="hover:underline">{l.label}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map + address */}
        <div className="md:basis-[40%] flex flex-col">
          <div className="p-1.25 sm:p-3.75 pb-1.25">
            <iframe
              className="w-full h-43 hover:shadow-xl transition-shadow duration-200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6106982247265!2d80.49881150582188!3d16.495238672470556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1696503206483!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-1.25 w-full p-3.75 pb-5 md:pb-0">
            <h2 className="text-[16px] sm:text-[20px] lg:text-[26px] text-[#650010] font-serif font-semibold">
              VIT-AP University, Amaravathi
            </h2>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-light font-serif">
              Near Vijayawada - 522241, Andhra Pradesh.
            </p>
            <p className="text-[14px] sm:text-[18px] lg:text-[20px] underline text-[#650010]">
              HOW TO REACH VIT-AP
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="h-12.5 w-full flex items-center justify-center text-center bg-[#650010]">
        <p className="text-[12px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-serif text-white">
          Copyright © 2026 VIT-AP UNIVERSITY | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
