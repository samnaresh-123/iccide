import { PageLayout } from "@/components/PageLayout";

export default function VenuePage() {
  return (
    <PageLayout heroTitle="Venue" headingTitle="Venue">
      <div className="font-serif space-y-4 text-[14px] sm:text-[16px] lg:text-[18px]">
        <p className="text-[#650010] font-semibold text-[18px] sm:text-[22px]">VIT-AP University, Amaravathi</p>
        <p>Near Vijayawada - 522241, Andhra Pradesh, India</p>
        <p>The conference will be held at VIT-AP University campus, which is a modern facility with state-of-the-art conference halls and auditoriums.</p>
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
