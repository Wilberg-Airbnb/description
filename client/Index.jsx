import React from 'react';
import axios from 'axios';
import MainDescription from './components/MainDescriptionComponents/MainDescription.jsx';
import Amenities from './components/AmenitiesComponents/Amenities.jsx';
import HostAndRooms from './components/HostAndRoomsComponents/HostAndRooms.jsx';
import ThingsToDoCarousel from './components/ThingsToDoComponents/ThingsToDoCarousel.jsx';
import BedroomCarousel from './components/BedroomArrangementComponents/BedroomCarousel.jsx';
import ThingsToKnowSection from './components/ThingsToKnowComponents/ThingsToKnow.jsx';
import Overview from './components/OverviewComponent/Overview.jsx';
import { sleepingArrangements } from './components/sampleDataForTests';
import styled from 'styled-components';

// Define a container and have all of overview, host and rooms, and amenities go in there
const AlignmentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WholeSectionContainer = styled.div`
  width: 60%;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: [],
      amenities: [],
      hostAndRooms: {},
      sleepingArrangements: [],
      thingsToKnow: [],
      listingId: window.location.pathname.slice(1, -1),
      overview: [],
      // Get access to the listingId using pathname, split just for the number
    };
  }

  componentDidMount() {
    // Have to add HTTP protocol && server port as per CORS policy
    // And data-fetching from the proxy-side
    // Switch between http://localhost:4000/api.....
    // `http://${window.location.host}/api/description/${this.state.listingId}`
    axios
      .get(`http://52.14.166.9:4000/api/description/${this.state.listingId}`)
      .then(({ data }) => {
        this.setState({
          descriptions: data.description,
          amenities: data.amenities,
          hostAndRooms: data.hostAndRooms[0],
          overview: data.overview,
          sleepingArrangements: data.sleepingArrangements,
          thingsToKnow: {
            houseRules: data.safety,
            safety: data.houseRules,
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
        <AlignmentContainer>
          <WholeSectionContainer>
            <HostAndRooms hostAndRooms={this.state.hostAndRooms} />
            <Overview
              strictCancellation={this.state.thingsToKnow.cancellationPolicy}
              overview={this.state.overview}
              entirePlace={this.state.hostAndRooms}
            />
            <MainDescription descriptions={this.state.descriptions} />
            <BedroomCarousel
              sleepingArrangements={this.state.sleepingArrangements}
            ></BedroomCarousel>
            <Amenities amenities={this.state.amenities} />
          </WholeSectionContainer>
        </AlignmentContainer>
        <ThingsToKnowSection
          thingsToKnow={this.state.thingsToKnow}
        ></ThingsToKnowSection>
      </div>
    );
    // }
  }
}

export default Index;
