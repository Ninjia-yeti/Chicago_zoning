"use client";

import { getResourcesSidebarContent } from "@/lib/utils";
import { SidebarItem } from "@/lib/type";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Resources = () => {
  const [resourceContent, SetResourceContent] = useState<SidebarItem[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const tempContent = await getResourcesSidebarContent();
        SetResourceContent(tempContent.sidebarcontent);
      } catch (error) {
        console.error("Error fetching :", error);
      }
    };
    fetchContent();
  }, []);

  return (
    <div className="chicago-resources">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* <!-- Section Header --> */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Resources</h2>
          <p className="mt-2 text-lg text-gray-600">
            Find useful documents and links related to zoning maps, board detail
            and FAQ
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {resourceContent.map((content, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-6 bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {content.itemName.name}
              </h3>
              <p className="text-gray-600 mb-4 h-20 xl:h-32">
                {content.itemName.summary}
              </p>
              <Link
                href={`/resources/${content.itemName.url}`}
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                View {content.itemName.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
