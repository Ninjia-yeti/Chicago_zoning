import { ZoningMapItem } from "@/components/resources/zoningMapItem";

export interface zoningMapItemPageProps {
  params: {
    id: string;
  };
}
export default function ZoningMapItemPage({ params }: zoningMapItemPageProps) {
  return <ZoningMapItem id={params.id} />;
}
