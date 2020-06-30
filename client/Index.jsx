import React from 'react';
import axios from 'axios';
import MainDescription from './components/MainDescription.jsx';
import Amenities from './components/Amenities.jsx';
import HostAndRooms from './components/HostAndRooms.jsx';
import Card from './components/Card.jsx';
import Carousel from './components/Carousel.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: [],
      amenities: [],
      hostAndRooms: {},
      thingsToDo: [],
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
          thingsToDo: data.thingsToDo,
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
        <Carousel
          thingsToDo={this.state.thingsToDo}
          length={this.state.thingsToDo.length}
        ></Carousel>
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <Card /> */}
        {/* <HostAndRooms hostAndRooms={this.state.hostAndRooms} />
        <Amenities amenities={this.state.amenities} />
        <MainDescription descriptions={this.state.descriptions} /> */}
      </div>
    );
    // }
  }
}

export default Index;
