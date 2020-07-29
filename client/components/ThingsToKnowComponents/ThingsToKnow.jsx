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
  font-size: 12px;
`;

const ShowAll = styled.p`
  text-decoration: underline;
  font-size: 12px;
`;

const SectionHeader = styled.div`
  font-weight: bold;
`;
const Url = 'https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/';

// Create a wholesection container for adding a header
// Header was displaying as a flex element if added in ThingsToKnowContainer
const WholeSectionContainer = styled.div`
  padding-top: 10px;
  background-color: rgb(252, 252, 252);
  border-top: solid 1px rgb(204, 212, 204);
  width: 60%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
    let additionalRules;
    let houseRulesProp;
    if (!Array.isArray(thingsToKnow)) {
      // Copy the house rules to prevent any side effects
      let copiedRules = this.props.thingsToKnow.houseRules.slice(0);
      // Make additional rules the last object since it will always come last
      additionalRules = copiedRules[copiedRules.length - 1];
      houseRulesProp = copiedRules.slice(0, copiedRules.length - 2);
      // Assign only house rules that apply (are true) to houseRules variable
      houseRules = copiedRules
        .slice(0, copiedRules.length - 2)
        .filter((rule) => rule.trueOrFalse)
        .map((houseRule, i) => {
          // Get the last lowercased word of each description to dynamically grab PNG for that image
          let wordArray = houseRule.safetyDescription.split(' ');
          let lastWord = wordArray[wordArray.length - 1].toLowerCase();

          return (
            <span key={houseRule._id}>
              <Paragaraph>
                <img
                  // template literal for s3 bucket url
                  src={`${Url}${lastWord}.png`}
                  style={{ maxHeight: '15px' }}
                ></img>{' '}
                {houseRule.safetyDescription}
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
      <Container>
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
                    houseRules={houseRulesProp}
                    additionalRules={additionalRules}
                  ></HouseRulesModal>
                </Modal>
              ) : null}
            </IndividualSection>

            {/* Safety Section  */}
            <IndividualSection className="safetyProperty">
              <SectionHeader className="header">
                Safety & Property
              </SectionHeader>
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
                  <SafetyModal
                    toggleModal={this.toggleModal}
                    safetyRules={thingsToKnow.safety}
                  ></SafetyModal>
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
                // onClick={() => this.toggleModal('cancellationModal')}
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
      </Container>
    );
  }
}
export default ThingsToKnowSection;
