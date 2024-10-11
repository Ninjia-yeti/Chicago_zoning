import { SidebarItem } from "@/lib/type";
import { NextResponse } from "next/server";

const ResourceSidebar: SidebarItem[] = [
  {
    itemName: {
      name: "Zoning Map",
      summary:
        "View the latest zoning map to understand the land use and classNameifications in different areas.",
      url: "zoning-map",
    },
    list: [
      { name: "Residential Zones", url: "residential-zones" },
      { name: "Commercial Zones", url: "commercial-zones" },
      { name: "Industrial Zones", url: "industrial-zones" },
      { name: "Agricultural Zones", url: "agricultural-zones" },
      { name: "Special Districts", url: "special-districts" },
    ],
  },
  {
    itemName: {
      name: "Board Detail",
      summary:
        "Read the official city zoning regulations to better understand the laws and policies governing land use.",
      url: "board-detail",
    },
    list: [
      { name: "City Council Board", url: "city-council-board" },
      { name: "Planning and Zoning Board", url: "planning-zoning-board" },
      { name: "Parks and Recreation Board", url: "parks-recreation-board" },
      { name: "Board of Adjustments", url: "adjustments-board" },
      {
        name: "Historic Preservation Board",
        url: "historic-preservation-board",
      },
      {
        name: "Public Safety Advisory Board",
        url: "public-safety-advisory-board",
      },
      {
        name: "Environmental Sustainability Board",
        url: "environmental-sustainability-board",
      },
      { name: "Economic Development Board", url: "economic-development-board" },
    ],
  },
  {
    itemName: {
      name: "FAQ",
      summary:
        "Have questions about attending or participating in city meetings? Check out our frequently asked questions for more details.",
      url: "faq",
    },
    list: [
      {
        name: "General Meeting Information",
        url: "general-meeting-information",
      },
      { name: "Public Participation", url: "public-participation" },
      { name: "Meeting Agendas and Minutes", url: "meeting-agendas" },
      { name: "Special Meetings", url: "special-meetings" },
      { name: "Virtual Meetings", url: "virtual-meetings" },
      { name: "Voting and Decisions", url: "voting-decisions" },
      { name: "Accessibility", url: "accessibility" },
      { name: "Meeting Documents", url: "meeting-documents" },
      { name: "City Council Board", url: "city-council-board" },
    ],
  },
];

export async function GET() {
  return NextResponse.json({ sidebarcontent: ResourceSidebar });
}
