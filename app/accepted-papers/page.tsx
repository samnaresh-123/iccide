import { PageLayout } from "@/components/PageLayout";
import AcceptedPapersList from "@/components/AcceptedPapersList";

export default function AcceptedPapersPage() {
  return (
    <PageLayout heroTitle="Accepted Papers" headingTitle="Accepted &amp; Registered Papers">
      <AcceptedPapersList />
    </PageLayout>
  );
}
