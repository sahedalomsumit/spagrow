import { ArrowRight, CheckCircle } from "lucide-react";
import Reveal from "./Reveal";
import { smoothScrollTo } from "../utils/scroll";

const beforePoints = [
  "Template-based design with no personality",
  "Booking button buried three clicks deep",
  "Services listed without clear value or pricing",
  "No reviews, certifications, or trust elements",
];

const afterPoints = [
  "Calm, premium design that matches your spa",
  "Prominent one-tap booking from any page",
  "Services presented with clear benefits and pricing",
  "Client reviews and trust signals front and center",
];

export default function FinalCTA() {
  return (
    <section
      className="section"
      style={{
        textAlign: "center",
        background: "var(--primary)",
        borderRadius: "60px 60px 0 0",
        color: "white",
        paddingBottom: "160px",
      }}
    >
      <Reveal>
        <h2 style={{ color: "white", maxWidth: "700px", margin: "0 auto" }}>
          Find out what's costing you bookings{" "}
          <span className="text-italic" style={{ color: "var(--secondary)" }}>
            before you spend a dime.
          </span>
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
            margin: "24px auto 0",
          }}
        >
          Get a free 2-minute video breakdown — plus 25% off when you're ready to redesign.
        </p>
      </Reveal>

      {/* Mock preview cards */}
      <Reveal delay={200}>
        <div
          className="preview-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            maxWidth: "900px",
            margin: "40px auto 64px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "32px",
              border: "1px solid rgba(255,255,255,0.15)",
              textAlign: "left",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.8rem",
                margin: "0 0 12px",
                maxWidth: "none",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Before
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {beforePoints.map((text, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "rgba(255,100,100,0.6)",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.65)",
                      maxWidth: "none",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "rgba(194, 159, 109, 0.15)",
              borderRadius: "24px",
              padding: "32px",
              border: "1px solid var(--secondary)",
              textAlign: "left",
            }}
          >
            <p
              style={{
                color: "var(--secondary)",
                fontSize: "0.8rem",
                margin: "0 0 12px",
                maxWidth: "none",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              After
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {afterPoints.map((text, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <CheckCircle
                    size={16}
                    style={{ color: "var(--secondary)", flexShrink: 0 }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.9)",
                      maxWidth: "none",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div
          style={{
            marginTop: "0px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#audit"
            onClick={(e) => smoothScrollTo(e, "#audit")}
            className="btn"
            style={{ background: "var(--secondary)", color: "var(--text)" }}
          >
            Get Your Free 2-Minute Video{" "}
            <ArrowRight size={20} style={{ marginLeft: "10px" }} />
          </a>
        </div>
        <p
          style={{
            margin: "24px auto 0",
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "none",
          }}
        >
          No credit card. No commitment. Just a clear path to more bookings.
        </p>
      </Reveal>
    </section>
  );
}
