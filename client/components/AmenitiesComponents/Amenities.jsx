import React from 'react';
import AmenitiesModal from '../Modals/AmenitiesModal.jsx';
import Modal from '../Modals/Modal.jsx';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 8px;
  border-width: 1px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 13px;
  padding-right: 13px;
  font-size: 12px;
  background: white;
`;

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
          <section key={amenity._id}>
            <img
              // template literal for s3 bucket url
              src={`${Url}${firstWord}.png`}
              style={{ maxHeight: '18px' }}
            ></img>
            <span>
              <img href={amenity.iconLink}></img>
            </span>{' '}
            <span>{amenity.title}</span>
          </section>
        );
      });
    return (
      <div id="amenities">
        {amenitiesToShow}
        <Button id="showMore" onClick={this.toggleModal}>
          Show all {this.props.amenities.length} amenities
        </Button>
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
      </div>
    );
  }
}

export default Amenities;
