import { PageLayout } from "@/components/PageLayout";

export default function ContactUsPage() {
  return (
    <PageLayout heroTitle="Contact Us" headingTitle="Contact Us">
      <div className="font-serif text-[14px] sm:text-[16px] lg:text-[18px] space-y-4">
        <p className="font-semibold text-[#650010] text-[18px] sm:text-[22px]">VIT-AP University</p>
        <p>Near Vijayawada - 522241, Andhra Pradesh, India</p>
        <p><strong>Email:</strong> iccide@vitap.ac.in</p>
        <p><strong>Phone:</strong> +91-863-2344700</p>
        <div className="w-full h-[300px] mt-4">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6106982247265!2d80.49881150582188!3d16.495238672470556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1696503206483!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </PageLayout>
  );
}
