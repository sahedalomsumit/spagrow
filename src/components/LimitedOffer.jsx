import { CheckCircle, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { smoothScrollTo } from "../utils/scroll";

export default function LimitedOffer() {
  return (
    <section className="section">
      <Reveal>
        <div className="offer-card">
          <div
            className="badge"
            style={{ background: "var(--secondary)", color: "white" }}
          >
            Limited Offer
          </div>
          <h2 style={{ marginTop: "16px", maxWidth: "700px" }}>
            25% Off Your First{" "}
            <span className="text-italic" style={{ color: "var(--primary)" }}>
              Website Project
            </span>
          </h2>
          <p style={{ fontSize: "1.2rem", marginTop: "24px" }}>
            I want to make it easy to get started — with zero risk:
          </p>
          <ul className="offer-list">
            <li>
              <CheckCircle
                size={20}
                style={{ color: "var(--primary)", flexShrink: 0 }}
              />
              <span>25% discount on your first website redesign</span>
            </li>
            <li>
              <CheckCircle
                size={20}
                style={{ color: "var(--primary)", flexShrink: 0 }}
              />
              <span>Open to spa and wellness businesses worldwide</span>
            </li>
            <li>
              <CheckCircle
                size={20}
                style={{ color: "var(--primary)", flexShrink: 0 }}
              />
              <span>Watch a custom 2-minute video review before you commit</span>
            </li>
          </ul>
          <a
            href="#audit"
            onClick={(e) => smoothScrollTo(e, "#audit")}
            className="btn btn-primary"
            style={{ marginTop: "40px" }}
          >
            Claim Your Spot <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
