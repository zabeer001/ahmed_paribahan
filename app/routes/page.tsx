import { PopularRoutes } from "../components/home-content";
import { JourneySearch } from "../components/journey-search";
export const metadata = { title: "Routes" };
export default function RoutesPage() {
  return <main id="main-content"><section className="hero"><div className="hero-in"><h1>Find your route across Bangladesh</h1><p>Choose your cities and travel date to explore sample bus options.</p></div></section><JourneySearch /><div style={{ height: 48 }} /><PopularRoutes /><p className="note">Routes, schedules and fares are illustrative. Live ticket booking is not connected.</p></main>;
}
