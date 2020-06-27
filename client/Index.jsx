import React from 'react';
import axios from 'axios';
import MainDescription from './components/MainDescription.jsx';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { descriptions: [] };
  }

  componentDidMount() {
    axios
      .get('/api/description/0')
      .then(({ data }) => {
        this.setState({ descriptions: data.description }, () => {
          console.log('Updated state,', this.state);
        });
      })
      .catch((error) => {
        console.log('Error retrieving data!', error);
      });
    // });
  }

  render() {
    // console.log(this.state);
    // const { mainDescriptions } = this.state.descriptions;
    // if (mainDescriptions === null) {
    // return <h1>Loading</h1>;
    // } else {
    return <MainDescription descriptions={this.state.descriptions} />;
    // }
  }
}

export default Index;
