import { FC } from "react";

interface Props {
  children: React.ReactNode;
  layout?: "A" | "B";
}

const Grid: FC<Props> = ({ children }) => {
  return <div className='gridContainer'>{children}</div>;
};

export default Grid;
