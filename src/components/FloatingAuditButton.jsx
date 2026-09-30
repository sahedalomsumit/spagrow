import { motion } from "framer-motion";
import { Video, ArrowRight } from "lucide-react";
import { smoothScrollTo } from "../utils/scroll";

export default function FloatingAuditButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.5,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="floating-audit-badge"
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 100,
      }}
    >
      <motion.a
        href="#audit"
        onClick={(e) => smoothScrollTo(e, "#audit")}
        className="glass"
        aria-label="Request a free 2-minute video audit"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "16px 24px",
          borderRadius: "100px",
          textDecoration: "none",
          boxShadow: "var(--shadow-lg)",
          border: "1.5px solid var(--secondary)",
          color: "var(--text)",
          fontWeight: 600,
          whiteSpace: "nowrap",
          cursor: "pointer",
          willChange: "transform",
          transform: "translateZ(0)",
          WebkitFontSmoothing: "antialiased",
          backfaceVisibility: "hidden",
        }}
        whileHover={{
          scale: 1.05,
          borderColor: "var(--primary)",
        }}
        whileTap={{ scale: 0.98 }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            background: "var(--primary)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            boxShadow: "0 4px 12px rgba(75, 99, 68, 0.2)",
          }}
        >
          <Video size={20} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}
        >
          <span
            style={{
              fontSize: "0.850rem",
              display: "block",
              color: "var(--text-muted)",
              fontWeight: 500,
            }}
          >
            Free 2-Min
          </span>
          <span
            style={{
              fontSize: "1.05rem",
              color: "var(--primary)",
              fontWeight: 700,
            }}
          >
            Video Audit
          </span>
        </div>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "var(--bg-tint)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "4px",
          }}
        >
          <ArrowRight size={18} style={{ color: "var(--secondary)" }} />
        </div>
      </motion.a>
    </motion.div>
  );
}
