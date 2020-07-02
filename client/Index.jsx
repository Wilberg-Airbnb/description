import React from 'react';
import axios from 'axios';
import MainDescription from './components/MainDescription.jsx';
import Amenities from './components/Amenities.jsx';
import HostAndRooms from './components/HostAndRooms.jsx';
import Card from './components/Card.jsx';
import Carousel from './components/Carousel.jsx';
import BedRoomCard from './components/BedRoomCard.jsx';
import { sleepingArrangements } from './components/sampleDataForTests';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: [],
      amenities: [],
      hostAndRooms: {},
      thingsToDo: [],
      sleepingArrangements: [],
      listingId: window.location.href.split('/')[3] || 0,
    };
  }

  componentDidMount() {
    axios
      .get(`/api/description/${this.state.listingId}`)
      .then(({ data }) => {
        this.setState({
          descriptions: data.description,
          amenities: data.amenities,
          hostAndRooms: data.hostAndRooms[0],
          thingsToDo: data.thingsToDo,
          sleepingArrangements: data.sleepingArrangements,
        });
      })
      .catch((error) => {
        console.log('Error retrieving data!', error);
      });
  }

  render() {
    return (
      <div>
        <BedRoomCard bedroomDescription={sleepingArrangements[4]}></BedRoomCard>
        <HostAndRooms hostAndRooms={this.state.hostAndRooms} />
        <Amenities amenities={this.state.amenities} />
        <MainDescription descriptions={this.state.descriptions} />
        <Carousel
          thingsToDo={this.state.thingsToDo}
          length={this.state.thingsToDo.length}
        ></Carousel>
      </div>
    );
    // }
  }
}

export default Index;
