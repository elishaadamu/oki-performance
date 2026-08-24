export type Metric = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  stat: string;
  statLabel: string;
  trendTitle: string;
  values: number[];
  years: string[];
  accent: "orange" | "teal" | "yellow";
};

export type SiteContent = {
  siteName: string;
  pageKicker: string;
  title: string;
  intro: string;
  definitionTitle: string;
  definition: string;
  metrics: Metric[];
  transitTitle: string;
  transitBody: string;
  transitProviders: string[];
  contactEmail: string;
};

export const defaultContent: SiteContent = {
  siteName: "OKI PERFORMANCE MEASURES",
  pageKicker: "SAFETY / 2026 TARGETS",
  title: "Making every trip home safer.",
  intro: "The OKI region tracks roadway safety with clear, measurable targets. Explore the five-year story behind the numbers and the projects helping move our region forward.",
  definitionTitle: "How is safety defined?",
  definition: "Performance management is a critical element in roadway safety. It is measured by the number of lives lost and serious injuries sustained on the OKI region's roadways. These targets foster transparency and accountability, allowing safety progress to be tracked at regional, state and national levels.",
  metrics: [
    { id: "fatalities", eyebrow: "01 / LIVES LOST", title: "Number of fatalities", body: "An average of 43,904 crashes occurred each year between 2020 and 2024, accounting for an average of 179 lives and causing more than 14,500 injuries. Fatalities have increased 11% in the OKI region since 2020.", stat: "179", statLabel: "average lives lost / year", trendTitle: "Total fatalities, 2020–2024", values: [168, 194, 194, 178, 161], years: ["20", "21", "22", "23", "24"], accent: "orange" },
    { id: "fatality-rate", eyebrow: "02 / EXPOSURE", title: "Rate of fatalities per 100 MVMT", body: "Fatality rates are calculated as the number of fatalities per 100 million vehicle miles traveled. This provides a more accurate measure of the risk of being in a fatal accident. The region's five-year average was 0.92.", stat: "0.92", statLabel: "regional average rate", trendTitle: "Fatality rate per 100M MVMT", values: [1.02, 1.03, 0.97, 0.87, 0.79], years: ["20", "21", "22", "23", "24"], accent: "teal" },
    { id: "injuries", eyebrow: "03 / RECOVERY", title: "Number of serious injuries", body: "Serious injuries are crashes where at least one individual has been incapacitated. All four Ohio counties saw an increase between 2020 and 2024, while the Kentucky counties and Dearborn County saw a decrease.", stat: "−6.4%", statLabel: "change across the region", trendTitle: "Total serious injuries, 2020–2024", values: [15120, 14630, 14980, 14340, 14150], years: ["20", "21", "22", "23", "24"], accent: "yellow" },
    { id: "serious-rate", eyebrow: "04 / EXPOSURE", title: "Serious injury rate per 100 MVMT", body: "Serious injuries are measured against 100 MVMT. The rate declined in every county except Butler County between 2020 and 2024. The OKI region experienced a decline of 19.8% over the five-year period.", stat: "−19.8%", statLabel: "five-year change", trendTitle: "Serious injury rate, 2020–2024", values: [20.1, 19.6, 18.4, 17.1, 16.1], years: ["20", "21", "22", "23", "24"], accent: "teal" },
    { id: "non-motorized", eyebrow: "05 / VULNERABLE USERS", title: "Non-motorized fatalities & serious injuries", body: "This metric includes bicycle and pedestrian fatalities and serious injuries involving a motor vehicle. Bicycle and pedestrian fatalities peaked in 2023 with 37. Serious injuries peaked in 2022 with 124.", stat: "37", statLabel: "fatalities at 2023 peak", trendTitle: "Bike & pedestrian incidents, 2020–2024", values: [128, 139, 161, 158, 145], years: ["20", "21", "22", "23", "24"], accent: "orange" },
  ],
  transitTitle: "Regional transit safety targets",
  transitBody: "OKI established regional transit safety performance targets for each public transportation provider, as required by the Federal Transit Administration and Federal Highway Administration. Rates are calculated per 100,000 revenue miles.",
  transitProviders: ["Butler County Regional Transit Authority (BCRTA)", "City of Cincinnati / Connector Streetcar", "City of Middletown Transit System", "Clermont Transportation Connection (CTC)", "Southwest Ohio Regional Transportation Authority (Metro)", "Transit Authority of Northern Kentucky (TANK)", "Warren County Transit Service (WCTS)"],
  contactEmail: "info@oki.org",
};

export function getStoredContent(): SiteContent {
  if (typeof window === "undefined") return defaultContent;
  try { return JSON.parse(localStorage.getItem("oki-safety-content") || "null") || defaultContent; } catch { return defaultContent; }
}