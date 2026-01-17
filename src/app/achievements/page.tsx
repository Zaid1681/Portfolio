import { AchievementSection } from "@/components/sections/Achievement";
import { TechStack } from "@/components/sections/TechStack";

export default function SkillsPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 xl:px-24">
          <div className="flex-1">
            <AchievementSection />
          </div>
      </div>
    </section>
  );
}
