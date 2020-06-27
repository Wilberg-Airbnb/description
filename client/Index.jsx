import React from 'react';
import axios from 'axios';
import MainDescription from './components/MainDescription.jsx';
import Amenities from './components/Amenities.jsx';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: [],
      amenities: [],
    };
  }

  componentDidMount() {
    axios
      .get('/api/description/0')
      .then(({ data }) => {
        this.setState({
          descriptions: data.description,
          amenities: data.amenities,
        });
      })
      .catch((error) => {
        console.log('Error retrieving data!', error);
      });
    // });
  }

  render() {
    return (
      <div>
        <Amenities amenities={this.state.amenities} />
        <MainDescription descriptions={this.state.descriptions} />
      </div>
    );
    // }
  }
}

export default Index;
