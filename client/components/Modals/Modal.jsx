import React, { Fragment, PureComponent } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('description-modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ReactDOM.createPortal(<div>{this.props.children}</div>, modalRoot);
  }
}

export default Modal;
