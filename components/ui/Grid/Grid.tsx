import { FC } from "react";

interface Props {
  children: React.ReactNode;
  layout?: "A" | "B";
}

const Grid: FC<Props> = ({ children, layout = "A" }) => {
  return (
    <div className={layout === "A" ? "gridContainerA" : "gridContainerB"}>
      {children}
    </div>
  );
};

export default Grid;
