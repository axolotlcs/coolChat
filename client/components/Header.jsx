import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { username, handleLogOut } = props;

  return (
    <div id="header">
      <div
        id="title"
      >
        Cool Chat
      </div>
      <div>
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
