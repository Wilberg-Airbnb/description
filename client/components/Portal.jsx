import React from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

class Portal extends React.Componet {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  compoentWillUnmount() {
    portalRoot.appendChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
