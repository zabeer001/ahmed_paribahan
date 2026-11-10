"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { Brand } from "./brand";
import { Icon } from "./icons";
import { showPreviewNotice } from "./preview-notice";

function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, () => document.documentElement.dataset.theme || "dark", () => "dark");
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("ahmed-theme", next); } catch { /* The toggle also works without storage. */ }
  }
  const links = [{ name: "Bus tickets", href: "/" }, { name: "Routes", href: "/routes" }, { name: "Offers", href: "/offers" }, { name: "Services", href: "/services" }, { name: "Help", href: "/help" }];
  return <header className="nav"><div className="nav-in"><Brand /><nav className="links" aria-label="Main navigation">{links.map(link => <Link key={link.name} href={link.href} className={pathname === link.href ? "on" : undefined} aria-current={pathname === link.href ? "page" : undefined}>{link.name}</Link>)}<Link className={pathname === "/manage-booking" ? "on" : undefined} href="/manage-booking">Manage booking</Link></nav><div className="right"><span className="lang" lang="en">EN | বাংলা</span><button className="theme-toggle" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} onClick={toggleTheme}><Icon name={theme === "dark" ? "sun" : "moon"} /></button><button className="btn-o" onClick={() => showPreviewNotice("Sign in", "Account sign-in is not connected in this frontend preview.")}>Sign in</button><button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-links" onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button></div></div>{open && <nav id="mobile-links" className="mobile-links" aria-label="Mobile navigation">{links.map(link => <Link key={link.name} href={link.href} onClick={() => setOpen(false)}>{link.name}</Link>)}<Link href="/manage-booking" onClick={() => setOpen(false)}>Manage booking</Link></nav>}</header>;
}
