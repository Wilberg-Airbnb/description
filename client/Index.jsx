import React from 'react';
import axios from 'axios';
import MainDescription from './components/MainDescriptionComponents/MainDescription.jsx';
import Amenities from './components/AmenitiesComponents/Amenities.jsx';
import HostAndRooms from './components/HostAndRoomsComponents/HostAndRooms.jsx';
import ThingsToDoCarousel from './components/ThingsToDoComponents/ThingsToDoCarousel.jsx';
import BedroomCarousel from './components/BedroomArrangementComponents/BedroomCarousel.jsx';
import ThingsToKnowSection from './components/ThingsToKnowComponents/ThingsToKnow.jsx';
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
      thingsToKnow: [],
      listingId: window.location.pathname.slice(0, -1),
    };
  }

  componentDidMount() {
    axios
      .get(`/api/description${this.state.listingId}`)
      .then(({ data }) => {
        this.setState({
          descriptions: data.description,
          amenities: data.amenities,
          hostAndRooms: data.hostAndRooms[0],
          thingsToDo: data.thingsToDo,
          sleepingArrangements: data.sleepingArrangements,
          thingsToKnow: {
            houseRules: data.houseRules,
            safety: data.safety,
            cancellationPolicy: data.cancellationPolicy[0],
          },
        });
      })
      .catch((error) => {
        console.log('Error retrieving data!', error);
      });
  }

  render() {
    return (
      <div>
        <ThingsToKnowSection
          thingsToKnow={this.state.thingsToKnow}
        ></ThingsToKnowSection>
        <BedroomCarousel
          sleepingArrangements={this.state.sleepingArrangements}
        ></BedroomCarousel>
        <HostAndRooms hostAndRooms={this.state.hostAndRooms} />
        <Amenities amenities={this.state.amenities} />
        <MainDescription descriptions={this.state.descriptions} />
        <ThingsToDoCarousel
          thingsToDo={this.state.thingsToDo}
          length={this.state.thingsToDo.length}
        ></ThingsToDoCarousel>
      </div>
    );
    // }
  }
}

export default Index;
