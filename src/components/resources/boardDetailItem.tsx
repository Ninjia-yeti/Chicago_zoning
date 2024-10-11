interface BoardDetailItemProps {
  id: string;
}

export const BoardDetailItem = ({ id }: BoardDetailItemProps) => {
  return <div>{id}</div>;
};
