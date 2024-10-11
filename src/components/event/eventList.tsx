"use client";
import { getArchievedMeetings } from "@/lib/utils";
import { Meeting } from "@/lib/type";
import Link from "next/link";
import { useEffect, useState } from "react";

export const EventList = () => {
  const [allMeeting, setAllMeeting] = useState<Meeting[]>([]);
  const [allYears, setAllYears] = useState<number[]>([]);

  useEffect(() => {
    const fetchAlltMeeting = async () => {
      try {
        const response = await getArchievedMeetings("all");
        setAllMeeting(response.meetinglist);
      } catch (error) {
        console.error("Error fetching latest meeting:", error);
      }
    };
    fetchAlltMeeting();
  }, []);

  useEffect(() => {
    const getAllYears = (meetings: Meeting[]): number[] => {
      const uniqueYears = new Set<number>();
      meetings.forEach((event) => {
        const year = new Date(event.date).getFullYear();
        uniqueYears.add(year);
      });
      return Array.from(uniqueYears);
    };
    if (allMeeting.length) {
      const yearsRange = getAllYears(allMeeting); // Call the function with the meetings
      setAllYears(yearsRange); // Set the unique years in state
    }
  }, [allMeeting]);

  return (
    <div className="chicago-eventlist py-10 bg-gray-100">
      <div className="flex flex-wrap justify-around gap-10">
        {allYears.map((year, index) => (
          <div
            key={index}
            className="flex flex-col w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg p-6"
          >
            <div className="mb-6 text-center text-3xl font-bold text-gray-800 border-b pb-4">
              {year}
            </div>
            <div className="space-y-4">
              {allMeeting.map(
                (meeting, index) =>
                  new Date(meeting.date).getFullYear() == year && (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition duration-300"
                    >
                      <Link
                        href={`/events/${meeting.id}`}
                        className="text-lg text-blue-600 hover:text-blue-800"
                      >
                        {new Date(meeting.date).toLocaleDateString(undefined, {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
