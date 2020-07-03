import React from 'react';

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
        <div>
          {reactSections.slice(0, 1)}
          <span id="seeMore" onClick={() => this.showMore()}>
            ...read More
          </span>
        </div>
      );
    } else {
      return <div>{reactSections}</div>;
    }
  }
}

export default MainDescription;
