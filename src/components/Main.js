import React from 'react';
import API from './API';
import LinkStore from '../stores/LinkStore';

const _getAppState = () => { // eslint-disable-line
  return {
    links: LinkStore.getAll(),
  };
};

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }

  // componentWillMount() {
  //   API.fetchLinks();
  // }

  componentDidMount() {
    API.fetchLinks();
    LinkStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }

  onChange() {
    console.log('4. In the View');
    this.setState({
      links: JSON.parse(_getAppState().links),
    });
  }

  render() {
    console.log(this.state);
    let content = this.state.links.map(link => { // eslint-disable-line
      return (
        <li key={link._id}>
          <a href={link.link}>{link.title}</a>
        </li>
      );
    });

    return (
      <h3>
        <ul>
          {content}
        </ul>
      </h3>
    );
  }
}

// const Hello = function () {
//   return <h3>Hello from a stateless pure function =)</h3>;
// };

export default Main;
