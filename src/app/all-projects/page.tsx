import { Footer } from "@/components/layout/footer";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function AllProjectsPage() {
  return (
    <>
      <main className="flex-1">
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
