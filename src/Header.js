const Header = ({title}) => {
  return (
      <header>
          <h1>{title}</h1>
      </header>
  )
};

// Default props will be used if title prop is not received
Header.defaultProps = {
  title : "Default Title"
}

export default Header;
