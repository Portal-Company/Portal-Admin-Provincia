import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalConfirm({ onClose, onConfirm, estado, item }) {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar</Modal.Title>
      </Modal.Header>
      <Modal.Body>Tem certeza de que desejas {estado} o(a) {item?.Candidato?.nomeCompleto}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { ModalConfirm }