import { site } from "@/data";
import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import ServiceSection from "@/sections/home/ServiceSections";
import CaseStudiesSection from "@/sections/home/CaseStudiesSection";
import TeamSection from "@/sections/home/TeamSection";
import BlogSection from "@/sections/home/BlogSection";

export default function Home() {
  return (
    <main>
      <HeroSection data={site.hero} />
      <AboutSection data={site.about} />
      <ServiceSection data={site.services} />
      <CaseStudiesSection data={site.caseStudies} />
      <TeamSection data={site.team} />
      <BlogSection data={site.blog} />
    </main>
  );
}
