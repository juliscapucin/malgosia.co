interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav>
      <div className='navbar-logo'>
        <h4>Hello</h4>
      </div>
      <ul className='navbar-links'>
        <li>
          <a href='#'>Link</a>
        </li>
        <li>
          <a href='#'>Link</a>
        </li>
        <li>
          <a href='#'>Link</a>
        </li>
        <li>
          <a href='#'>Link</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
