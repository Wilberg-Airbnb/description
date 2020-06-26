import React from 'react';
import axios from 'axios';
import MainDescription from './components/MainDescription.jsx';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: null };
  }

  componentDidMount() {
    axios.get('/api/description/0').then(({ data }) => {
      this.setState({ description: data }).catch((error) => {
        console.log('Error fetching data', error);
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <MainDescription description={this.state.description} />
      </div>
    );
  }
}
export default Index;
