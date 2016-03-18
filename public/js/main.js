let React = require('react');
let ReactDOM = require('react-dom');

let Hello = React.createClass({
  render: function() {
    return React.createElement('h2', null, "Hello Reactjs");
    // return <h2>Hello Webpack</h2>
  }
})

ReactDOM.render(React.createElement(Hello), document.getElementById('demo'));
// ReactDOM.render(<Hello />, document.getElementById('demo'));
