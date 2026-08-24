"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

const imageBase = "https://performance.oki.org/wp-content/uploads";

const navigation = [
  ["Home", "/"],
  ["Safety", "/safety"],
  ["Infrastructure Condition", "/infrastructure-condition"],
  ["Mobility & Congestion", "/mobility-congestion"],
  ["Environment", "/environment"],
  ["Transit Asset Management", "/transit-asset-management-tam"],
] as const;

const mobilitySubmenu = [
  ["Congestion Management Network", "/mobility-congestion/congestion-management-network"],
  ["Federal Performance Measures", "/mobility-congestion/federal-performance-measures"],
  ["Additional Performance Measures", "/mobility-congestion/additional-performance-measures"],
] as const;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobilityOpen, setMobilityOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <a className="site-logo" href="/">
        <img
          src="https://performance.oki.org/wp-content/uploads/2021/05/white-horizontal-performance-measures_Performance-Measures.png"
          alt="OKI Performance Measures"
        />
      </a>
      <button
        className="mobile-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav
        className={menuOpen ? "main-nav open" : "main-nav"}
        aria-label="Primary navigation"
      >
        {navigation.map(([label, href]) => {
          if (label === "Mobility & Congestion") {
            return (
              <div
                key={href}
                className="nav-dropdown"
                onMouseEnter={() => setMobilityOpen(true)}
                onMouseLeave={() => setMobilityOpen(false)}
              >
                <a
                  href={href}
                  className={pathname.startsWith("/mobility-congestion") ? "active" : undefined}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                  <span style={{ fontSize: "10px", marginLeft: "4px" }}>▼</span>
                </a>
                {mobilityOpen && (
                  <div className="dropdown-menu">
                    {mobilitySubmenu.map(([subLabel, subHref]) => (
                      <a
                        key={subHref}
                        href={subHref}
                        className={pathname === subHref ? "active" : undefined}
                      >
                        {subLabel}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <a
              key={href}
              href={href}
              className={pathname === href ? "active" : undefined}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </a>
          );
        })}
        <button aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}>
          <Search size={19} />
        </button>
      </nav>
      {searchOpen && (
        <form className="search-form" action="/" role="search">
          <input name="s" aria-label="Search for" autoFocus />
          <button type="submit">Search</button>
        </form>
      )}
    </header>
  );
}

export default function MobilityCongestionPage() {
  return (
    <main>
      <Header />
      <div className="page-shell">
        {/* Intro Section */}
        <section className="intro-section">
          <h1>Mobility &amp; Congestion</h1>
          <p style={{ fontSize: "19px", color: "#333", lineHeight: "1.6" }}>
            The OKI region’s quality of life and economic competitiveness are
            closely related to the degree the transportation system is able to
            provide an acceptable level of mobility.
          </p>
        </section>

        {/* How is Congestion defined? */}
        <section
          style={{
            backgroundColor: "#eaeaea",
            borderRadius: "12px",
            padding: "32px",
            margin: "32px 0 40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ fontSize: "36px", lineHeight: "1.2", margin: 0 }}>
              How is Congestion defined?
            </h2>
          </div>
          <div
            style={{
              borderLeft: "3px solid #008571",
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p style={{ margin: 0, lineHeight: "1.7" }}>
              Congestion is the level at which transportation system
              performance is no longer acceptable due to traffic interference.
              The level of acceptable system performance will vary by type of
              transportation facility, location within the region, as well as the
              time of day.
            </p>
            <p style={{ margin: 0, lineHeight: "1.7" }}>
              The level of acceptable system performance depends on a region’s
              transportation and development goals, and how it reflects public
              perception of traffic interference. This traffic interference
              may be recurring or non-recurring congestion.
            </p>
          </div>
        </section>

        {/* Types of Traffic Interference */}
        <section style={{ marginBottom: "48px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "24px" }}>
            Types of Traffic Interference
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h4 style={{ fontSize: "18px", color: "#00457a", marginBottom: "12px" }}>
                Recurring congestion
              </h4>
              <p style={{ marginBottom: "16px" }}>
                Recurring congestion is caused by consistently excessive travel
                demand, as compared to available roadway capacity.
              </p>
              <h5 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "8px" }}>
                Contributors to recurring congestion are:
              </h5>
              <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
                <li>poor signal timings</li>
                <li>poor access-management</li>
                <li>roadway geometric deficiencies</li>
              </ul>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h4 style={{ fontSize: "18px", color: "#00457a", marginBottom: "12px" }}>
                Non-recurring congestion
              </h4>
              <p style={{ marginBottom: "16px" }}>
                Non-recurring congestion occurs due to traffic incidents,
                adverse weather, or road construction.
              </p>
              <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
                <li>
                  Nationally, physical bottlenecks account for about 40 percent
                  of all congestion.
                </li>
                <li>
                  The remaining congestion is the result of traffic incidents
                  (25 percent), poor weather (15 percent), work zones (10
                  percent), poor signal timing (5 percent), and special events
                  (5 percent).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ways OKI manages and measures mobility and congestion */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "26px", marginBottom: "28px" }}>
            Ways OKI manages and measures mobility and congestion
          </h2>

          {/* CMP Banner */}
          <div
            style={{
              backgroundColor: "#044e80",
              borderRadius: "12px",
              padding: "32px",
              color: "#ffffff",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div>
              <h3 style={{ color: "#ffffff", fontSize: "24px", marginBottom: "12px" }}>
                Congestion Management Process (CMP)
              </h3>
              <p style={{ color: "#f0f4f8", margin: 0, lineHeight: "1.7" }}>
                The importance of congestion is reflected in federal
                transportation rules requiring a CMP in metropolitan areas. The
                CMP provides for safe and effective integrated management and
                operation of the multimodal transportation system; and it
                results in performance measures and strategies reflected in the
                metropolitan transportation plan and TIP.
              </p>
            </div>
            <div style={{ justifySelf: "start" }}>
              <a
                href="https://www.oki.org/resource-library/studies-plans/congestion-management-process-findings-and-analysis-cmp/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  backgroundColor: "#0c71c3",
                  color: "#ffffff",
                  padding: "12px 28px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease",
                }}
              >
                View OKI&apos;s CMP
              </a>
            </div>
          </div>

          {/* 3 Interactive Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {/* Card 1: Congestion Management Network */}
            <div
              style={{
                borderRadius: "12px",
                padding: "24px 20px",
                boxShadow: "0px 2px 18px rgba(0,0,0,0.12)",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src={`${imageBase}/2021/01/congestion-management-network-icon.png`}
                alt="GPS icon."
                style={{
                  width: "72px",
                  height: "72px",
                  backgroundColor: "#044e80",
                  borderRadius: "50%",
                  padding: "12px",
                  marginBottom: "16px",
                }}
              />
              <h2 style={{ fontSize: "20px", marginBottom: "12px", textAlign: "center" }}>
                <a
                  href="/mobility-congestion/congestion-management-network"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Congestion Management Network
                </a>
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#555",
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                Click on the map to learn more about the OKI Congestion
                Management Network. It is composed of all facilities on the
                National Highway System (NHS), along with major roadways and all
                other routes determined to be essential to regional mobility and
                continuity.
              </p>
              <a
                href="/mobility-congestion/congestion-management-network"
                style={{ marginTop: "auto", display: "block" }}
              >
                <img
                  src={`${imageBase}/2025/08/Map-1-CMN-Map-Updated-scaled.jpg`}
                  alt="A map of OKI's 7 county region with the NHS roadways in red"
                  style={{
                    borderRadius: "8px",
                    width: "100%",
                    height: "auto",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                />
              </a>
            </div>

            {/* Card 2: Federal Performance Measures */}
            <div
              style={{
                borderRadius: "12px",
                padding: "24px 20px",
                boxShadow: "0px 2px 18px rgba(0,0,0,0.12)",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={`${imageBase}/2021/01/federal-performance-measures-icon.png`}
                alt="Government building icon."
                style={{
                  width: "72px",
                  height: "72px",
                  backgroundColor: "#044e80",
                  borderRadius: "50%",
                  padding: "12px",
                  marginBottom: "16px",
                }}
              />
              <h2 style={{ fontSize: "20px", marginBottom: "16px", textAlign: "center" }}>
                <a
                  href="/mobility-congestion/federal-performance-measures"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Federal Performance Measures
                </a>
              </h2>
              <ul
                style={{
                  width: "100%",
                  textAlign: "left",
                  paddingLeft: "20px",
                  lineHeight: "2",
                  fontSize: "14px",
                }}
              >
                <li>
                  <a
                    href="/mobility-congestion/federal-performance-measures#lottr"
                    style={{ color: "#1967d2" }}
                  >
                    Level of Travel Time Reliability (LOTTR)
                  </a>
                </li>
                <li>
                  <a
                    href="/mobility-congestion/federal-performance-measures#lotttr"
                    style={{ color: "#1967d2" }}
                  >
                    Level of Truck Travel Time Reliability (LOTTTR)
                  </a>
                </li>
                <li>
                  <a
                    href="/mobility-congestion/federal-performance-measures#phed"
                    style={{ color: "#1967d2" }}
                  >
                    Peak Hour Excessive Delay Per Capita (PHED)
                  </a>
                </li>
                <li>
                  <a
                    href="/mobility-congestion/federal-performance-measures#nonsov"
                    style={{ color: "#1967d2" }}
                  >
                    Percent of Non-Single Occupancy Vehicle Travel
                  </a>
                </li>
                <li>
                  <a
                    href="/mobility-congestion/federal-performance-measures#emission"
                    style={{ color: "#1967d2" }}
                  >
                    Total Congestion Mitigation and Air Quality (CMAQ) Emissions
                  </a>
                </li>
              </ul>
            </div>

            {/* Card 3: Additional Performance Measures */}
            <div
              style={{
                borderRadius: "12px",
                padding: "24px 20px",
                boxShadow: "0px 2px 18px rgba(0,0,0,0.12)",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={`${imageBase}/2021/01/additional-performance-measures-icon.png`}
                alt="Stopwatch icon."
                style={{
                  width: "72px",
                  height: "72px",
                  backgroundColor: "#044e80",
                  borderRadius: "50%",
                  padding: "12px",
                  marginBottom: "16px",
                }}
              />
              <h2 style={{ fontSize: "20px", marginBottom: "16px", textAlign: "center" }}>
                <a
                  href="/mobility-congestion/additional-performance-measures"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Additional Performance Measures
                </a>
              </h2>
              <ul
                style={{
                  width: "100%",
                  textAlign: "left",
                  paddingLeft: "20px",
                  lineHeight: "2",
                  fontSize: "14px",
                }}
              >
                <li>
                  <a
                    href="/mobility-congestion/additional-performance-measures#travel"
                    style={{ color: "#1967d2" }}
                  >
                    Travel Speed &amp; Travel Speed Index
                  </a>
                </li>
                <li>
                  <a
                    href="/mobility-congestion/additional-performance-measures#travel"
                    style={{ color: "#1967d2" }}
                  >
                    Roadway Level of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/mobility-congestion/additional-performance-measures#travel"
                    style={{ color: "#1967d2" }}
                  >
                    Travel Time Index (TTI)
                  </a>
                </li>
                <li>
                  <a
                    href="/mobility-congestion/additional-performance-measures#intersection"
                    style={{ color: "#1967d2" }}
                  >
                    Intersection Delay and Level-of-Service (LOS)
                  </a>
                </li>
                <li>
                  <a
                    href="/mobility-congestion/additional-performance-measures#peak"
                    style={{ color: "#1967d2" }}
                  >
                    Peak Period Travel Times between Major Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="/mobility-congestion/additional-performance-measures#peak"
                    style={{ color: "#1967d2" }}
                  >
                    Incident Clearance Time
                  </a>
                </li>
                <li>
                  <a
                    href="/mobility-congestion/additional-performance-measures#transit"
                    style={{ color: "#1967d2" }}
                  >
                    Transit Ridership
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Site Footer */}
      <footer className="site-footer">
        <div>
          <h3>Media inquiries</h3>
          <p>If you are a member of the press, please contact:</p>
          <p>
            <strong>Jim Pickering</strong>
            <br />
            (859) 801-2403
            <br />
            <a href="mailto:jpickering@oki.org">jpickering@oki.org</a>
          </p>
          <p>Please note this contact information is for media inquiries only.</p>
        </div>
        <div>
          <h3>General contact info</h3>
          <p>
            <strong>OKI Regional Council of Governments</strong>
          </p>
          <p>
            720 E. Pete Rose Way, Suite 420
            <br />
            Cincinnati, Ohio 45202
          </p>
          <p>
            Phone: 513.621.6300
            <br />
            Email: <a href="mailto:info@oki.org">info@oki.org</a>
            <br />
            Web: <a href="https://www.oki.org/">www.oki.org</a>
          </p>
          <p>
            Office Hours:
            <br />
            8:00 a.m. - 4:30 p.m.
          </p>
        </div>
        <div>
          <h3>Performance measures</h3>
          {navigation.slice(1).map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a href="https://www.oki.org/privacy-policy/">Privacy Policy</a>
          <a href="https://www.oki.org/terms-of-use/">Terms of Use</a>
          <p className="footer-note">
            Contact <a href="mailto:bporter@oki.org">Brett Porter</a> for
            questions regarding the Performance Measures.
          </p>
        </div>
        <div>
          <h3>Other OKI resources</h3>
          <a href="https://traffic.oki.org/">Traffic Counts</a>
          <a href="https://2050update.oki.org/">
            OKI 2050 Update Metropolitan Transportation Plan
          </a>
          <a href="https://www.oki.org/data-maps/view-data-maps/">Data &amp; Maps</a>
          <a href="https://www.oki.org/resource-library/view-studies-plans/">
            Studies &amp; Plans
          </a>
          <a href="https://www.oki.org/resource-library/view-regional-planning-resources/">
            Regional Planning Resources
          </a>
        </div>
      </footer>
    </main>
  );
}
