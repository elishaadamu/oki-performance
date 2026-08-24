"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";

const imageBase = "https://performance.oki.org/wp-content/uploads";

const navigation = [
  ["Home", "/"],
  ["Safety", "/safety"],
  ["Infrastructure Condition", "/infrastructure"],
  ["Mobility & Congestion", "/mobility-congestion"],
  ["Environment", "/environment"],
  ["Transit Asset Management", "/transit-asset-management-tam"],
] as const;

const measures = [
  { title: "Safety", description: "How safe are our roads?", href: "/safety", image: `${imageBase}/2020/11/safety-rev.png`, color: "#af0138" },
  { title: "Infrastructure", description: "How is our infrastructure holding up?", href: "/infrastructure", image: `${imageBase}/2020/11/infrastructure-rev1.png`, color: "#008571" },
  { title: "Mobility & Congestion", description: "How congested are our roads?", href: "/mobility-congestion", image: `${imageBase}/2020/11/congestion-rev.png`, color: "#b16106" },
  { title: "Environment", description: "How clean is our air?", href: "/environment", image: `${imageBase}/2020/11/environment-rev.png`, color: "#00457a" },
  { title: "Transit Asset Management", description: "How ready is our transit?", href: "/transit-asset-management-tam", image: `${imageBase}/2025/04/transit-tam-1.png`, color: "#5d8128" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  return <main>
    <header className="site-header">
      <a className="site-logo" href="/"><img src="https://performance.oki.org/wp-content/uploads/2021/05/white-horizontal-performance-measures_Performance-Measures.png" alt="OKI Performance Measures" /></a>
      <button className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
        {navigation.map(([label, href]) => <a key={href} href={href} className={pathname === href ? "active" : undefined} aria-current={pathname === href ? "page" : undefined}>{label}</a>)}
        <button aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}><Search size={19} /></button>
      </nav>
      {searchOpen && <form className="search-form" action="/" role="search"><input name="s" aria-label="Search for" autoFocus /><button type="submit">Search</button></form>}
    </header>

    <div className="home-shell">
      <section className="home-hero"><div><h1>Performance Measures in the OKI Region</h1><h2>OKI Regional Council of Governments monitors the performance of our transportation system and infrastructure to promote economic vitality and sustain the environment. Various measures help our region plan for meeting and exceeding performance targets set at the federal and state levels.</h2></div><img src={`${imageBase}/2020/11/data.png`} alt="Data icons including magnifying glass, bar graph and file folder" /></section>
      <section className="measure-grid">{measures.map((measure) => <a className="measure-card" key={measure.href} href={measure.href} style={{ backgroundColor: measure.color }}><img src={measure.image} alt="" /><h2>{measure.title}</h2><p>{measure.description}</p></a>)}</section>
      <section className="plan-section"><div><h2>Performance measures are part of our region&apos;s OKI Metropolitan Transportation Plan Update</h2><p>The OKI region is defined by four counties in Ohio (Butler, Clermont, Hamilton and Warren); three in northern Kentucky (Boone, Campbell and Kenton); and one county in SE Indiana (Dearborn).</p><a className="plan-button" href="https://2050update.oki.org" target="_blank" rel="noreferrer">View the 2050 Plan Update</a></div><img src={`${imageBase}/2020/11/OKI-region-map.png`} alt="Map showing the eight counties in the OKI region" /></section>
    </div>

    <footer className="site-footer"><div><h3>Media inquiries</h3><p>If you are a member of the press, please contact:</p><p><strong>Jim Pickering</strong><br />(859) 801-2403<br /><a href="mailto:jpickering@oki.org">jpickering@oki.org</a></p><p>Please note this contact information is for media inquiries only.</p></div><div><h3>General contact info</h3><p><strong>OKI Regional Council of Governments</strong></p><p>720 E. Pete Rose Way, Suite 420<br />Cincinnati, Ohio 45202</p><p>Phone: 513.621.6300<br />Email: <a href="mailto:info@oki.org">info@oki.org</a><br />Web: <a href="https://www.oki.org/">www.oki.org</a></p><p>Office Hours:<br />8:00 a.m. - 4:30 p.m.</p></div><div><h3>Performance measures</h3>{navigation.slice(1).map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="https://www.oki.org/privacy-policy/">Privacy Policy</a><a href="https://www.oki.org/terms-of-use/">Terms of Use</a><p className="footer-note">Contact <a href="mailto:bporter@oki.org">Brett Porter</a> for questions regarding the Performance Measures.</p></div><div><h3>Other OKI resources</h3><a href="https://traffic.oki.org/">Traffic Counts</a><a href="https://2050update.oki.org/">OKI 2050 Update Metropolitan Transportation Plan</a><a href="https://www.oki.org/data-maps/view-data-maps/">Data &amp; Maps</a><a href="https://www.oki.org/resource-library/view-studies-plans/">Studies &amp; Plans</a><a href="https://www.oki.org/resource-library/view-regional-planning-resources/">Regional Planning Resources</a></div></footer>
  </main>;
}
