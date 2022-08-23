interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer>
      <div>
        <p>© {new Date().getFullYear()} Malgosia</p>
      </div>
    </footer>
  );
};

export default Footer;
