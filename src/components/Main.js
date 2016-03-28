import React from 'react';
import API from './API';

class Main extends React.Component {
  componentDidMount() {
    API.fetchLinks();
  }

  render() {
    return <h3>Hello from RGR!</h3>;
  }
}

// const Hello = function () {
//   return <h3>Hello from a stateless pure function =)</h3>;
// };

export default Main;
