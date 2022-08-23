import { FC, ReactNode } from "react";

interface Props {}

const Sidebar: FC<Props> = () => {
  const isOpen = true;

  return (
    <>
      {isOpen ? (
        <div className='sidebar-container'>
          <div className='sidebar-bg'>
            <h3>Sidebar</h3>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
