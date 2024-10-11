interface NewsInfoItemProps {
  newsDate: string;
  newsTopic: string;
  newsTitle: string;
  newsSummary: string;
  authorName: string;
  authorRole: string;
}

export const NewsInfoItem = ({
  newsDate,
  newsTopic,
  newsTitle,
  newsSummary,
  authorName,
  authorRole,
}: NewsInfoItemProps) => {
  return (
    <div className="chicago-newsinfoitem">
      <article className="flex max-w-xl flex-col items-start px-2 py-4">
        <div className="flex justify-around items-center gap-x-4 text-xs w-full">
          <div className="text-gray-500">
            {new Date(newsDate).toDateString()}
          </div>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {newsTopic}
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 h-12 text-center">
            <a href="#">
              <span className="absolute inset-0"></span>
              {newsTitle}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {newsSummary}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                {authorName}
              </a>
            </p>
            <p className="text-gray-600">{authorRole}</p>
          </div>
        </div>
      </article>
    </div>
  );
};
