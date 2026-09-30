import { EyeOff, Smartphone, NavigationOff, LayoutTemplate } from "lucide-react";
import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section id="problem" className="section">
      <Reveal>
        <h2 style={{ maxWidth: "720px" }}>
          Your spa website might look fine…{" "}
          <span className="text-italic" style={{ color: "var(--secondary)" }}>
            but it's silently losing you bookings.
          </span>
        </h2>
      </Reveal>

      {/* Big bento grid */}
      <div className="grid-bento" style={{ marginTop: "56px" }}>
        <Reveal
          delay={0}
          className="bento-card"
          style={{
            gridColumn: "span 8",
            background: "var(--primary)",
            color: "white",
          }}
        >
          <EyeOff
            size={40}
            style={{ marginBottom: "24px", color: "var(--secondary)" }}
          />
          <h3 style={{ color: "white", fontSize: "2rem", marginBottom: "16px" }}>
            Nothing Sets You Apart
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "1.15rem",
              maxWidth: "none",
            }}
          >
            Your website doesn't communicate what makes your spa unique.
            Visitors can't tell why they should choose you over a competitor — so they
            leave and book somewhere else.
          </p>
        </Reveal>

        <Reveal
          delay={80}
          className="bento-card"
          style={{ gridColumn: "span 4" }}
        >
          <Smartphone
            size={32}
            style={{ marginBottom: "24px", color: "var(--primary)" }}
          />
          <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
            Broken Mobile Experience
          </h3>
          <p>
            Over 70% of spa clients browse on their phone. If your site is slow,
            cluttered, or hard to navigate on mobile — you're losing them.
          </p>
        </Reveal>

        <Reveal
          delay={160}
          className="bento-card"
          style={{ gridColumn: "span 4" }}
        >
          <NavigationOff
            size={32}
            style={{ marginBottom: "24px", color: "var(--primary)" }}
          />
          <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
            Buried Booking Flow
          </h3>
          <p>
            Your booking button is buried, unclear, or takes too many steps —
            so interested visitors give up before they ever make an appointment.
          </p>
        </Reveal>

        <Reveal
          delay={240}
          className="bento-card"
          style={{ gridColumn: "span 8", borderColor: "var(--secondary)" }}
        >
          <LayoutTemplate
            size={32}
            style={{ marginBottom: "24px", color: "var(--primary)" }}
          />
          <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
            Design That Undermines Your Brand
          </h3>
          <p style={{ fontSize: "1.1rem" }}>
            Your website doesn't feel like your spa. Visitors expect calm,
            premium, and professional — but the design tells a different story.
          </p>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="callout-bar" style={{ marginTop: "48px" }}>
          <p
            style={{
              margin: 0,
              color: "var(--primary)",
              fontWeight: 600,
              fontSize: "1.15rem",
              maxWidth: "none",
            }}
          >
            The result? Potential clients leave your site and book with a competitor.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
