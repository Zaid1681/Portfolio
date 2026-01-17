import { EducationSection } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";

export default function ExperiencePage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1">
            <EducationSection />
          </div>
        </div>
      </div>
    </section>
  );
}
