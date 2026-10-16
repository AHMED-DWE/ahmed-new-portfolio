import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import CompassVisual from "../components/CompassVisual";
import { ResponsiveVisual, StoreVisual } from "../components/ProjectVisual";

const COMPASS_PREVIEW = "/keywords-compass.webp";

export default function Projects() {
  return (
    <section id="projects" className="section-anchor section-pad compact-top">
      <div className="page-container">
        <SectionTitle
          eyebrow="FEATURED PROJECTS"
          title="Things I have built"
          text="A shopping interface, a Chrome extension for Amazon keyword research, and a responsive landing page."
        />

        <div className="projects-grid">
          <ProjectCard
            index={0}
            label="REACT PROJECT"
            title="NovaShop E-Commerce"
            text="A modern shopping interface with product cards, search, filters and a responsive cart experience."
            tags={["React", "Tailwind CSS", "Responsive UI"]}
            visual={<StoreVisual />}
            to="/ecommerce"
          />
          <ProjectCard
            index={1}
            label="CHROME EXTENSION"
            title="Keywords Compass"
            text="Color-codes Helium 10 Cerebro keywords as relevant, partial or duplicate, so a long keyword list is sorted at a glance."
            tags={["Chrome Extension", "JavaScript", "Supabase"]}
            visual={<CompassVisual image={COMPASS_PREVIEW} alt="Keywords Compass Chrome extension design preview" />}
            to="/keywords-compass"
            linkText="Read the full story"
            featured
          />
          <ProjectCard
            index={2}
            label="RESPONSIVE WEBSITE"
            title="Multi Device Landing Page"
            text="A landing page concept focused on proper desktop, tablet and mobile layouts."
            tags={["HTML", "CSS", "Responsive"]}
            visual={<ResponsiveVisual />}
          />
        </div>
      </div>
    </section>
  );
}
