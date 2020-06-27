import React from 'react';
import axios from 'axios';
import MainDescription from './components/MainDescription.jsx';
import Amenities from './components/Amenities.jsx';
import HostAndRooms from './components/HostAndRooms.jsx';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: [],
      amenities: [],
      hostAndRooms: {},
    };
  }

  componentDidMount() {
    axios
      .get('/api/description/0')
      .then(({ data }) => {
        this.setState({
          descriptions: data.description,
          amenities: data.amenities,
          hostAndRooms: data.hostAndRooms[0],
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
        <HostAndRooms hostAndRooms={this.state.hostAndRooms} />
        <Amenities amenities={this.state.amenities} />
        <MainDescription descriptions={this.state.descriptions} />
      </div>
    );
    // }
  }
}

export default Index;
