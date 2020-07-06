import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  padding-top: 15px;
  width: 33%;
  overflow-wrap: break-word;
  padding-bottom: 15px;
  border-bottom: solid 2px rgb(204, 212, 204);
  border-top: solid 2px rgb(204, 212, 204);
  font-size: 12px;
`;

class MainDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
    // this.showMore = this.showMore.bind(this);
  }

  showMore(event) {
    this.setState({ showMore: true });
  }

  render() {
    let sections = this.props.descriptions;
    let reactSections = sections.map((section, i) => {
      return (
        <section key={i}>
          <h6>{section.header}</h6>
          <p>{section.description}</p>
        </section>
      );
    });
    if (!this.state.showMore) {
      return (
        <DescriptionContainer>
          {reactSections.slice(0, 1)}
          <span id="seeMore" onClick={() => this.showMore()}>
            ...read More
          </span>
        </DescriptionContainer>
      );
    } else {
      return <DescriptionContainer>{reactSections}</DescriptionContainer>;
    }
  }
}

export default MainDescription;
