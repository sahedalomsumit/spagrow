import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import Process from "./components/Process";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import LimitedOffer from "./components/LimitedOffer";
import FreeAudit from "./components/FreeAudit";
import About from "./components/About";
import FinalCTA from "./components/FinalCTA";
import FloatingAuditButton from "./components/FloatingAuditButton";

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <a href="#hero" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <RecentProjects />
        <Process />
        <Problem />
        <Solution />
        <LimitedOffer />
        <FreeAudit />
        <About />
        <FinalCTA />
      </main>
      <FloatingAuditButton />
    </div>
  );
}
