import React from 'react';
// import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/math-magicians',
      text: 'Home',
    },
    {
      id: 2,
      path: '/math-magicians/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/math-magicians/Quote',
      text: 'Quote',
    },
  ];

  const headerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    fontSize: '1.5rem',
    padding: '1rem 2rem',
  };

  const navUlStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.25rem',
    listStyle: 'none',
    fontWeight: '600',
  };

  return (
    <header className="header" style={headerStyle}>
      <h1 style={{ fontWeight: '900' }}>
        Math Magicians
      </h1>
      <nav>
        <ul style={navUlStyle}>
          { links.map((link) => (
            <li key={link.id}>
              {/* <NavLink to={link.path} activeClassName="active" exact>
                {link.text}
              </NavLink> */}
              {link.text}
            </li>
          )) }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
