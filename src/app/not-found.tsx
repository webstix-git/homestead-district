import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title={"We couldn't find that page."}
      description="It may have moved. Head back home or take a look at the agency ownership opportunity."
    >
      <Button href="/" arrow>
        Back to Home
      </Button>
      <Button href="/opportunity" variant="outline">
        Explore the Opportunity
      </Button>
    </PageHero>
  );
}
