import Link from "next/link";

interface Props {}

const Usernav: React.FC<Props> = () => {
  return (
    <ul className='usernav-links'>
      <li>
        <Link href='/'>
          <a>Link</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Link</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Link</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Link</a>
        </Link>
      </li>
    </ul>
  );
};

export default Usernav;
