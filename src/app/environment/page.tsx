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

export default function EnvironmentPage() {
  return (
    <main>
      <Header />
      <div className="page-shell">
        {/* Intro Section */}
        <section className="intro-section">
          <h1>Environment</h1>
          <p>
            Under provisions of the Clean Air Act Amendment (CAAA), the 2015
            Cincinnati ozone area includes portions of the Ohio counties of
            Butler, Clermont, Hamilton, and Warren; and the Kentucky counties
            of Boone, Campbell, and Kenton. Ozone is formed through
            photochemical reactions created when sunlight reacts with volatile
            organic compounds, or VOCs, and oxides of nitrogen (NOx). VOCs and
            NOx occur from incomplete combustion of fossil fuels.
          </p>
        </section>

        {/* Tile Grid */}
        <section className="tile-grid tile-grid-2">
          <a
            className="safety-tile"
            href="#lottr"
            style={{ backgroundColor: "#af0138" }}
          >
            <img src={`${imageBase}/2021/10/ozone.png`} alt="Sunlight icon." />
            <span>Environmental Impact</span>
          </a>
          <a
            className="safety-tile"
            href="#lotttr"
            style={{ backgroundColor: "#008571" }}
          >
            <img src={`${imageBase}/2021/10/emission.png`} alt="Carbon emissions icon." />
            <span>Vehicle Emissions</span>
          </a>
        </section>

        {/* Definition Section */}
        <section className="definition-section">
          <h2>How is Environment defined?</h2>
          <p>
            On June 9, 2022, The U.S. Environmental Protection Agency (EPA) found
            that the Cincinnati, Ohio area had attained 2015 ozone National
            Ambient Air Quality Standard (NAAQS) and have been redesignated as a
            maintenance area. On November 7, 2022, EPA reclassified the Kentucky
            portion of the Greater Cincinnati area to moderate nonattainment.
            With those new designations, the OKI region is still required to
            maintain 2015 ozone standards and complete air quality conformity
            for both the Transportation Improvement Program (TIP) and the
            Metropolitan Transportation Plan (MTP).
          </p>
        </section>

        {/* Section 1: Environmental Impact */}
        <section id="lottr" className="content-section">
          <div className="wide-status">
            <h3>How is the OKI region doing?</h3>
            <p>
              <strong>
                Following progress in reducing fine particle pollution, the
                region has attained the annual particulate matter 2.5 (PM2.5)
                standards.{" "}
              </strong>
              The area must continue to maintain the standards, keep previous
              regulatory commitments and continue to demonstrate transportation
              conformity. PM2.5 refers to a complex mixture of fine particulates,
              primarily from fossil fuel combustion. It is emitted directly and
              will also form indirectly through reactions with precursor
              emissions, especially NOx. A primary contributor to
              transportation-related PM2.5 is diesel emissions.
            </p>
          </div>

          <MetricIntro
            title="Environmental Impact"
            image={`${imageBase}/2021/10/ozone.png`}
          >
            <p>
              The U.S. Environmental Protection Agency (EPA) requires the
              monitoring of six air pollutants due to their harmful effect on
              human health. These “criteria” pollutants include ozone,
              particulate matter (fine and course particulates), carbon monoxide,
              sulfur dioxide, nitrogen dioxide and lead. Monitors have recorded
              high concentrations of ozone and particulates, which have
              frequently caused the OKI region to exceed the health-based
              standards. The good news: Ozone concentrations in the OKI region
              have dropped 12.5 percent and fine particulates (PM2.5) have
              decreased 33.1 percent since 2010. In comparison, ozone and PM2.5
              concentrations in the U.S. have dropped 1.3 percent and 14.8
              percent, respectively.
            </p>
          </MetricIntro>

          {/* Trend & Line Charts Comparison Grid */}
          <div className="trend-block">
            <div className="trend-left">
              <div style={{ marginBottom: "32px" }}>
                <h3>TREND</h3>
                <h4>
                  <strong>Ozone Concentration Levels</strong> 2010-2023
                </h4>
                <img
                  src={`${imageBase}/2021/09/fatalities-by-counties.png`}
                  alt="Map of OKI region with Ohio, Kentucky and Indiana counties in green with downward arrows."
                />
              </div>

              <div>
                <h4>TREND</h4>
                <h4>
                  <strong>Fine Particulates (PM2.5) Concentration Levels ug/m3</strong>{" "}
                  2010-2023
                </h4>
                <img
                  src={`${imageBase}/2021/09/fatalities-by-counties.png`}
                  alt="Map of OKI region with Ohio, Kentucky and Indiana counties in green with downward arrows."
                />
              </div>
            </div>

            <div className="trend-right">
              <div className="full-chart" style={{ margin: "0 0 24px" }}>
                <iframe
                  title="Ozone Concentration Levels (ppm)*"
                  aria-label="Interactive line chart"
                  id="datawrapper-chart-wk0zr"
                  src="https://datawrapper.dwcdn.net/wk0zr/1/"
                  scrolling="no"
                  frameBorder="0"
                  style={{ width: 0, minWidth: "100%", border: "none" }}
                  height="400"
                  className="chart"
                />
              </div>

              <div className="full-chart" style={{ margin: "0" }}>
                <iframe
                  title="Fine Particulates (PM2.5) Concentration Levels ug/m3*"
                  aria-label="Interactive line chart"
                  id="datawrapper-chart-ha5mh"
                  src="https://datawrapper.dwcdn.net/ha5mh/1/"
                  scrolling="no"
                  frameBorder="0"
                  style={{ width: 0, minWidth: "100%", border: "none" }}
                  height="400"
                  className="chart"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Vehicle Emissions */}
        <section id="lotttr" className="content-section">
          <MetricIntro
            title="Vehicle Emissions"
            image={`${imageBase}/2021/10/emission.png`}
          >
            <p>
              Pollutant emissions from motor vehicles can be a major contributor
              to poor air quality. In the OKI region, motor vehicle emissions
              account for about one-third of carbon dioxide (CO2) equivalent,
              and fine particulate emissions. Motor vehicles account for up to
              half of emissions that, when combined with sunlight, form harmful
              ozone. The “ozone-precursor” emissions include volatile organic
              compounds (VOC) and oxides of nitrogen (NOx). The tables below
              show county-level motor vehicle emissions in tons per year (NOx and
              VOC) and million metric tons per year (CO2) through 2050, as
              estimated by OKI’s activity-based model.
            </p>
          </MetricIntro>

          {/* 2-Column Tables Layout */}
          <div className="two-col-charts" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="chart-main" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <iframe
                title="Annual NOx Emissions by County"
                aria-label="table"
                id="datawrapper-chart-P3RWj"
                src="https://datawrapper.dwcdn.net/P3RWj/1/"
                scrolling="no"
                frameBorder="0"
                style={{ width: 0, minWidth: "100%", border: "none" }}
                height="354"
                className="chart"
              />
              <iframe
                title="Annual CO2 Emissions by County"
                aria-label="table"
                id="datawrapper-chart-TlYSf"
                src="https://datawrapper.dwcdn.net/TlYSf/1/"
                scrolling="no"
                frameBorder="0"
                style={{ width: 0, minWidth: "100%", border: "none" }}
                height="354"
                className="chart"
              />
            </div>
            <div className="chart-side">
              <iframe
                title="Annual VOC Emissions by County"
                aria-label="table"
                id="datawrapper-chart-nEpPF"
                src="https://datawrapper.dwcdn.net/nEpPF/1/"
                scrolling="no"
                frameBorder="0"
                style={{ width: 0, minWidth: "100%", border: "none" }}
                height="354"
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
