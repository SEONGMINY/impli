import { HTMLAttributes } from "react";

export const Card = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props}></div>;
};
