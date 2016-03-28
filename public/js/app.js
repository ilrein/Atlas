const React = require('react');
const ReactDOM = require('react-dom');

const Hello = React.createClass({
  render() {
    return <h3>Hello Webpack</h3>;
  },
});

// ReactDOM.render(React.createElement(Hello), document.getElementById('app'));
ReactDOM.render(<Hello />, document.getElementById('app'));
