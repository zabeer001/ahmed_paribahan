"use client";
import { useState } from "react";
import { routes } from "../lib/data";
import { showPreviewNotice } from "./preview-notice";
export function Offers() {
  const [status, setStatus] = useState("");
  async function copy(code: string) {
    try { await navigator.clipboard.writeText(code); setStatus(`${code} copied. Offers are sample content for this preview.`); }
    catch { setStatus(`Your code: ${code}. Offers are sample content for this preview.`); }
  }
  return <section className="sec" id="offers"><h2>Offers for your next trip</h2><p className="sub">Apply a code at checkout.</p><div className="offers">{[{ title: "৳150 off your first ticket", text: "New to Ahmed Paribahan? Your first booking costs less.", code: "FIRST150", style: "o1" }, { title: "10% off when you pay with bKash", text: "Up to ৳200 on any one-way or round trip.", code: "BKASH10", style: "o2" }, { title: "Eid tickets open early", text: "Book ahead and pick the seat you want before the rush.", code: "EIDEARLY", style: "o3" }].map(offer => <div className={`offer ${offer.style}`} key={offer.code}><div><h3>{offer.title}</h3><p>{offer.text}</p></div><button className="code" aria-label={`Copy offer code ${offer.code}`} onClick={() => copy(offer.code)}>{offer.code}</button></div>)}</div>{status && <p className="preview-status" role="status">{status}</p>}</section>;
}
export function PopularRoutes() {
  function choose(from: string, to: string) {
    window.dispatchEvent(new CustomEvent("select-route", { detail: { from, to } }));
    document.getElementById("search")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    document.getElementById("from")?.focus({ preventScroll: true });
  }
  return <section className="sec" id="routes"><h2>Popular routes</h2><p className="sub">Fares shown are for the cheapest seat.</p><div className="routes">{routes.map(route => <button type="button" className="route" key={`${route.from}-${route.to}`} onClick={() => choose(route.from, route.to)}><b>{route.from} → {route.to}</b><span>About {route.hours} hrs · {route.buses}+ buses a day</span><em>from ৳{route.fare.toLocaleString("en-BD")}</em></button>)}</div></section>;
}
export function AppBanner() {
  return <section className="sec"><div className="app"><div><h2>Your ticket, always in your pocket</h2><p>Book, track your bus and manage trips from the Ahmed Paribahan app.</p></div><div className="stores"><a className="store" href="#" onClick={event => { event.preventDefault(); showPreviewNotice("Google Play", "An app download link has not been supplied. This banner is part of the design preview."); }}><small>Get it on</small>Google Play</a><a className="store" href="#" onClick={event => { event.preventDefault(); showPreviewNotice("App Store", "An app download link has not been supplied. This banner is part of the design preview."); }}><small>Download on the</small>App Store</a></div></div></section>;
}
