export type MeetingFiles = {
  fileName: string;
  url: string;
};

export type Meeting = {
  id: string;
  name: string;
  date: string;
  meetingFiles: MeetingFiles[];
  videoId: number;
  summary: string;
  transcriptFileName: string;
  votesTaken: string;
  publicComment: string;
  feedback: string;
};

export type LinkType = {
  name: string;
  url: string;
};

export type NewsDetail = {
  newsID: string;
  newsDate: string;
  newsTopic: string;
  newsHeadline: string;
  newsSummary: string;
  authorName: string;
  authorRole: string;
  newsSubHeadline: string;
  newsContent: string;
  newsAction: string;
  newsImage: string[];
  newsRelatedLinks: LinkType[];
};

export type SidebarItem = {
  itemName: ResourceItemType;
  list: LinkType[];
};

export type ResourceItemType = {
  name: string;
  summary: string;
  url: string;
};
