import Reveal from "./Reveal";
import { processSteps } from "../data/process";

export default function Process() {
  return (
    <section id="process" className="section">
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2>
            How it{" "}
            <span className="text-italic" style={{ color: "var(--primary)" }}>
              works.
            </span>
          </h2>
          <p style={{ margin: "16px auto 0", textAlign: "center" }}>
            A transparent, step-by-step process. No commitment until you're ready.
          </p>
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
        className="process-grid"
      >
        {processSteps.map((item, i) => (
          <Reveal key={item.step} delay={i * 100} style={{ gridColumn: i === 1 ? "span 2" : undefined }}>
            <div
              className="bento-card process-card"
              style={{ textAlign: "left", alignItems: "flex-start", height: "100%", display: "flex", flexDirection: "column" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "16px" }}>
                <div className="step-number" style={{ margin: 0 }}>{item.step}</div>
                {item.badge && <div className="badge" style={{ margin: 0, padding: "4px 8px", fontSize: "0.75rem" }}>{item.badge}</div>}
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.95rem", margin: 0, maxWidth: "none" }}>
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
