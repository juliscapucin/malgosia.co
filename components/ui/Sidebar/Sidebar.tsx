import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
}

const Sidebar: FC<Props> = ({ children, isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className='sidebar-container'>
          <div className='sidebar-bg'>{children}</div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
