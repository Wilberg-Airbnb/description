import React from 'react';
import styled from 'styled-components';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import ErrorIcon from '@material-ui/icons/Error';
import HouseRulesModal from '../Modals/HouseRulesModal.jsx';
import CancellationModal from '../Modals/CancellationModal.jsx';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  background-color: rgb(252, 252, 252);
`;

const IndividualSection = styled.div`
  height: 9rem;
  width: 10rem;
  background-color: pink;
  overflow-wrap: break-word;
`;
const Paragaraph = styled.p`
  font-size: 10px;
`;

const ShowAll = styled.p`
  text-decoration: underline;
`;

class ThingsToKnowSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHouseRulesModal: false,
      showSafetyModal: false,
      showCancellationModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(modalName) {
    if (modalName === 'houseRulesModal') {
      this.setState({ showHouseRulesModal: !this.state.showHouseRulesModal });
    }
    if (modalName === 'safetyModal') {
      this.setState({ showSafetyModal: !this.state.showSafetyModal });
    }
    if (modalName === 'cancellationModal') {
      this.setState({
        showCancellationModal: !this.state.showCancellationModal,
      });
    }
  }

  render() {
    const thingsToKnow = this.props.thingsToKnow;
    let houseRules;
    let safetyProperty;
    if (!Array.isArray(thingsToKnow)) {
      houseRules = this.props.thingsToKnow.houseRules
        .map((houseRule, i) => {
          return (
            <span key={houseRule._id}>
              <Paragaraph>
                <AccessAlarmIcon fontSize="small"></AccessAlarmIcon>
                {houseRule.subheader.split(' ').slice(0, 3).join(' ')}
              </Paragaraph>
            </span>
          );
        })
        .slice(0, 5);

      safetyProperty = thingsToKnow.safety
        .map((safetyRule, i) => {
          return (
            <span key={safetyRule._id}>
              <Paragaraph>
                {' '}
                <ErrorIcon fontSize="small"></ErrorIcon>
                {safetyRule.subheader.split(' ').slice(0, 3).join(' ')}
              </Paragaraph>
            </span>
          );
        })
        .slice(0, 2);
    }
    return (
      <Container>
        <IndividualSection className="houseRules">
          <div className="header">House Rules</div>
          {houseRules}

          <ShowAll
            id="showAllHouseRules"
            onClick={() => this.toggleModal('houseRulesModal')}
          >
            Show All >
          </ShowAll>
          {this.state.showHouseRulesModal ? (
            <HouseRulesModal
              toggleModal={this.toggleModal}
              // listItems={this.props.amenities}
            ></HouseRulesModal>
          ) : null}
        </IndividualSection>

        <IndividualSection className="safetyProperty">
          <div className="header">Safety & Property</div>
          {safetyProperty}

          <ShowAll
            id="showAllSafetyRules"
            onClick={() => this.toggleModal('safetyModal')}
          >
            Show All >
          </ShowAll>
        </IndividualSection>
        <IndividualSection className="cancellationPolicy">
          <div className="header">Cancellation policy</div>
          <ShowAll
            id="showCancellationPolicy"
            onClick={() => this.toggleModal('cancellationModal')}
          >
            More Details >
          </ShowAll>
          {this.state.showCancellationModal ? (
            <CancellationModal
              toggleModal={this.toggleModal}
              // listItems={this.props.amenities}
            ></CancellationModal>
          ) : null}
        </IndividualSection>
      </Container>
    );
  }
}
export default ThingsToKnowSection;
