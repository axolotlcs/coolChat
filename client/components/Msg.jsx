import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'inline-flex',
};

const Msg = (props) => {
  const { username, message } = props;
  return (
    <div className="message" style={styles}>
      <div className="username" style={{ 'margin-right': '50px' }}>
        <p>{ username }</p>
      </div>
      <div className="msg">
        <p>{ message }</p>
      </div>
    </div>
  );
};

Msg.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Msg;
