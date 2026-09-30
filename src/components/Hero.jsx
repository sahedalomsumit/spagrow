import { ArrowRight, Star } from "lucide-react";
import heroImg from "../assets/hero_spa_sage.png";
import Reveal from "./Reveal";
import { smoothScrollTo } from "../utils/scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{
        paddingTop: "140px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Reveal>
        <div className="badge">Based in Helsinki, Finland</div>
      </Reveal>

      <Reveal delay={100}>
        <h1 style={{ marginTop: "16px", maxWidth: "900px" }}>
          Get More Spa Bookings{" "}
          <span className="text-italic" style={{ color: "var(--primary)" }}>
            Without Paying for Ads
          </span>
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p
          style={{
            marginTop: "32px",
            fontSize: "1.4rem",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          I redesign spa and wellness websites so visitors instantly{" "}
          <strong style={{ color: "var(--text)" }}>trust your brand</strong>, feel
          the calm before they arrive, and book — instead of browsing and leaving.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <a
            href="#audit"
            onClick={(e) => smoothScrollTo(e, "#audit")}
            className="btn btn-primary"
            id="hero-cta"
            aria-label="Get a free 2-minute video audit"
          >
            Get a Free 2-Minute Video Audit{" "}
            <ArrowRight size={20} style={{ marginLeft: "10px" }} />
          </a>
          <div className="offer-pill">
            <Star size={16} style={{ color: "var(--secondary)" }} />
            <span>25% off your first project — only a few spots left</span>
          </div>
        </div>
      </Reveal>

      {/* Hero Image - LCP Element */}
      <Reveal delay={400}>
        <div
          style={{
            marginTop: "80px",
            borderRadius: "40px",
            overflow: "hidden",
            height: "520px",
            width: "100%",
            position: "relative",
          }}
        >
          <img
            src={heroImg}
            alt="Premium spa interior showcasing a calm, minimalist design aesthetic"
            fetchpriority="high"
            decoding="async"
            width="1200"
            height="520"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* Glass overlay card */}
          <div
            className="glass"
            style={{
              position: "absolute",
              bottom: "40px",
              right: "40px",
              padding: "32px",
              borderRadius: "24px",
              maxWidth: "280px",
            }}
          >
            <h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              Working With Spas Worldwide
            </h3>
            <p style={{ fontSize: "0.95rem", margin: 0, maxWidth: "none" }}>
              Conversion-focused design tailored to the wellness industry.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
