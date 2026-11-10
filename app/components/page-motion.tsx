"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PageMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-entered");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll("main .sec, main .trust").forEach(section => observer.observe(section));
    function stopMotion() {
      if (preference.matches) observer.disconnect();
    }
    preference.addEventListener("change", stopMotion);
    return () => { observer.disconnect(); preference.removeEventListener("change", stopMotion); };
  }, [pathname]);
  return null;
}
