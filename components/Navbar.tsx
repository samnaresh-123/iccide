"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleGroup = (name: string) =>
    setOpenGroup((p) => (p === name ? null : name));

  return (
    <>
      {/* ── Top logo bar ── */}
      <div
        className="w-full min-h-18.75 sm:min-h-25 flex items-center bg-no-repeat bg-cover bg-center sticky top-0 z-50"
        style={{ backgroundImage: 'url("/2/iccidenav.avif")' }}
      >
        <div className="w-full flex justify-between items-center h-full px-2.5">
          {/* VIT-AP logo — responsive widths */}
          <div className="pl-2.5 sm:pl-7.5 md:pl-12.5 lg:pl-17.5">
            <Link href="/">
              <Image
                alt="vitlogo"
                src="/vitaplogo.png"
                width={250}
                height={70}
                className="hidden lg:block h-auto w-62.5"
                priority
              />
            </Link>
            <Link href="/">
              <Image
                alt="vitlogo"
                src="/vitaplogo.png"
                width={200}
                height={70}
                className="md:block lg:hidden hidden h-auto w-50"
                priority
              />
            </Link>
            <Link href="/">
              <Image
                alt="vitlogo"
                src="/vitaplogo.png"
                width={170}
                height={70}
                className="sm:block md:hidden hidden h-auto w-42.5"
                priority
              />
            </Link>
            <Link href="/">
              <Image
                alt="vitlogo"
                src="/vitaplogo.png"
                width={80}
                height={70}
                className="sm:hidden block h-auto w-20"
                priority
              />
            </Link>
          </div>

          {/* ICCIDE logo */}
          <div className="w-20 md:w-35 h-12.5 md:h-22.5 relative mx-1.25 sm:mx-3.75 md:mx-6.25 lg:mx-7.5 bg-white">
            <Image
              alt="iccidelogo"
              src="/icc.png"
              fill
              className="object-fill"
              sizes="140px"
            />
          </div>

          {/* Springer logo */}
          <div className="w-20 md:w-30 h-12.5 md:h-17.5 relative mr-2.5 sm:mr-7.5 md:mr-12.5 lg:mr-20 bg-white">
            <Image
              alt="springerlogo"
              src="/iccide-springer.png"
              fill
              sizes="120px"
            />
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <div
          className="uni_navbar-menu z-50"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            color="#fff"
            style={{ color: "#fff" }}
            height="27"
            width="27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" />
          </svg>
        </div>
      </div>

      {/* ── Desktop nav bar ── */}
      <div className="w-full min-h-0 sm:h-15 hidden md:flex justify-center items-center bg-white z-40 shadow-sm sticky top-18.75 sm:top-25">
        <div className="px-5 flex flex-row flex-wrap gap-3.75">
          <ul className="flex items-center md:text-[12px] lg:text-[15px] xl:text-[17px] gap-3.75 lg:gap-5 xl:gap-7.5 font-bold text-gray-800">
            <li>
              <Link
                href="/"
                className="relative inline-flex items-center py-1.5 transition-colors duration-200 hover:text-[#650010] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#650010] after:rounded-full hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
              >
                Home
              </Link>
            </li>

            <li className="relative group">
              <span className="relative inline-flex items-center gap-1 py-1.5 cursor-pointer transition-colors duration-200 hover:text-[#650010] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#650010] after:rounded-full group-hover:after:w-full after:transition-all after:duration-200">
                About
                <svg
                  className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#650010] transition-transform duration-200 ease-out group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute -left-2 top-full pt-1.5 opacity-0 -translate-y-1 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                <ul className="min-w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 px-1.5 flex flex-col gap-0.5">
                  <li>
                    <Link
                      href="/conference"
                      className="block px-3 py-2 rounded-lg text-gray-700 hover:text-[#650010] hover:bg-[#650010]/8 font-medium text-[13px] lg:text-[14px] transition-colors duration-150 whitespace-nowrap"
                    >
                      Conference
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/university"
                      className="block px-3 py-2 rounded-lg text-gray-700 hover:text-[#650010] hover:bg-[#650010]/8 font-medium text-[13px] lg:text-[14px] transition-colors duration-150 whitespace-nowrap"
                    >
                      University
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/school"
                      className="block px-3 py-2 rounded-lg text-gray-700 hover:text-[#650010] hover:bg-[#650010]/8 font-medium text-[13px] lg:text-[14px] transition-colors duration-150 whitespace-nowrap"
                    >
                      School
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <span className="relative inline-flex items-center gap-1 py-1.5 cursor-pointer transition-colors duration-200 hover:text-[#650010] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#650010] after:rounded-full group-hover:after:w-full after:transition-all after:duration-200">
                Committees
                <svg
                  className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#650010] transition-transform duration-200 ease-out group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute -left-2 top-full pt-1.5 opacity-0 -translate-y-1 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                <ul className="min-w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 px-1.5 flex flex-col gap-0.5">
                  <li>
                    <Link
                      href="/organizing-committee"
                      className="block px-3 py-2 rounded-lg text-gray-700 hover:text-[#650010] hover:bg-[#650010]/8 font-medium text-[13px] lg:text-[14px] transition-colors duration-150 whitespace-nowrap"
                    >
                      Organizing Committee
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/program-committee"
                      className="block px-3 py-2 rounded-lg text-gray-700 hover:text-[#650010] hover:bg-[#650010]/8 font-medium text-[13px] lg:text-[14px] transition-colors duration-150 whitespace-nowrap"
                    >
                      Program Committee
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/call-for-papers"
                className="relative inline-flex items-center py-1.5 transition-colors duration-200 hover:text-[#650010] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#650010] after:rounded-full hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
              >
                Call For Papers
              </Link>
            </li>
            <li>
              <Link
                href="/important-dates"
                className="relative inline-flex items-center py-1.5 transition-colors duration-200 hover:text-[#650010] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#650010] after:rounded-full hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
              >
                Important Dates
              </Link>
            </li>

            <li className="relative group">
              <span className="relative inline-flex items-center gap-1 py-1.5 cursor-pointer transition-colors duration-200 hover:text-[#650010] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#650010] after:rounded-full group-hover:after:w-full after:transition-all after:duration-200">
                Speakers
                <svg
                  className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#650010] transition-transform duration-200 ease-out group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute -left-2 top-full pt-1.5 opacity-0 -translate-y-1 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                <ul className="min-w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 px-1.5 flex flex-col gap-0.5">
                  <li>
                    <Link
                      href="/previous-speakers"
                      className="block px-3 py-2 rounded-lg text-gray-700 hover:text-[#650010] hover:bg-[#650010]/8 font-medium text-[13px] lg:text-[14px] transition-colors duration-150 whitespace-nowrap"
                    >
                      Previous Speakers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/present-speakers"
                      className="block px-3 py-2 rounded-lg text-gray-700 hover:text-[#650010] hover:bg-[#650010]/8 font-medium text-[13px] lg:text-[14px] transition-colors duration-150 whitespace-nowrap"
                    >
                      Present Speakers
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/paper-submission"
                className="relative inline-flex items-center py-1.5 transition-colors duration-200 hover:text-[#650010] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#650010] after:rounded-full hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
              >
                Paper Submission
              </Link>
            </li>
            <li>
              <Link
                href="/registration"
                className="relative inline-flex items-center py-1.5 transition-colors duration-200 hover:text-[#650010] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#650010] after:rounded-full hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
              >
                Registration
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="relative inline-flex items-center py-1.5 transition-colors duration-200 hover:text-[#650010] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#650010] after:rounded-full hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Mobile slide-down menu ── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-999 bg-white overflow-y-auto pt-4 pb-10 px-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[#650010] font-bold text-lg font-serif">
              Menu
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-[#650010] text-2xl font-bold"
            >
              ✕
            </button>
          </div>
          <ul className="flex flex-col gap-5 font-semibold text-[15px]">
            <li>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-[#650010]"
              >
                Home
              </Link>
            </li>

            <li>
              <button
                onClick={() => toggleGroup("about")}
                className="text-[#650010] w-full text-left flex justify-between"
              >
                About <span>{openGroup === "about" ? "▲" : "▼"}</span>
              </button>
              {openGroup === "about" && (
                <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm text-black">
                  <li>
                    <Link
                      href="/conference"
                      onClick={() => setMobileOpen(false)}
                    >
                      Conference
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/university"
                      onClick={() => setMobileOpen(false)}
                    >
                      University
                    </Link>
                  </li>
                  <li>
                    <Link href="/school" onClick={() => setMobileOpen(false)}>
                      School
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => toggleGroup("committees")}
                className="text-[#650010] w-full text-left flex justify-between"
              >
                Committees <span>{openGroup === "committees" ? "▲" : "▼"}</span>
              </button>
              {openGroup === "committees" && (
                <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm text-black">
                  <li>
                    <Link
                      href="/organizing-committee"
                      onClick={() => setMobileOpen(false)}
                    >
                      Organizing Committee
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/program-committee"
                      onClick={() => setMobileOpen(false)}
                    >
                      Program Committee
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/call-for-papers"
                onClick={() => setMobileOpen(false)}
                className="text-[#650010]"
              >
                Call For Papers
              </Link>
            </li>
            <li>
              <Link
                href="/important-dates"
                onClick={() => setMobileOpen(false)}
                className="text-[#650010]"
              >
                Important Dates
              </Link>
            </li>

            <li>
              <button
                onClick={() => toggleGroup("speakers")}
                className="text-[#650010] w-full text-left flex justify-between"
              >
                Speakers <span>{openGroup === "speakers" ? "▲" : "▼"}</span>
              </button>
              {openGroup === "speakers" && (
                <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm text-black">
                  <li>
                    <Link
                      href="/present-speakers"
                      onClick={() => setMobileOpen(false)}
                    >
                      Present Speakers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/previous-speakers"
                      onClick={() => setMobileOpen(false)}
                    >
                      Previous Speakers
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/paper-submission"
                onClick={() => setMobileOpen(false)}
                className="text-[#650010]"
              >
                Paper Submission
              </Link>
            </li>
            <li>
              <Link
                href="/registration"
                onClick={() => setMobileOpen(false)}
                className="text-[#650010]"
              >
                Registration
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="text-[#650010]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
