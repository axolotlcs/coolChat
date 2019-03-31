import React, { Component } from 'react';
import ActiveUser from './ActiveUser.jsx';

function Sidebar({ activeUsers }) {
  return (
    <div className="sidebar">
      <h3>Active Users</h3>
      <div>
        {activeUsers.reduce((usersList, curUser) => {
          usersList.push(<ActiveUser username={curUser.username} />);
          return usersList;
        }, [])}
      </div>
    </div>
  );
}

export default Sidebar;
