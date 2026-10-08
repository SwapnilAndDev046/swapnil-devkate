import Navbar from "@/components/Navbar";
import IntroTerminal from "@/components/IntroTerminal";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ReachOutSection from "@/components/ReachOutSection";
import { projects, siteConfig } from "@/data/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteConfig.url}#swapnil-devkate`,
    name: "Swapnil Devkate",
    alternateName: "Swapnil Devkate",
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile-placeholder.svg`,
    jobTitle: "Backend Developer",
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Vasantdada Patil Pratishthan's College of Engineering",
    },
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "REST APIs",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "MySQL",
      "JDBC",
      "Backend Development",
    ],
  },
  hasPart: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: project.github,
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Swapnil Devkate",
  alternateName: "Swapnil Devkate Portfolio",
  url: siteConfig.url,
  inLanguage: "en-IN",
  about: {
    "@type": "Person",
    name: "Swapnil Devkate",
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <IntroTerminal>
        <>
          <Navbar />

          <main>
            <HomeSection />
            <ProjectsSection />
            <TechnologiesSection />
            <ReachOutSection />
          </main>
        </>
      </IntroTerminal>
    </>
  );
}
