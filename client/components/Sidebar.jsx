import React, { Component } from 'react';
import ActiveUser from './ActiveUser.jsx';

const sidebarStyles = {
  flexGrow: 1,
  backgroundColor: 'Black',
  height: '100%',
  // height: 'calc(100vh - 40px)',
};

function Sidebar({ activeUsers }) {
  return (
    <div className="sidebar" style={sidebarStyles}>
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
