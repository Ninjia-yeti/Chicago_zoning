import { Event } from "@/components/event/event";
export interface EventPageProps {
  params: {
    id: string;
  };
}

export default function EventPage({ params }: EventPageProps) {
  return <Event id={params.id} />;
}
