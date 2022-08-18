import { FC } from "react";

import s from "./Grid.module.scss";

interface Props {
  children: React.ReactNode;
}

const Grid: FC<Props> = ({ children }) => {
  return <div className={s.gridContainer}>{children}</div>;
};

export default Grid;
