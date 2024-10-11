import { FaqItem } from "@/components/resources/faqItem";

export interface FaqItemPageProps {
  params: {
    id: string;
  };
}
export default function FaqItemPage({ params }: FaqItemPageProps) {
  return <FaqItem id={params.id} />;
}
