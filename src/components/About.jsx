import { Mail, Phone, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import blobSvg from "../assets/blob.svg";
import profileImg from "../assets/sahedalomsumit-profile-removebg-preview.png";
import { smoothScrollTo } from "../utils/scroll";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid-bento">
        <div
          style={{
            gridColumn: "span 5",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Reveal
            delay={0}
            className="bento-card"
            style={{
              overflow: "hidden",
              padding: 0,
              minHeight: "420px",
              background: "var(--bg-tint)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              src={blobSvg}
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute",
                width: "120%",
                height: "120%",
                opacity: 0.15,
                transform: "scale(1.2)",
                filter: "blur(40px)",
              }}
              alt=""
              aria-hidden="true"
            />
            <img
              src={blobSvg}
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute",
                width: "130%",
                height: "130%",
                opacity: 0.8,
                zIndex: 1,
              }}
              alt=""
              aria-hidden="true"
            />
            <img
              src={profileImg}
              alt="Sahed Alom Sumit, web designer for spas and wellness businesses"
              loading="lazy"
              decoding="async"
              width="400"
              height="450"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                position: "relative",
                zIndex: 2,
                marginTop: "20px",
              }}
            />
          </Reveal>

          <Reveal delay={100}>
            <div
              className="contact-card bento-card"
              style={{ padding: "24px", gap: "16px", cursor: "default" }}
            >
              <div
                className="badge"
                style={{
                  marginBottom: "8px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Direct Contact
              </div>
              <a href="mailto:sahedalomsumit@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                sahedalomsumit@gmail.com
              </a>
              <a
                href="https://wa.me/358415765539"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon">
                  <Phone size={18} />
                </div>
                +358 41 576 5539 (WhatsApp)
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={150}
          className="bento-card"
          style={{
            gridColumn: "span 7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="badge">About</div>
          <h2 style={{ marginTop: "16px", marginBottom: "16px" }}>
            Hi, I'm Sahed.
          </h2>
          <p
            style={{
              maxWidth: "none",
              fontSize: "1.3rem",
              lineHeight: 1.4,
              fontWeight: 600,
              color: "var(--primary)",
              marginBottom: "24px",
            }}
          >
            High-conversion web design for spas. <br />
            Modern, clean, and reliable.
          </p>

          <p style={{ maxWidth: "none", fontSize: "1.1rem", lineHeight: 1.7 }}>
            When you share your website with me, your problem becomes my
            problem. I don't stop until it's solved — that's what drives my work
            and why I treat every project as a craft, not a task.
          </p>

          <p
            style={{
              maxWidth: "none",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginTop: "16px",
            }}
          >
            For over 5 years, I've partnered with founders, spa owners, and
            agencies worldwide — turning rough ideas into websites that load fast,
            feel right, and actually convert visitors into clients. I work at the
            intersection of design and full-stack development, caring as much
            about the visual experience as the code powering it.
          </p>

          <p
            style={{
              maxWidth: "none",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginTop: "16px",
            }}
          >
            With a bachelor's in Business IT, I understand both the technical
            and commercial sides of your website. Based in Helsinki, I work with
            spa and wellness businesses worldwide to ensure every site I build
            isn't just beautiful — it's built to grow your bookings.
          </p>
          <a
            href="#audit"
            onClick={(e) => smoothScrollTo(e, "#audit")}
            className="btn btn-primary"
            style={{ marginTop: "32px", alignSelf: "flex-start" }}
          >
            Work with Me <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
