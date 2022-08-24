import { FC, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
}

const Sidebar: FC<Props> = ({ children, isOpen }) => {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.toggle("disable-scroll");
  //   }
  // }, [isOpen]);

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
