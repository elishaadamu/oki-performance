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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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
        {navigation.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className={pathname === href ? "active" : undefined}
            aria-current={pathname === href ? "page" : undefined}
          >
            {label}
          </a>
        ))}
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

export default function TransitAssetManagementPage() {
  return (
    <main>
      <Header />
      <div className="page-shell">
        {/* Intro Section */}
        <section className="intro-section">
          <h1>Transit Asset Management</h1>
          <p>
            The Federal Transit Administration (FTA) requires public
            transportation agencies to develop a compliant Transit Asset
            Management (TAM) plan. It also requires that they set performance
            targets for capital assets, develop performance measures, and
            coordinate with planning partners.
          </p>
          <p>Data is collected and reported for four transit performance measures:</p>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px", lineHeight: "1.8" }}>
            <li>Age of rolling stock</li>
            <li>Age of non-revenue service vehicles</li>
            <li>Condition of infrastructure (tracks, signal and systems)</li>
            <li>Facility condition</li>
          </ul>
          <p>
            TAM target setting and submission requirements apply to any agency
            or parent jurisdiction receiving FTA funds as a recipient or
            sub-recipient. TAM is conducted for all assets used in the provision
            of transit service for which an agency has direct capital
            responsibility. All assets, both federally funded and not federally
            funded, are included in the TAM plan.
          </p>
          <p>
            In addition, included assets are those used by a direct FTA
            recipient, subrecipient, or contracted third-party provider. Transit
            providers annually set targets for the fiscal year. They then develop
            a four-year TAM plan, along with a decision-support tool and
            analytical process for creating a list of prioritized investments to
            maintain or replace assets.
          </p>
          <p>
            Metropolitan planning organizations (MPOs) are required to adopt TAM
            targets for providers in their metropolitan planning areas.
          </p>
        </section>

        {/* Highlight Banner / Card */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            alignItems: "center",
            margin: "40px 0 20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#044E80",
              borderRadius: "15px",
              padding: "28px 16px 20px",
              textAlign: "center",
              maxWidth: "280px",
              justifySelf: "start",
            }}
          >
            <img
              src={`${imageBase}/2025/04/transit-tam-1.png`}
              alt="transit icon"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "13px",
                border: "2px solid #ffffff",
                margin: "0 auto 16px",
                display: "block",
                objectFit: "cover",
              }}
            />
            <h2
              style={{
                color: "#ffffff",
                fontSize: "18px",
                lineHeight: "1.2em",
                margin: 0,
                textAlign: "center",
              }}
            >
              Transit Asset Management
            </h2>
          </div>

          <div>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              TAM in the OKI Region
            </h2>
            <p>
              Transit providers in the OKI TAM planning process are separated
              into two tiers: Tier I and Tier II. Tier I providers operate rail
              service or have more than 100 vehicles in regular service. Tier II
              providers have fewer than 100 regular vehicles in service.
            </p>
            <p>
              In the OKI region, Metro is the only Tier I transit provider.
              Butler County Regional Transit Authority (BCRTA); City of
              Cincinnati (Streetcar); Clermont Transportation Connection (CTC);
              Transit Authority of Northern Kentucky (TANK); and Warren County
              Transit Service (WCTS) are Tier II agencies. (While they are Tier
              II, each has elected to develop their own TAM performance measures
              and targets.)
            </p>
            <p>
              OKI has compiled data about assets owned by these six public
              transit agencies, which were grouped into four categories: rolling
              stock, equipment, facilities, and infrastructure. This data was
              then used to develop regional transit performance measures and
              targets for each.
            </p>
          </div>
        </section>

        {/* Section: Public Transit Agency Regional Transit Performance Measures & Targets 2022 */}
        <section id="bridge" className="content-section" style={{ marginTop: "32px" }}>
          <div className="full-chart">
            <iframe
              title="Public Transit Agency Regional Transit Performance Measures &amp; Targets 2022"
              aria-label="Table"
              id="datawrapper-chart-Td3CU"
              src="https://datawrapper.dwcdn.net/Td3CU/1/"
              scrolling="no"
              frameBorder="0"
              style={{ width: 0, minWidth: "100%", border: "none" }}
              height="482"
              className="chart"
            />
          </div>

          <div style={{ margin: "40px 0 24px" }}>
            <p>
              As Group TAM sponsor for the region, OKI is tasked with developing
              a Tier II Group TAM Plan for Tier II specialized transportation
              service agencies within the region. There were 21 Tier II agencies
              that chose to participate in the Group TAM Plan. OKI compiled data
              about the assets owned by these Tier II agencies, with the intent
              of informing future investment priorities for the Enhanced Mobility
              of Seniors &amp; Individuals with Disabilities (Section 5310)
              program. Using this data, OKI has developed performance targets for
              the Tier II agencies in the region.
            </p>
            <p>
              Additional information on the Tier II Group TAM Plan can be found
              in the{" "}
              <a
                href="https://www.oki.org/resource-library/studies-plans/group-transit-asset-management-plan/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#1967d2", textDecoration: "underline" }}
              >
                Group Transit Asset Management Plan
              </a>
              .
            </p>
          </div>

          {/* Tier II Tables */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div className="full-chart">
              <iframe
                title="Tier II Agency Performance Targets &amp; Measures 2022"
                aria-label="Table"
                id="datawrapper-chart-xDIPG"
                src="https://datawrapper.dwcdn.net/xDIPG/1/"
                scrolling="no"
                frameBorder="0"
                style={{ width: 0, minWidth: "100%", border: "none" }}
                height="543"
                className="chart"
              />
            </div>
            <div className="full-chart">
              <iframe
                title="Tier II Fleet Replacement Targets 2022"
                aria-label="Table"
                id="datawrapper-chart-97GkA"
                src="https://datawrapper.dwcdn.net/97GkA/1/"
                scrolling="no"
                frameBorder="0"
                style={{ width: 0, minWidth: "100%", border: "none" }}
                height="790"
                className="chart"
              />
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
