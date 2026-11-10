"use client";
import { useEffect, useRef, useState } from "react";
import { cities, routes } from "../lib/data";
type Journey = { from: string; to: string; departure: string; returning: string; roundTrip: boolean };
export function JourneySearch() {
  const [from, setFrom] = useState("Dhaka");
  const [to, setTo] = useState("Cox’s Bazar");
  const [departure, setDeparture] = useState("");
  const [returning, setReturning] = useState("");
  const [today, setToday] = useState("");
  const [roundTrip, setRoundTrip] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Journey | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const localDate = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
      setToday(localDate); setDeparture(localDate);
    }, 0);
    function select(event: Event) {
      const route = (event as CustomEvent<{ from: string; to: string }>).detail;
      setFrom(route.from); setTo(route.to); setError(""); setResult(null);
    }
    window.addEventListener("select-route", select);
    return () => { window.clearTimeout(timer); window.removeEventListener("select-route", select); };
  }, []);
  function selectRoute(destination: string) { setFrom("Dhaka"); setTo(destination); setError(""); setResult(null); }
  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!from || !to || !departure) { setError("Choose both cities and a travel date."); return; }
    if (from === to) { setError("Choose different departure and destination cities."); return; }
    if (departure < today) { setError("Choose today or a future travel date."); return; }
    if (roundTrip && (!returning || returning < departure)) { setError("Choose a return date on or after your travel date."); return; }
    setError(""); setResult({ from, to, departure, returning, roundTrip });
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }));
  }
  return <section id="search" className="wrap" aria-label="Find your journey"><div className="card"><div className="tabs" role="group" aria-label="Trip type">{[false, true].map(isRound => <button type="button" className={`tab${roundTrip === isRound ? " on" : ""}`} key={String(isRound)} aria-pressed={roundTrip === isRound} onClick={() => { setRoundTrip(isRound); setError(""); setResult(null); }}>{isRound ? "Round trip" : "One way"}</button>)}</div>
    <form onSubmit={submit} noValidate aria-describedby={error ? "search-error" : undefined}><div className={`grid${roundTrip ? " round-trip" : ""}`}>
      <div className="f"><label htmlFor="from">From</label><select id="from" value={from} onChange={event => { setFrom(event.target.value); setResult(null); }}>{cities.map(city => <option key={city}>{city}</option>)}</select></div>
      <button type="button" className="swap" aria-label="Swap cities" onClick={() => { setFrom(to); setTo(from); setResult(null); }}>⇄</button>
      <div className="f"><label htmlFor="to">To</label><select id="to" value={to} onChange={event => { setTo(event.target.value); setResult(null); }}>{cities.map(city => <option key={city}>{city}</option>)}</select></div>
      <div className="f"><label htmlFor="d">Travel date</label><input id="d" type="date" min={today} value={departure} onChange={event => { setDeparture(event.target.value); setResult(null); }} /></div>
      {roundTrip && <div className="f"><label htmlFor="return">Return date</label><input id="return" type="date" min={departure || today} value={returning} onChange={event => { setReturning(event.target.value); setResult(null); }} /></div>}
      <button className="go" type="submit">Search buses</button>
    </div>{error && <p id="search-error" role="alert" className="search-error">{error}</p>}</form>
    <div className="chips"><span>Popular:</span>{["Cox’s Bazar", "Chattogram", "Sylhet", "Rajshahi"].map(city => <button key={city} className={`chip${from === "Dhaka" && to === city ? " on" : ""}`} onClick={() => selectRoute(city)}>Dhaka → {city}</button>)}</div>
  </div>{result && <div ref={resultsRef} className="results" role="region" aria-label="Sample search results" aria-live="polite"><h2>Sample bus results</h2><p className="preview-status">Frontend demo only. Schedules and fares are illustrative; no tickets are reserved.</p>{(result.roundTrip ? [{ from: result.from, to: result.to, date: result.departure, label: "Outbound" }, { from: result.to, to: result.from, date: result.returning, label: "Return" }] : [{ from: result.from, to: result.to, date: result.departure, label: "One way" }]).map(leg => {
    const route = routes.find(route => (route.from === leg.from && route.to === leg.to) || (route.from === leg.to && route.to === leg.from));
    const date = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${leg.date}T12:00:00+06:00`));
    return <div key={leg.label}><h3>{leg.label}: {leg.from} → {leg.to} · {date}</h3>{route ? <div className="result-list">{[{ name: "Non-AC", hour: 8, fare: route.fare }, { name: "AC", hour: 21, fare: route.fare + 450 }].map(bus => {
      const end = bus.hour + route.hours;
      return <div className="result" key={bus.name}><div><b>{bus.name}</b><p>{String(bus.hour).padStart(2, "0")}:00 → {String(end % 24).padStart(2, "0")}:00 {end >= 24 ? "(+1 day)" : ""}</p><p>About {route.hours} hours</p></div><strong>৳{bus.fare.toLocaleString("en-BD")}</strong></div>;
    })}</div> : <p className="preview-status">No sample buses for this route. Try one of the popular routes.</p>}</div>;
  })}</div>}</section>;
}
