import React from 'react';
import styled from 'styled-components';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import ErrorIcon from '@material-ui/icons/Error';
import Modal from '../Modals/Modal.jsx';
import HouseRulesModal from '../Modals/HouseRulesModal.jsx';
import CancellationModal from '../Modals/CancellationModal.jsx';
import SafetyModal from '../Modals/SafetyModal.jsx';

// Width is no 100% to inherite the 60% from its parent element
const ThingsToKnowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgb(252, 252, 252);
  height: 200px;
`;

const IndividualSection = styled.div`
  height: 9rem;
  width: 10rem;
  background-color: '#fff';
  overflow-wrap: break-word;
`;
const Paragaraph = styled.p`
  font-size: 10px;
`;

const ShowAll = styled.p`
  text-decoration: underline;
  font-size: 12px;
`;

const SectionHeader = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

// Create a wholesection container for adding a header
// Header was displaying as a flex element if added in ThingsToKnowContainer
const WholeSectionContainer = styled.div`
  padding-top: 10px;
  background-color: rgb(252, 252, 252);
  border-top: solid 1px rgb(204, 212, 204);
  width: 60%;
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
                <AccessAlarmIcon style={{ fontSize: 12 }}></AccessAlarmIcon>
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
                <ErrorIcon style={{ fontSize: 12 }}></ErrorIcon>
                {safetyRule.subheader.split(' ').slice(0, 3).join(' ')}
              </Paragaraph>
            </span>
          );
        })
        .slice(0, 2);
    }

    return (
      <WholeSectionContainer>
        <h4>Things To Know</h4>

        <ThingsToKnowContainer>
          {/* House Rules Section */}
          <IndividualSection className="houseRules">
            {/* Underline each header */}
            <SectionHeader className="header">House Rules</SectionHeader>
            {houseRules}

            <ShowAll
              id="showAllHouseRules"
              onClick={() => this.toggleModal('houseRulesModal')}
            >
              Show All >
            </ShowAll>
            {/* Conditional rendering the modal when you  click Show All */}
            {this.state.showHouseRulesModal ? (
              <Modal>
                <HouseRulesModal
                  toggleModal={this.toggleModal}
                ></HouseRulesModal>
              </Modal>
            ) : null}
          </IndividualSection>

          {/* Safety Section  */}
          <IndividualSection className="safetyProperty">
            <SectionHeader className="header">Safety & Property</SectionHeader>
            {safetyProperty}

            <ShowAll
              id="showAllSafetyRules"
              onClick={() => this.toggleModal('safetyModal')}
            >
              Show All >
            </ShowAll>
            {/* Conditional rendering the modal when you  click Show All */}
            {this.state.showSafetyModal ? (
              <Modal>
                <SafetyModal toggleModal={this.toggleModal}></SafetyModal>
              </Modal>
            ) : null}
          </IndividualSection>

          {/* Cancellation Section */}
          <IndividualSection className="cancellationPolicy">
            <SectionHeader className="header">
              Cancellation policy
            </SectionHeader>
            <ShowAll
              id="showCancellationPolicy"
              onClick={() => this.toggleModal('cancellationModal')}
            >
              More Details >
            </ShowAll>
            {/* Conditional rendering the modal when you  click More Details */}
            {this.state.showCancellationModal ? (
              <Modal>
                <CancellationModal
                  toggleModal={this.toggleModal}
                ></CancellationModal>
              </Modal>
            ) : null}
          </IndividualSection>
        </ThingsToKnowContainer>
      </WholeSectionContainer>
    );
  }
}
export default ThingsToKnowSection;
