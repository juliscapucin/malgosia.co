import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Marquee: FC<Props> = ({ children }) => {
  return <div className='marqueeContainer'>{children}</div>;
};

export default Marquee;
