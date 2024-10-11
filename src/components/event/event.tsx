"use client"; // This makes the component run on the client side

import { useState, useEffect, useRef } from "react";
import { Heading } from "@/components/heading";
import Player from "@vimeo/player";
import Head from "next/head";
import Link from "next/link";
import { Meeting } from "@/lib/type";
import { getArchievedMeetings } from "@/lib/utils";
import { tab } from "@/lib/utils";

interface EventProps {
  id: string;
}

export const Event = ({ id }: EventProps) => {
  const [meeting, setMeeting] = useState<Meeting | null>(null);
  const [transcript, setTranscript] = useState("");
  const [videoId, setVideoId] = useState(0);
  const [currentTab, setCurrentTab] = useState("Summary"); // Default tab

  const playerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchLatestMeeting = async () => {
      try {
        const response = await getArchievedMeetings("specialId", id);
        const tempVideoID = response.meeting.videoId;
        setMeeting(response.meeting);
        setVideoId(tempVideoID);
      } catch (error) {
        console.error("Error fetching latest meeting:", error);
      }
    };
    fetchLatestMeeting();
  }, [id]);
  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        if (!meeting?.transcriptFileName) {
          return;
        }
        const response = await fetch(
          `/transcripts/${meeting?.transcriptFileName}`
        );
        const text = await response.text();
        setTranscript(text);
      } catch (error) {
        console.error("Error fetching the transcript:", error);
      }
    };

    fetchTranscript();
  }, [meeting, transcript]);

  useEffect(() => {
    if (videoId == 0) return;
    if (!playerRef.current) return;
    const width = playerRef.current.offsetWidth;
    const player = new Player(playerRef.current, {
      id: videoId,
      autoplay: false,
      loop: false,
      width,
    });

    player.on("play", () => {
      console.log("Playing the video");
    });
    return () => {
      player
        .destroy()
        .then(() => {
          console.log("Player destroyed");
        })
        .catch((error) => {
          console.error("Error destroying player:", error);
        });
    };
  }, [videoId, id]);

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  const formattedDate = meeting?.date
    ? new Date(meeting.date).toLocaleDateString()
    : "Date not available";

  return (
    <div className="chicago-event">
      <Head>
        <title>Event {id}</title>
        <meta name="description" content="Show most recent event" />
      </Head>
      <div>Event {id}</div>
      <div className="p-4 md:p-8">
        {/* Event date will be dynamic */}
        <header>
          <Heading className="text-xl md:text-2xl lg:text-3xl text-balance">
            {meeting?.name}
            {formattedDate}, 10:00 AM CT
          </Heading>
        </header>

        {/* Container for the first two blocks */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
          {/* First Block - Responsive Video Embed */}
          <article className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div
              ref={playerRef}
              style={{ width: "100%", aspectRatio: "16/9" }}
            />
          </article>

          {/* Second Block - Meeting Files */}
          <aside className="bg-white shadow-lg rounded-lg p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-4">Meeting Files</h2>
            <ul>
              {meeting?.meetingFiles.map((file, index) => (
                <li key={index}>
                  <Link
                    href={file.url}
                    className="text-indigo-600 hover:underline"
                    role="link" // This is generally implied but can be specified
                    aria-label={file.fileName}
                  >
                    {file.fileName}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* Full-width block for the new transcript section with tabs */}
        <section className="relative border-b border-gray-200 pb-5 sm:pb-0 mt-8">
          <div className="md:flex md:items-center md:justify-between">
            {/* Removed h3 for clean structure */}
            <div className="mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Share
              </button>
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="sm:hidden">
              <label htmlFor="current-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="current-tab"
                name="current-tab"
                value={currentTab}
                onChange={(e) => setCurrentTab(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                {tab.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="-mb-px flex space-x-8">
                {tab.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    onClick={() => setCurrentTab(item)}
                    aria-current={item == currentTab ? "page" : undefined}
                    className={classNames(
                      item == currentTab
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
                    )}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          {/* Display selected tab content */}
          <div className="mt-6 max-h-96 md:max-h-full overflow-y-scroll bg-white shadow-lg rounded-lg p-6">
            {currentTab === "Summary" && <p>{meeting?.summary}</p>}
            {currentTab === "Transcript" && <pre>{transcript}</pre>}
            {currentTab === "Votes Taken" && <p>{meeting?.votesTaken}</p>}
            {currentTab === "Public Comment" && <p>{meeting?.publicComment}</p>}
            {currentTab === "Feedback" && <p>{meeting?.feedback}</p>}
          </div>
        </section>
      </div>
    </div>
  );
};
