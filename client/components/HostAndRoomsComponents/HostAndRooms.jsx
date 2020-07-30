import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const HostAndRoomsContainer = styled.div`
  #description & {
    padding-top: 15px;
    width: 150%;
    padding-bottom: 15px;
    border-bottom: solid 1px rgb(204, 212, 204);
    font-size: 14px;
    display: flex;
    align-items: row;
    justify-content: flex-start;
  }
`;
const ImageUrl =
  'https://s3.amazonaws.com/uifaces/faces/twitter/kevinjohndayy/128.jpg';

const StyledImage = styled.div`
  #description & {
    position: absolute;
  }
`;

const Header = styled.main`
  #description & {
    font-size: 19px;
    font-weight: bold;
  }
`;

const PlaceSummary = styled.summary`
  #description & {
    font-size: 16px;
  }
`;
class HostAndRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personImage: null,
    };
  }
  // Call for Host service   here
  componentDidMount() {
    axios
      .get(`http://3.12.169.208:2000/api/host/${this.props.listingId}`)
      .then(({ data }) => {
        this.setState({
          personImage: data.photoUrl,
        });
      })
      .catch((error) => {
        // Error handling by serving stock image incase service is down
        console.log('Error Getting Persons Photo from host service!', error);
        this.setState({
          personImage: ImageUrl,
        });
      });
  }

  render() {
    let hostAndRooms = this.props.hostAndRooms;
    let summary = '';
    if (hostAndRooms.entirePlace) {
      summary = `Entire ${hostAndRooms.typeOfPlace} hosted by ${hostAndRooms.name}`;
    } else {
      summary = `Private rooms in ${hostAndRooms.typeOfPlace} hosted by ${hostAndRooms.name}`;
    }
    let accomodationBreakDown = `${hostAndRooms.maxNumberOfGuests} guests ${hostAndRooms.rooms} bedrooms ${hostAndRooms.bedNumber} beds ${hostAndRooms.bathNumber} baths`;

    return (
      <HostAndRoomsContainer>
        <div>
          <Header className="place">{summary}</Header>
          <PlaceSummary className="accomodations">
            {accomodationBreakDown}
          </PlaceSummary>
        </div>
        <img
          src={this.state.personImage}
          style={{ borderRadius: '50%', height: '60px', marginLeft: '25%' }}
        ></img>
      </HostAndRoomsContainer>
    );
  }
}

export default HostAndRooms;
