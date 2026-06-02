import { Footer } from "@/components/layout/footer";
import { PortfolioShowcase } from "@/components/sections/portfolio-showcase";

export default function ProjectsPage() {
  return (
    <>
      <main className="flex-1">
        <PortfolioShowcase />
      </main>
      <Footer />
    </>
  );
}
