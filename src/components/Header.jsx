import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/favicon-sahed-alom-sumit.png";
import { navLinks } from "../data/navigation";
import { smoothScrollTo } from "../utils/scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Throttled scroll detection for sticky navbar background
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // High-performance IntersectionObserver for active section tracking without layout thrashing
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      smoothScrollTo(e, href);
    }, 100);
  };

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          padding: "14px 5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
          aria-label="SpaGrow Homepage"
        >
          <img
            src={logoImg}
            alt="SpaGrow Logo"
            width="36"
            height="36"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "var(--bg-tint)",
              padding: "4px",
            }}
          />
          <span
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--primary)",
              letterSpacing: "-0.02em",
            }}
          >
            SpaGrow
          </span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <nav className="desktop-nav" aria-label="Main Navigation" style={{ display: "flex", gap: "32px" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`nav-link ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "var(--primary)",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              overflow: "hidden",
              background: "var(--bg)",
              borderBottom: "1px solid var(--stone)",
              boxShadow: "var(--shadow-lg)",
            }}
            className="mobile-nav"
          >
            <nav
              aria-label="Mobile Navigation"
              style={{
                padding: "20px 5vw 40px",
                display: "flex",
                flexDirection: "column",
                gap: "0px",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${
                    activeSection === link.href.substring(1) ? "active" : ""
                  }`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  style={{
                    fontSize: "1.2rem",
                    width: "100%",
                    display: "block",
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
