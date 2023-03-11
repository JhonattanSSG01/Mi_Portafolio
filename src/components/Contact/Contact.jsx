import "../../pages/styles.css";
import "./contact.css";
import React, { useState } from "react";
import ContactImg from "../../pages/assets/contact.png";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const Contact = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="contact">
        <h1 className="titlePrincipal pt-3 pb-3" data-aos="fade-right">
          Contacto <span className="sideLeft lineTrough"></span>
        </h1>
        <div className="containerContact">
          <img
            className="mt-3 mb-3"
            src={ContactImg}
            alt="Imagen alusiva para contacto"
          />
          <section className="legendContact">
            <h1 className="titleTouch pt-5 pb-5">PONERSE EN CONTACTO</h1>
            <p className="contactDesc p-3 text-center">
              Si te intereso mi perfil, uedes ponerte en contacto conmigo por medio de Gmail
            </p>
          </section>
          <Button
            className="buttonContact"
            onClick={toggle}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <span>Contactame</span>
          </Button>
        </div>
        <Modal
          isOpen={modal}
          modalTransition={{ timeout: 200 }}
          backdropTransition={{ timeout: 600 }}
          toggle={toggle}
          centered
          className={className}
        >
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="unmountOnClose">Nombre Completo *</Label>{" "}
              <Input
                type="text"
                name="unmountOnClose"
                placeholder="Jhonattan Saavedra Gomez"
                required
                id="unmountOnClose"
                // onChange={changeUnmountOnClose}
              ></Input>
              <Label for="unmountOnClose">Correo Electronico *</Label>{" "}
              <Input
                type="email"
                name="unmountOnClose"
                placeholder="Jhonattansaavedra01@gmail.com"
                required
                id="unmountOnClose"
                // onChange={changeUnmountOnClose}
              ></Input>
              <Label for="unmountOnClose">Telefono *</Label>{" "}
              <Input
                type="text"
                name="unmountOnClose"
                placeholder="3196788028 "
                required
                id="unmountOnClose"
                // onChange={changeUnmountOnClose}
              ></Input>
              <Label for="unmountOnClose">Descricion *</Label>{" "}
              <Input
                type="textarea"
                name="unmountOnClose"
                placeholder="Mensaje "
                required
                id="unmountOnClose"
                // onChange={changeUnmountOnClose}
              ></Input>
            </FormGroup>{" "}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Enviar
            </Button>
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default Contact;
