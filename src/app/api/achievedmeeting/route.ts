import { Meeting } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";

const archivedMeetings: Meeting[] = [
  {
    id: "1",
    name: "City of Chicago City Council Rules of Conduct for Public Meetings (2023-2027)",
    date: "09/17/2024",
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
    name: "City of Chicago City Council Rules of Conduct for Public Meetings (2023-2027)",
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
    videoId: 957304706,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-07-16.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "3",
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
    videoId: 956121241,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2024-06-25.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "4",
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
    videoId: 948399335,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2023-10-12.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "5",
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
    videoId: 935051346,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2023-11-30.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "6",
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
    videoId: 932569644,
    summary: "Votes Taken content goes here...",
    transcriptFileName: "2023-10-12.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "7",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "07/19/2022",
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
    transcriptFileName: "2022-07-19b",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "8",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "06/21/2022",
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
    transcriptFileName: "2022-06-21.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "9",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "03/14/2022",
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
    transcriptFileName: "2024-03-14.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "10",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "12/14/2021",
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
    transcriptFileName: "2021-12-14.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "11",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "11/16/2021",
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
    transcriptFileName: "2021-11-16.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "12",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "10/12/2021",
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
    transcriptFileName: "2021-10-12.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "13",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "10/07/2020",
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
    transcriptFileName: "2020-10-07.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "14",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "10/06/2020",
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
    transcriptFileName: "2021-10-06.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "15",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "09/08/2020",
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
    transcriptFileName: "2020-09-08.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "16",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "12/10/2019",
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
    transcriptFileName: "2019-12-10.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "17",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "11/19/2019",
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
    transcriptFileName: "2019-11-19.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
  {
    id: "18",
    name: "Committee on Zoning, Landmarks and Building Standards",
    date: "10/16/2019",
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
    transcriptFileName: "2019-10-16.txt",
    votesTaken: "Votes Taken content goes here...",
    publicComment: "Public Comment content goes here...",
    feedback: "Feedback content goes here...",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const typeCase = searchParams.get("type"); // Case type (all, oldest3, specialId, oldest)
  const specialId = searchParams.get("id"); // For special ID
  const sortedArchievedMeeting = archivedMeetings.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  switch (typeCase) {
    case "all":
      return NextResponse.json({ meetinglist: sortedArchievedMeeting });
      break;

    case "recent":
      return NextResponse.json({
        meetinglist: sortedArchievedMeeting.slice(1, 4),
      });

      break;

    case "specialId":
      const meeting = archivedMeetings.find(
        (meeting) => meeting.id == specialId
      );
      if (!meeting) {
        return NextResponse.json(
          { error: `No user found with ID ${specialId}` },
          { status: 404 }
        );
      }
      return NextResponse.json({ meeting: meeting });
      break;

    case "latest":
      return NextResponse.json({ meeting: archivedMeetings[0] });
      break;

    default:
      return NextResponse.json(
        { error: "Invalid type parameter" },
        { status: 400 }
      );
  }
}
