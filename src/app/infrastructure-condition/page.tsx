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
            className={pathname === href || (href === "/infrastructure-condition" && pathname === "/infrastructure") ? "active" : undefined}
            aria-current={pathname === href || (href === "/infrastructure-condition" && pathname === "/infrastructure") ? "page" : undefined}
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

function MetricIntro({
  title,
  image,
  children,
}: {
  title: string;
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="metric-intro">
      <div>
        <h2>{title}</h2>
        {children && <div className="metric-copy">{children}</div>}
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default function InfrastructureConditionPage() {
  return (
    <main>
      <Header />
      <div className="page-shell">
        {/* Intro Section */}
        <section className="intro-section">
          <h1>Infrastructure Condition</h1>
          <p>
            The Federal Highway Administration (FHWA) requires that all states and
            Metropolitan Planning Organizations (MPOs) measure bridge and roadway
            pavement conditions to establish performance targets to keep roadway
            infrastructure in a state of good repair.
          </p>
        </section>

        {/* Tile Grid */}
        <section className="tile-grid tile-grid-2">
          <a
            className="safety-tile"
            href="#bridge"
            style={{ backgroundColor: "#af0138" }}
          >
            <img src={`${imageBase}/2021/10/bridge.png`} alt="Bridge over water icon." />
            <span>Bridge Condition</span>
          </a>
          <a
            className="safety-tile"
            href="#pavement"
            style={{ backgroundColor: "#008571" }}
          >
            <img src={`${imageBase}/2021/10/pavement.png`} alt="Highway sign icon." />
            <span>Pavement Condition</span>
          </a>
        </section>

        {/* Bridge Condition Section */}
        <section id="bridge" className="content-section">
          <MetricIntro
            title="Bridge Condition"
            image={`${imageBase}/2021/10/bridge.png`}
          >
            <p>
              With over 2,000 bridges in the OKI region, 542 of which are located
              on the National Highway System (NHS), maintaining their safety and
              functionality is critical to keeping people and goods moving.
            </p>
          </MetricIntro>

          <div className="definition-section">
            <h2>What Determines Bridge Condition?</h2>
            <p>
              A bridge is in good condition if its deck, superstructure and
              substructure were rated in good, very good, or excellent condition.
            </p>
          </div>

          <div className="infra-trends-grid">
            <div className="region-status">
              <h3>How is the OKI Region doing?</h3>
              <p>
                Since 2020, the number of bridges in both Ohio and Indiana
                considered to be in “good condition” has increased 3.3% and
                5.5%, respectively (2020-2024). The number of bridges in Kentucky
                in “good condition” has decreased by 0.9% during this period.
              </p>
              <p>
                Bridges considered to be in “poor condition” have stayed
                relatively flat in Ohio and Indiana between 2020 and 2024, while
                bridges rated in “poor condition” in Kentucky have increased
                0.9%.
              </p>
            </div>

            <div className="trend-card">
              <h4>TREND</h4>
              <h5>
                <strong>Bridges in Good Condition – NHS Network</strong> 2020-2024
              </h5>
              <img
                src={`${imageBase}/2023/03/GoodBridgeCondition.png`}
                alt="a map of the OKI region. Ohio and Indiana are green with arrows pointing up. Kentucky is red with an arrow pointing down"
              />
            </div>

            <div className="trend-card">
              <h4>TREND</h4>
              <h5>
                <strong>Bridges in Poor Condition – NHS Network</strong> 2020-2024
              </h5>
              <img
                src={`${imageBase}/2023/03/bridgeconditions.png`}
                alt="Map of OKI region with Ohio and Indiana counties in blue with a neutral dash and Kentucky counties in red with an upward arrow."
              />
            </div>
          </div>

          <div className="full-chart">
            <iframe
              title="Bridges in Good Condition - NHS Network"
              aria-label="table"
              id="datawrapper-chart-Z0rOY"
              src="https://datawrapper.dwcdn.net/Z0rOY/1/"
              scrolling="no"
              frameBorder="0"
              style={{ width: 0, minWidth: "100%", border: "none" }}
              height="313"
              className="chart"
            />
          </div>

          <div className="full-chart">
            <iframe
              title="Bridges in Poor Condition - NHS Network"
              aria-label="table"
              id="datawrapper-chart-AcXcz"
              src="https://datawrapper.dwcdn.net/AcXcz/1/"
              scrolling="no"
              frameBorder="0"
              style={{ width: 0, minWidth: "100%", border: "none" }}
              height="313"
              className="chart"
            />
          </div>

          <div className="gis-map-container">
            <iframe
              loading="lazy"
              src="https://gis.oki.org/bridges"
              width="100%"
              height="800"
              title="OKI Bridges GIS Map"
              className="gis-iframe"
            />
          </div>
        </section>

        {/* Pavement Condition Section */}
        <section id="pavement" className="content-section">
          <MetricIntro
            title="Pavement Condition"
            image={`${imageBase}/2021/10/pavement.png`}
          />

          <div className="definition-section">
            <h2>What Determines Pavement Condition?</h2>
            <div>
              <p>
                Performance ratings of good, fair, or poor condition for
                pavement are determined by FHWA using a combination of several
                metrics from data elements collected by state DOTs and reported
                to the Highway Performance Monitoring System (HPMS).
              </p>
              <p>
                These metrics collectively provide a way to quantify pavement
                condition for roughness and cracking for all pavement types,
                rutting for asphalt pavement surfaces, and faulting (misalignment
                between slabs) for jointed concrete pavement surfaces.
              </p>
              <p>
                Roughness affects users’ travel speeds, safety, comfort and
                transportation costs. Cracking, rutting and faulting are
                considered surface indicators of structural deterioration in
                different pavement types.
              </p>
            </div>
          </div>

          <div className="wide-status">
            <h3>How is the OKI Region doing?</h3>
            <p>
              In 2023, more than 2,780 centerline miles of pavement were rated
              based on roughness, faulting, cracking and rutting. Of those miles,
              1,057 were located on the NHS.
            </p>
          </div>

          {/* Interstates Pavement Conditions */}
          <div className="two-col-charts">
            <div className="chart-main">
              <iframe
                title="Interstates Pavement Conditions (Centerline Miles) - 2019"
                aria-label="table"
                id="datawrapper-chart-5ggZ8"
                src="https://datawrapper.dwcdn.net/5ggZ8/4/"
                scrolling="no"
                frameBorder="0"
                style={{ width: 0, minWidth: "100%", border: "none" }}
                height="579"
                className="chart"
              />
            </div>
            <div className="chart-side">
              <iframe
                id="datawrapper-chart-M9KKu"
                style={{ width: 0, minWidth: "100%", border: "none" }}
                title="Statewide Targets - Interstates"
                src="https://datawrapper.dwcdn.net/M9KKu/1/"
                height="326"
                frameBorder="0"
                scrolling="no"
                aria-label="table"
                className="chart"
              />
            </div>
          </div>

          {/* Non-Interstate Pavement Conditions */}
          <div className="two-col-charts">
            <div className="chart-main">
              <iframe
                title="Non-Interstate Pavement Conditions (Centerline Miles) - 2019 "
                aria-label="table"
                id="datawrapper-chart-CtR3Y"
                src="https://datawrapper.dwcdn.net/CtR3Y/5/"
                scrolling="no"
                frameBorder="0"
                style={{ width: 0, minWidth: "100%", border: "none" }}
                height="649"
                className="chart"
              />
            </div>
            <div className="chart-side">
              <iframe
                id="datawrapper-chart-1MrCO"
                style={{ width: 0, minWidth: "100%", border: "none" }}
                title="Statewide Targets - Non-Interstates"
                src="https://datawrapper.dwcdn.net/1MrCO/1/"
                height="351"
                frameBorder="0"
                scrolling="no"
                aria-label="table"
                className="chart"
              />
            </div>
          </div>

          <div className="gis-map-container">
            <iframe
              loading="lazy"
              src="https://gis.oki.org/pavementcondition"
              width="100%"
              height="800"
              title="OKI Pavement Condition GIS Map"
              className="gis-iframe"
            />
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
