const React = require('react');
const ReactDOM = require('react-dom');

const Hello = React.createClass({
  render() {
    return React.createElement('h3', null, 'Hello React!');
  },
});

ReactDOM.render(React.createElement(Hello), document.getElementById('app'));
