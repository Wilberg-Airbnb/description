import React from 'react';
import AmenitiesModal from '../Modals/AmenitiesModal.jsx';
import Modal from '../Modals/Modal.jsx';
import styled from 'styled-components';

const Button = styled.button`
  #description & {
    border-radius: 8px;
    border-width: 1px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 13px;
    padding-right: 13px;
    font-size: 12px;
    background: white;
    /* position: absolute; */
  }
`;
// Create a parent container
const AmenitiesContainer = styled.div`
  #description & {
    width: 40%;
    display: flex;
    flex-direction: column;
  }
`;

// Create an amenities header
const AmenitiesHeader = styled.div`
  #description & {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;
// Create a flexbox container for the listings
const AmenitiesListingContainer = styled.div`
  #description & {
    width: 125%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
// Make each listing half the size of the listing container
// so that they wrap to the next side
const AmenitiesListing = styled.section`
  #description & {
    width: 50%;
    height: 20%;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

// reference aws bucket
const Url = 'https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/';

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    // Put pngs in a s3 bucket

    let amenitiesToShow = this.props.amenities
      .slice(0, 10)
      .map((amenity, i) => {
        // idenitfy eachword by its lowercased first word
        // Check for trailing semi-commas
        let firstWord = amenity.title.split(' ')[0];
        if (firstWord[firstWord.length - 1] === ',') {
          firstWord = firstWord.slice(0, -1);
        }
        firstWord = firstWord.charAt(0).toLowerCase() + firstWord.slice(1);
        return (
          <AmenitiesListing key={amenity._id}>
            <img
              // template literal for s3 bucket url
              src={`${Url}${firstWord}.png`}
              style={{ maxHeight: '18px' }}
            ></img>
            <span>
              <img href={amenity.iconLink}></img>
            </span>{' '}
            <span>{amenity.title}</span>
          </AmenitiesListing>
        );
      });
    return (
      // <AmenitiesContainer>
      <div>
        <AmenitiesHeader>Amenities</AmenitiesHeader>
        <AmenitiesListingContainer>{amenitiesToShow}</AmenitiesListingContainer>

        {this.state.showModal ? (
          <Modal>
            <AmenitiesModal
              toggleModal={this.toggleModal}
              listItems={this.props.amenities}
              headers={[
                ...new Set(
                  this.props.amenities.map((element) => element.subheader)
                ),
              ]}
            ></AmenitiesModal>
          </Modal>
        ) : null}
        {/* Take button out of container so its not stretched by the display property */}
        <div>
          <Button id="showMore" onClick={this.toggleModal}>
            Show all {this.props.amenities.length} amenities
          </Button>
        </div>
      </div>
      // </AmenitiesContainer>
    );
  }
}

export default Amenities;
