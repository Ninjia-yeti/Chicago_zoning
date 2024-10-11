"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsDetail } from "@/lib/type";
import { getNews } from "@/lib/utils";

interface NewsDetailProps {
  id: string;
}
export const NewsDetails = ({ id }: NewsDetailProps) => {
  const [newsDetailInfo, setNewsDetailInfo] = useState<NewsDetail | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const tempNews = await getNews("specialId", id);
        setNewsDetailInfo(tempNews.news);
      } catch (error) {
        console.error("Error fetching latest meeting:", error);
      }
    };
    fetchNews();
  }, [id]);

  return (
    <div className="chicago-news">
      <div className="ml-8 pt-10 text-lg">
        <Link href="/news-info">Go to Recent News</Link>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-2">
          {newsDetailInfo?.newsHeadline}
        </h1>
        <h2 className="text-lg text-gray-700 mb-4">
          {newsDetailInfo?.newsSubHeadline}
        </h2>
        <p className="text-gray-600 mb-4">{newsDetailInfo?.newsSummary}</p>

        <h3 className="text-lg font-semibold mt-4">Details:</h3>
        <p className="text-gray-600 mb-4">{newsDetailInfo?.newsContent}</p>

        <h3 className="text-lg font-semibold mt-4">Get Involved:</h3>
        <p className="text-gray-600 mb-4">{newsDetailInfo?.newsAction}</p>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Related Links:</h3>
          <ul className="list-disc pl-5">
            {newsDetailInfo?.newsRelatedLinks?.map((link, index) => (
              <li key={index}>
                <Link href={link.url} className="text-blue-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
