"use client";

import { getResourcesSidebarContent } from "@/lib/utils";
import { SidebarItem } from "@/lib/type";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ResourceSideBar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [sidebar, setSidebar] = useState<SidebarItem[]>([]);

  useEffect(() => {
    const fetchResourceSidebar = async () => {
      try {
        const tempSidebar = await getResourcesSidebarContent();
        setSidebar(tempSidebar.sidebarcontent);
      } catch (error) {
        console.error("Error fetching latest meeting:", error);
      }
    };
    fetchResourceSidebar();
  }, []);
  const initialClassName =
    "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block";
  const selectClasssName =
    "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-sky-500 before:bg-sky-500";
  return (
    <div className="chicago-resource-sidebar">
      <div className="bg-slate-50 h-screen pt-5 pb-10 pl-2 overflow-y-auto">
        <h2 className="text-slate-900 font-medium font-roboto mb-6">
          <Link href={`/resources/`}>Go to Resource Page</Link>
        </h2>
        <ul>
          {sidebar.map((MenuItem, index) => (
            <li key={index} className="mb-4">
              <h2 className="text-slate-900 font-medium font-roboto">
                <Link href={`/resources/${MenuItem.itemName.url}`}>
                  {MenuItem.itemName.name}
                </Link>
              </h2>
              <ul className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800">
                {MenuItem.list.map((item, index1) => (
                  <li
                    key={index1}
                    className="relative"
                    onClick={() => setSelectedItem(item.name)}
                  >
                    <Link
                      href={`/resources/${MenuItem.itemName.url}/${item.url}`}
                      className={`${
                        selectedItem == item.name
                          ? selectClasssName
                          : initialClassName
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
