import React, { Fragment, PureComponent } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('description-modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  // When the modals unmount allow scrolling once more
  componentWillUnmount() {
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = 'yes';
  }

  render() {
    return ReactDOM.createPortal(this.props.children, modalRoot);
  }
}

export default Modal;
