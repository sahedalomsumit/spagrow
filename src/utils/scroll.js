/**
 * Smoothly scrolls to a target section by taking into account its CSS scrollMarginTop
 * and fixed header offsets, matching top navigation behavior.
 */
export const smoothScrollTo = (e, href) => {
  if (e && typeof e.preventDefault === "function") {
    e.preventDefault();
  }

  const targetId = (href || "").replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    const computedStyle = window.getComputedStyle(element);
    const scrollMarginTop = parseInt(computedStyle.scrollMarginTop, 10) || 70;
    const rect = element.getBoundingClientRect();
    const scrollPosition = rect.top + window.pageYOffset - scrollMarginTop;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
};
