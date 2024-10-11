import { Meeting } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";

const upcomingMeetings: Meeting[] = [
  {
    id: "1",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "07/16/2024",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 984415832,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "2",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "06/25/2024",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 957304706,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "3",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "06/11/2024",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 956121241,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "4",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "05/21/2024",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 948399335,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "5",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "04/16/2024",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 935051346,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "6",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "04/09/2024",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 932569644,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "7",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "03/14/2024",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 923072291,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "8",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "02/20/2024",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 913448711,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "9",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "01/25/2024",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 905313575,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "10",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "12/12/2023",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 893421397,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "11",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "11/30/2023",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 889629786,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "12",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "10/12/2023",
    meetingFiles: [
      {
        fileName: "Notice Notice Zoning Sept 17.july23.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Agenda AGENDA Zoning Sept 17.sep12.pdf",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Amended Summary",
        url: "/files/document1.pdf",
      },
      {
        fileName: "Other Original Summary.pdf",
        url: "/files/document1.pdf",
      },
    ],
    videoId: 873456725,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-09-17.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const typeCase = searchParams.get("type"); // Case type (all, oldest3, specialId, oldest)
  const specialId = searchParams.get("id"); // For special ID
  const sortedArchievedMeeting = upcomingMeetings.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  switch (typeCase) {
    case "all":
      return NextResponse.json({ meetinglist: sortedArchievedMeeting });
      break;

    case "recent":
      return NextResponse.json({
        meetinglist: sortedArchievedMeeting.slice(0, 3),
      });
      break;

    case "specialId":
      const response = upcomingMeetings.find(
        (meeting) => meeting.id == specialId
      );
      if (!response) {
        return NextResponse.json(
          { error: `No user found with ID ${specialId}` },
          { status: 404 }
        );
      }
      return NextResponse.json({ meeting: response });
      break;

    case "latest":
      return NextResponse.json({ meeting: sortedArchievedMeeting[0] });
      break;

    default:
      return NextResponse.json(
        { error: "Invalid type parameter" },
        { status: 400 }
      );
  }
}
