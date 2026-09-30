import { MousePointerClick, ShieldCheck, Smartphone, Zap, Link } from "lucide-react";
import Reveal from "./Reveal";

const solutions = [
  {
    icon: <MousePointerClick size={36} />,
    title: "Higher Booking Conversion",
    text: "Every element is designed to guide visitors from browsing to booking. Clear calls-to-action, streamlined flow, zero friction.",
    size: "span 6",
    accent: true,
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Instant Client Trust",
    text: "Professional design, real testimonials, and a calming visual identity that reflects the quality of your spa — before they even visit.",
    size: "span 6",
  },
  {
    icon: <Smartphone size={36} />,
    title: "Flawless Mobile Booking",
    text: "A fast, beautiful experience on every phone. One-tap booking, easy navigation, no pinching or zooming.",
    size: "span 4",
  },
  {
    icon: <Zap size={36} />,
    title: "Own Your Client Relationship",
    text: "Stop depending on third-party platforms that take your margins. Your website becomes your primary booking channel.",
    size: "span 4",
  },
  {
    icon: <Link size={36} />,
    title: "Stand Out in Your Market",
    text: "A website that positions your spa as the premium choice — whether clients find you on Google, social media, or word of mouth.",
    size: "span 4",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section">
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2>
            What your new website{" "}
            <span className="text-italic" style={{ color: "var(--primary)" }}>
              actually delivers.
            </span>
          </h2>
          <p style={{ margin: "16px auto 0", textAlign: "center" }}>
            Not just a prettier design — real, measurable business outcomes.
          </p>
        </div>
      </Reveal>

      <div className="grid-bento">
        {solutions.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 80}
            className="bento-card outcome-card"
            style={{
              gridColumn: item.size,
              background: item.accent ? "var(--primary)" : undefined,
              color: item.accent ? "white" : undefined,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: item.accent ? "var(--secondary)" : "var(--primary)",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "12px",
                color: item.accent ? "white" : undefined,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                margin: 0,
                maxWidth: "none",
                color: item.accent ? "rgba(255,255,255,0.8)" : undefined,
              }}
            >
              {item.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
