import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button
          type="button"
          className="btn btn-outline-dark"
          onClick={this.toggle}
        >
          Procces Order
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Hey!</ModalHeader>
          <ModalBody>
            This is the end of the navigation of this website, you can tell you
            can't pay because This is just a test site. Thanks for your
            visiting!
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              ok
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
