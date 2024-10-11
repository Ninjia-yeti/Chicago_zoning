"use client";
import { getNews } from "@/lib/utils";
import { NewsDetail } from "@/lib/type";
import { useEffect, useState } from "react";
import { NewsInfoItem } from "./newsInfoItem";
import Link from "next/link";

export const NewsInfo = () => {
  const [recentNews, setRecentNews] = useState<NewsDetail[]>([]);

  useEffect(() => {
    const fetchRecentNews = async () => {
      try {
        const tempRecentNews = await getNews("recent");
        setRecentNews(tempRecentNews.newslist);
      } catch (error) {
        console.error("Error fetching recent news:", error);
      }
    };
    fetchRecentNews();
  }, []);

  return (
    <div className="chicago-news">
      <div className="bg-white pt-4 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-roboto">
              Recent News
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2 ">
            {recentNews.map((news, index) => (
              <div key={index} className="shadow-md pb-4">
                <NewsInfoItem
                  newsTopic={news.newsTopic}
                  newsTitle={news.newsHeadline}
                  newsDate={news.newsDate}
                  newsSummary={news.newsSummary}
                  authorName={news.authorName}
                  authorRole={news.authorRole}
                  key={index}
                />
                <p className="text-gray-900 mt-3 px-2">
                  <Link href={`/news-info/${news.newsID}`}>Show Detail...</Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
