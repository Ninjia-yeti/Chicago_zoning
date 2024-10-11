import { NewsDetail } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";

const newsData: NewsDetail[] = [
  {
    newsID: "1",
    newsDate: "2024-10-01",
    newsTopic: "Zoning Regulations",
    newsHeadline: "City Implements New Zoning Regulations to Foster Growth",
    newsSubHeadline:
      "Updated zoning laws to promote sustainable urban development.",
    newsSummary:
      "The City Council has approved new zoning regulations to encourage growth in mixed-use areas and improve neighborhood aesthetics.",
    authorName: "John Doe",
    authorRole: "City Reporter",
    newsContent:
      "The new regulations focus on mixed-use developments that combine residential, commercial, and recreational spaces. They will come into effect next month.",
    newsAction: "Read More",
    newsImage: ["https://example.com/images/zoning_meeting.jpg"],
    newsRelatedLinks: [
      {
        name: "City Council Meeting Minutes",
        url: "https://example.com/meeting-minutes",
      },
    ],
  },
  {
    newsID: "2",
    newsDate: "2024-10-05",
    newsTopic: "Community Engagement",
    newsHeadline: "Community Garden Initiative Expands Across the City",
    newsSubHeadline:
      "Residents are invited to participate in creating green spaces.",
    newsSummary:
      "The city’s community garden initiative is expanding to include more neighborhoods, aiming to increase green spaces and promote sustainable gardening practices.",
    authorName: "Jane Smith",
    authorRole: "Environmental Correspondent",
    newsContent:
      "Residents can apply to participate in the program via the city’s website, which seeks to improve urban sustainability.",
    newsAction: "Get Involved",
    newsImage: ["https://example.com/images/garden.jpg"],
    newsRelatedLinks: [
      {
        name: "Apply for Garden Plots",
        url: "https://example.com/garden-apply",
      },
    ],
  },
  {
    newsID: "3",
    newsDate: "2024-09-25",
    newsTopic: "Public Transport",
    newsHeadline: "New Public Transit Routes to Boost Connectivity",
    newsSubHeadline: "City expands bus routes to underserved areas.",
    newsSummary:
      "The city is introducing new bus routes to improve access to public transportation, particularly in underserved neighborhoods.",
    authorName: "Alice Johnson",
    authorRole: "Transportation Analyst",
    newsContent:
      "The expanded routes aim to make it easier for residents to travel to key business and residential areas.",
    newsAction: "View Routes",
    newsImage: ["https://example.com/images/bus_routes.jpg"],
    newsRelatedLinks: [
      { name: "Updated Transit Map", url: "https://example.com/transit-map" },
    ],
  },
  {
    newsID: "4",
    newsDate: "2024-10-08",
    newsTopic: "Housing",
    newsHeadline: "City Approves Affordable Housing Plan",
    newsSubHeadline:
      "New housing developments to address affordability crisis.",
    newsSummary:
      "The City Council has passed a new affordable housing plan that aims to provide more low-income housing options in key areas.",
    authorName: "Michael Brown",
    authorRole: "Urban Development Writer",
    newsContent:
      "The plan allocates funding for the construction of affordable housing units and introduces incentives for developers.",
    newsAction: "Learn More",
    newsImage: ["https://example.com/images/affordable_housing.jpg"],
    newsRelatedLinks: [
      {
        name: "Affordable Housing Programs",
        url: "https://example.com/housing-programs",
      },
    ],
  },
  {
    newsID: "5",
    newsDate: "2024-10-02",
    newsTopic: "Sustainability",
    newsHeadline: "City to Host Sustainability Conference",
    newsSubHeadline:
      "Experts and community leaders will discuss green initiatives.",
    newsSummary:
      "The city is set to host a major sustainability conference, bringing together experts to discuss environmental challenges and solutions.",
    authorName: "Laura White",
    authorRole: "Sustainability Reporter",
    newsContent:
      "The conference will include panels on renewable energy, waste management, and the role of communities in combating climate change.",
    newsAction: "Register Now",
    newsImage: ["https://example.com/images/conference.jpg"],
    newsRelatedLinks: [
      {
        name: "Conference Agenda",
        url: "https://example.com/conference-agenda",
      },
    ],
  },
  {
    newsID: "6",
    newsDate: "2024-09-30",
    newsTopic: "Urban Development",
    newsHeadline: "Downtown Renovation Project Nears Completion",
    newsSubHeadline: "Key infrastructure upgrades are almost finished.",
    newsSummary:
      "The city’s downtown renovation project, aimed at upgrading infrastructure and improving pedestrian access, is nearing completion.",
    authorName: "David Lee",
    authorRole: "Infrastructure Specialist",
    newsContent:
      "The project includes new sidewalks, lighting, and improved public transportation hubs.",
    newsAction: "See Updates",
    newsImage: ["https://example.com/images/downtown.jpg"],
    newsRelatedLinks: [
      { name: "Project Timeline", url: "https://example.com/project-timeline" },
    ],
  },
  {
    newsID: "7",
    newsDate: "2024-10-07",
    newsTopic: "Climate Action",
    newsHeadline: "Mayor Announces New Climate Action Plan",
    newsSubHeadline: "Plan targets carbon neutrality by 2030.",
    newsSummary:
      "The mayor has unveiled an ambitious climate action plan aimed at making the city carbon neutral by 2030.",
    authorName: "Emily Green",
    authorRole: "Climate Policy Writer",
    newsContent:
      "The plan includes initiatives like transitioning to renewable energy for city operations and supporting green businesses.",
    newsAction: "Read the Plan",
    newsImage: ["https://example.com/images/climate_action.jpg"],
    newsRelatedLinks: [
      {
        name: "Full Climate Action Plan",
        url: "https://example.com/climate-plan",
      },
    ],
  },
  {
    newsID: "8",
    newsDate: "2024-10-09",
    newsTopic: "Public Safety",
    newsHeadline: "New Measures Introduced for Community Safety",
    newsSubHeadline: "City implements programs to enhance public safety.",
    newsSummary:
      "In response to community concerns, the city has introduced new measures aimed at improving public safety across neighborhoods.",
    authorName: "Sarah Mitchell",
    authorRole: "Public Safety Correspondent",
    newsContent:
      "These measures include increased funding for community policing and enhanced surveillance in key areas.",
    newsAction: "Discover More",
    newsImage: ["https://example.com/images/community_safety.jpg"],
    newsRelatedLinks: [
      {
        name: "Public Safety Programs",
        url: "https://example.com/safety-programs",
      },
    ],
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const typeCase = searchParams.get("type"); // Case type (all, oldest3, specialId, oldest)
  const specialId = searchParams.get("id"); // For special ID
  const sortedNews = newsData.sort(
    (a, b) => new Date(b.newsDate).getTime() - new Date(a.newsDate).getTime()
  );

  switch (typeCase) {
    case "all":
      return NextResponse.json({ newslist: sortedNews });
      break;

    case "recent":
      return NextResponse.json({ newslist: sortedNews.slice(0, 6) });
      break;

    case "specialId":
      const response = sortedNews.find((news) => news.newsID == specialId);
      if (!response) {
        return NextResponse.json(
          { error: `No user found with ID ${specialId}` },
          { status: 404 }
        );
      }
      return NextResponse.json({ news: response });
      break;

    case "latest":
      return NextResponse.json({ news: sortedNews[0] });
      break;

    default:
      return NextResponse.json(
        { error: "Invalid type parameter" },
        { status: 400 }
      );
  }
}
