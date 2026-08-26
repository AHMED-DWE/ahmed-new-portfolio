import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { DashboardVisual, ResponsiveVisual, StoreVisual } from "../components/ProjectVisual";

export default function Projects() {
  return (
    <section id="projects" className="section-anchor section-pad compact-top">
      <div className="page-container">
        <SectionTitle
          eyebrow="FEATURED PROJECTS"
          title="Projects with visuals that match their purpose"
          text="Instead of a generic code card, every project preview now shows what the project is actually about."
        />

        <div className="projects-grid">
          <ProjectCard
            number="01"
            label="REACT PROJECT"
            title="NovaShop E-Commerce"
            text="A modern shopping interface with product cards, search, filters and a responsive cart experience."
            tags={["React", "Tailwind CSS", "Responsive UI"]}
            visual={<StoreVisual />}
            to="/ecommerce"
          />
          <ProjectCard
            number="02"
            label="DASHBOARD UI"
            title="DevFlow Dashboard"
            text="A dark admin dashboard concept with analytics cards, charts and responsive content panels."
            tags={["React", "Charts UI", "Dashboard"]}
            visual={<DashboardVisual />}
          />
          <ProjectCard
            number="03"
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
