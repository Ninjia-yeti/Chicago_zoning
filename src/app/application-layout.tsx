"use client";

import { Avatar } from "@/components/avatar";
import { Navbar, NavbarSection, NavbarSpacer } from "@/components/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/components/sidebar";
import { SidebarLayout } from "@/components/sidebar-layout";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Import icons from @heroicons/react
import {
  HomeIcon,
  Square2StackIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  NewspaperIcon,
} from "@heroicons/react/20/solid";
import { getArchievedMeetings, getUpcomingdMeetings } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Meeting } from "@/lib/type";

export function ApplicationLayout({ children }: { children: React.ReactNode }) {
  const [archievedMeetings, setArchievedMeetings] = useState<Meeting[]>([]);
  const [upcomingMeetings, setUpcomingMeetings] = useState<Meeting[]>([]);

  const pathname = usePathname() || ""; // Fallback to empty string if pathname is null

  useEffect(() => {
    const fetchMeetings = async () => {
      const archievdResult = await getArchievedMeetings("recent");
      setArchievedMeetings(archievdResult.meetinglist);
      const upcomingResult = await getUpcomingdMeetings("recent");
      setUpcomingMeetings(upcomingResult.meetinglist);

      // setUpcomingMeetings(await getUpcomingdMeetings("recent"));
    };

    fetchMeetings();
  }, []);

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Avatar src="/users/erica.jpg" alt="avatar" square />
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-start space-x-2">
              <Image
                src="/assets/images/star.svg"
                alt="Chicago Star"
                width={24}
                height={24}
              />
              <div className="font-big-shoulders">
                {" "}
                {/* Apply Big Shoulders Text here */}
                <span className="font-bold text-xl leading-none font-textdisplay">
                  CHICAGO
                </span>
                <br />
                <span className="font-normal text-sm leading-none font-textdisplay">
                  Committee on Zoning, Landmarks, and Building Standards
                </span>
              </div>
            </div>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/" current={pathname === "/"} tabIndex={0}>
                <HomeIcon /> {/* Ensure the icon is rendered */}
                <SidebarLabel>Latest Meeting</SidebarLabel>
              </SidebarItem>

              {/* Updated AI Assistant link */}
              <SidebarItem
                href="/ai-assistant"
                current={pathname.startsWith("/ai-assistant")}
                tabIndex={1}
              >
                <SparklesIcon /> {/* Ensure the icon is rendered */}
                <SidebarLabel>AI Assistant</SidebarLabel>
              </SidebarItem>
              {/*Upload test should be deleted*/}
              <SidebarItem
                href="/upload-test"
                current={pathname.startsWith("/upload-test")}
              >
                <SidebarLabel>Upload test</SidebarLabel>
              </SidebarItem>
              {/* Updated Resources link */}
              <SidebarItem
                href="/resources"
                current={pathname.startsWith("/resources")}
                tabIndex={2}
              >
                <Square2StackIcon /> {/* Ensure the icon is rendered */}
                <SidebarLabel>Resources</SidebarLabel>
              </SidebarItem>

              {/* Updated News && Info link */}
              <SidebarItem
                href="/news-info"
                current={pathname.startsWith("/news-info")}
                tabIndex={2}
              >
                <NewspaperIcon /> {/* Ensure the icon is rendered */}
                <SidebarLabel>News & Info</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSection className="max-lg:hidden">
              <SidebarHeading>Events Upcoming</SidebarHeading>
              {/* Display dynamically passed events */}
              {upcomingMeetings?.map((meeting) => (
                <SidebarItem key={meeting.id} href={``}>
                  {new Date(meeting.date).toDateString()}
                </SidebarItem>
              ))}
            </SidebarSection>

            <SidebarSection className="max-lg:hidden">
              <SidebarHeading>Events Archive</SidebarHeading>
              {/* Display dynamically passed events */}
              {archievedMeetings?.map((meeting) => (
                <SidebarItem key={meeting.id} href={`/events/${meeting.id}`}>
                  {new Date(meeting.date).toDateString()}
                </SidebarItem>
              ))}
              <SidebarItem
                href="/events"
                current={pathname.startsWith("/events")}
              >
                ...more
              </SidebarItem>
            </SidebarSection>

            <SidebarSpacer />

            <SidebarSection>
              <SidebarItem href="#">
                <QuestionMarkCircleIcon /> {/* Ensure the icon is rendered */}
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>

          <SidebarFooter className="max-lg:hidden">
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-32">
                <Avatar
                  src="/assets/images/walterburnett.png"
                  className="w-32 h-32" // Make the avatar responsive to the width
                  square
                  alt="Ald. Walter Burnett, Jr."
                />
              </div>
              <div className="text-center">
                <span className="block text-sm font-medium text-zinc-950 dark:text-white">
                  Alderman &amp; Vice Mayor <br /> Walter Burnett, Jr.
                </span>
                <span className="block text-xs font-normal text-zinc-500 dark:text-zinc-400">
                  Chairman of the Committee
                </span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}
