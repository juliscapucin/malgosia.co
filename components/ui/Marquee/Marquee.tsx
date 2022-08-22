import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  background?: "black" | "white";
}

const Marquee: FC<Props> = ({ children, background = "white" }) => {
  return (
    <div className='marqueeContainerOut'>
      <div className='marqueeContainerInner'>
        <div
          className={
            background === "white"
              ? "marqueeContainer"
              : "marqueeContainer black"
          }
        >
          {children}
        </div>
        <div
          className={
            background === "white"
              ? "marqueeContainer"
              : "marqueeContainer black"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
