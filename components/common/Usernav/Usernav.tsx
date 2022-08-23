import Link from "next/link";

import { Bag as Cart, Heart } from "@components/icons";

interface Props {}

const Usernav: React.FC<Props> = () => {
  return (
    <ul className='usernav-links'>
      <li>
        <Link href='/'>
          <a>
            <Cart />
          </a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>
            <Heart />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Usernav;
