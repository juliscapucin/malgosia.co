import Link from "next/link";

import { useUIContext } from "@components/ui/context";
import { Bag as Cart, Heart } from "@components/icons";

interface Props {}

const Usernav: React.FC<Props> = () => {
  const { setIsSidebarOpen } = useUIContext();

  return (
    <ul className='usernav-links'>
      <li>
        <Link href='/'>
          <a>
            <Cart onClick={() => setIsSidebarOpen(true)} />
          </a>
        </Link>
      </li>
      <li>
        <Link href='/wishlist'>
          <a>
            <Heart />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Usernav;
