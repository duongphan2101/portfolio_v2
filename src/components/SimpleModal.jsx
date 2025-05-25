// components/SimpleModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SimpleModal({ show, onClose, title, link }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton className='bg-dark text-white'>
        <Modal.Title style={{ backgroundColor: 'transparent' }}>
          {title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white d-flex justify-content-center">
        <iframe
          src={`https://drive.google.com/file/d/${getFileId(link)}/preview`}
          width="100%"
          height="400"
          allow="autoplay; fullscreen"
          style={{ border: 'none', borderRadius: '10px' }}
        ></iframe>
      </Modal.Body>


      <Modal.Footer className='bg-dark text-white'>
      </Modal.Footer>
    </Modal>
  );
}

function getFileId(link) {
  const match = link.match(/\/d\/(.+?)\//);
  return match ? match[1] : null;
}



export default SimpleModal;

