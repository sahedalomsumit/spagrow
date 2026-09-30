import { Search, Video, Zap } from "lucide-react";
import Reveal from "./Reveal";
import AuditForm from "./AuditForm";

const auditPoints = [
  {
    icon: <Search size={20} />,
    text: "The friction points on your website that make it harder for visitors to book a treatment",
  },
  {
    icon: <Video size={20} />,
    text: "A quick 2-minute personalized video screen recording of your actual website",
  },
  {
    icon: <Zap size={20} />,
    text: "Clear, practical fixes you can use right away to increase bookings",
  },
];

export default function FreeAudit() {
  return (
    <section id="audit" className="section">
      <Reveal>
        <div
          style={{
            background:
              "linear-gradient(135deg, var(--bg-card) 0%, #fef0f6 100%)",
            border: "1px solid var(--stone)",
            borderRadius: "40px",
            padding: "80px 5vw",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div>
            <div className="badge">Free 2-Minute Video Audit</div>
            <h2 style={{ marginTop: "16px", maxWidth: "580px" }}>
              Noticed something making it harder for visitors to book?{" "}
              <span className="text-italic" style={{ color: "var(--primary)" }}>
                I'll record a quick 2-minute video.
              </span>
            </h2>

            <div
              style={{
                marginTop: "24px",
                padding: "20px 24px",
                background: "rgba(255, 255, 255, 0.75)",
                borderRadius: "20px",
                borderLeft: "4px solid var(--primary)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.15rem",
                  lineHeight: 1.6,
                  color: "var(--text)",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                “I was looking at your website and noticed something that could make it harder for visitors to book a treatment. I made a quick 2-minute video showing what I mean. Would you like me to send it?”
              </p>
            </div>

            <div style={{ marginTop: "32px", display: "grid", gap: "20px" }}>
              {auditPoints.map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "var(--stone)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.05rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      maxWidth: "none",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <p
              style={{
                marginTop: "32px",
                fontSize: "1rem",
                fontStyle: "italic",
                color: "var(--text-muted)",
              }}
            >
              Zero sales pitch. 100% actionable. Delivered within 48 hours.
            </p>
          </div>

          <div>
            <div
              className="badge"
              style={{ background: "var(--secondary)", color: "white" }}
            >
              Zero Risk • Free Audit
            </div>
            <h3
              style={{
                fontSize: "1.8rem",
                marginTop: "16px",
                marginBottom: "8px",
              }}
            >
              Would you like me to send it?
            </h3>
            <p style={{ marginBottom: "32px", fontSize: "1rem" }}>
              Drop your website URL below and I'll record a quick 2-minute video showing what could be holding back your bookings — and how to fix it.
            </p>
            <AuditForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
