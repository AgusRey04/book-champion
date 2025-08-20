import { Modal, Button } from "react-bootstrap";

const ConfirmDeleteModal = ({ show, onHide, onConfirm, bookTitle }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>Eliminar libro</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      ¿Seguro que deseas eliminar <strong>{bookTitle}</strong> de la lista?
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancelar
      </Button>
      <Button variant="danger" onClick={onConfirm}>
        Sí, deseo eliminarlo
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ConfirmDeleteModal;
