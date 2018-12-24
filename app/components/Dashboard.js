import React, { Component } from 'react';

class Dashboard extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in Dashboard constructor');
    console.log(props);
  }

  render() {
    console.log("Render Dashboard Components");
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default (Dashboard);
