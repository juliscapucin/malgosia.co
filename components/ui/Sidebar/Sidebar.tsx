import { FC, ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}

const Sidebar: FC<Props> = ({ children }) => {
  const isOpen = true;

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
