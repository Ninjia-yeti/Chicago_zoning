import { NewsDetails } from "@/components/news-info/newsDetails";

export interface NewsPageProps {
  params: {
    id: string;
  };
}

export default function NewsPage({ params }: NewsPageProps) {
  return <NewsDetails id={params.id} />;
}
