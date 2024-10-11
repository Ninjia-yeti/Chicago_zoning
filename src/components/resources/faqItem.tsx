interface FaqItemProps {
  id: string;
}

export const FaqItem = ({ id }: FaqItemProps) => {
  return <div>{id}</div>;
};
