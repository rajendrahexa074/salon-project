// components/Modal.js
import React from 'react';
import '../css/Modal.css';

function Modal({ title, children, onClose }) {
  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <div className="custom-modal-header">
          <h3>{title}</h3>
          <button className="custom-close-btn" onClick={onClose}>×</button>
        </div>
        <div className="custom-modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
