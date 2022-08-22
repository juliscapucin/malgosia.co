import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Marquee: FC<Props> = ({ children }) => {
  return (
    <div className='marqueeContainerOut'>
      <div className='marqueeContainer'>{children}</div>
      <div className='marqueeContainer duplicated'>{children}</div>
    </div>
  );
};

export default Marquee;
