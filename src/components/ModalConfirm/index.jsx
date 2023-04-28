import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalDelete({ onClose, onConfirm, item, desc }) {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar exclusão</Modal.Title>
      </Modal.Header>
      <Modal.Body>Tem certeza de que desejas excluir o(a) {desc} {item?.nome}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { ModalDelete }