import { BoardDetailItem } from "@/components/resources/boardDetailItem";

export interface BoardDetailItemPageProps {
  params: {
    id: string;
  };
}
export default function BoardDetailItemPage({
  params,
}: BoardDetailItemPageProps) {
  return <BoardDetailItem id={params.id} />;
}
