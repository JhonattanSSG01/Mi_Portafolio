import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

function Modal(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      
    </div>
  );
}

Example.propTypes = {
  className: PropTypes.string,
};

export default Modal;
