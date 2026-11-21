import { PageLayout } from "@/components/PageLayout";

export default function ContactUsPage() {
  return (
    <PageLayout heroTitle="Contact Us" headingTitle="Contact Us">
      <div className="p-3.75 w-full h-full flex flex-col justify-center items-center text-center gap-7.5 font-serif">
        <div>
          <h2 className="text-[20px] sm:text-[24px] lg:text-[30px] font-semibold text-[#650010]">
            Conference Chair
          </h2>
          <p className="text-[16px] sm:text-[18px] lg:text-[22px] font-serif font-medium">
            Dr. Nagaraju Devarakonda, VIT-AP University
          </p>
        </div>
        <div>
          <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] text-[#650010] font-semibold font-serif pb-2.5">
            School of Computer Science and Engineering (SCOPE)
          </h2>
          <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium">
            VIT-AP University
          </h3>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
            Beside AP Secretariat, Near Vijayawada
          </p>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
            Andhra Pradesh, INDIA,
          </p>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
            Pin Code: 522237
          </p>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
            Email: iccide@vitap.ac.in
          </p>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
            Phone: +91 9441176913
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
