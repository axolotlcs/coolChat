import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { username, handleLogOut } = props;

  const headerStyles = {
    height: '20px',
    backgroundColor: '#0000c4',
    padding: '20px',
    color: '#FFF',
    display: 'flex',
  };

  const titleStyles = {
    flexGrow: 11,
  };

  const menuStyles = {
    flexGrow: 1,
  };

  return (
    <div id="header" style={headerStyles}>
      <div
        id="title"
        style={titleStyles}
      >
        Cool Chat
      </div>
      <div id="menu" style={menuStyles}>
        <div className="username">
          { username }
        </div>
        <button
          id="logout"
          type="button"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  username: PropTypes.string,
  handleLogOut: PropTypes.func.isRequired,
};

export default Header;
