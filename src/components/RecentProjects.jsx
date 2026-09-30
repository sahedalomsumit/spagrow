import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

export default function RecentProjects() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2>
            Recent{" "}
            <span className="text-italic" style={{ color: "var(--primary)" }}>
              Spa Success Stories.
            </span>
          </h2>
          <p style={{ margin: "16px auto 0", textAlign: "center" }}>
            Websites designed to build trust, elevate brand image, and maximize bookings.
          </p>
        </div>
      </Reveal>

      <div className="grid-bento">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100} style={{ gridColumn: "span 6" }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card"
              style={{
                padding: 0,
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
              }}
            >
              <div className="portfolio-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="340"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  className="glass"
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    padding: "6px 12px",
                    borderRadius: "100px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                  }}
                >
                  View Live Site{" "}
                  <ArrowRight
                    size={14}
                    style={{ verticalAlign: "middle", marginLeft: "4px" }}
                  />
                </div>
              </div>
              <div style={{ padding: "32px" }}>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--secondary)",
                    fontWeight: 700,
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {project.category}
                </div>
                <h3 style={{ marginBottom: "12px", fontSize: "1.6rem" }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-muted)",
                    maxWidth: "none",
                  }}
                >
                  {project.description}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
