export enum InputType {
  password = "password",
  text = "text",
  email = "email",
  radio = "radio",
  date = "date",
  phone = "tel",
}

export const tab: string[] = [
  "Summary",
  "Transcript",
  "Votes Taken",
  "Public Comment",
  "Feedback",
];

export async function getArchievedMeetings(caseType: string, id?: string) {
  let url = `/api/achievedmeeting?type=${caseType}`;
  if (caseType === "specialId" && id) {
    url += `&id=${id}`;
  }

  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${caseType}`);
  }

  const result = await res.json();

  return result;
}

export async function getUpcomingdMeetings(caseType: string, id?: string) {
  let url = `/api/upcomingmeeting?type=${caseType}`;
  if (caseType === "specialId" && id) {
    url += `&id=${id}`;
  }

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${caseType}`);
  }

  const result = await res.json();

  return result;
}

export async function getNews(caseType: string, id?: string) {
  let url = `/api/newsinfo?type=${caseType}`;
  if (caseType === "specialId" && id) {
    url += `&id=${id}`;
  }

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${caseType}`);
  }

  const result = await res.json();

  return result;
}

export async function getResourcesSidebarContent() {
  const url = `/api/resources`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch`);
  }

  const result = await res.json();

  return result;
}
