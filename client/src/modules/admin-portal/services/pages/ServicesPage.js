import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../../../components/Modal'; // You’ll create this
import ServiceForm from './ServiceForm';
import { showConfirmDialog } from '../../../../utils/SwalUtills';
function Services() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Hair Cut',
      description: 'Professional hair cutting and styling.',
      price: 30,
      images: ["https://chandigarhsalon.com/application/uploads/img/SkinCare.jpg",
        "https://chandigarhsalon.com/application/uploads/img/hairCut.jpeg",
        "https://chandigarhsalon.com/application/uploads/img/MakeUp.png",
        "https://chandigarhsalon.com/application/uploads/img/FeetNail.jpg"
      ]
    },
    {
      id: 2,
      name: 'Facial',
      description: 'Relaxing and refreshing facial treatment.',
      price: 40,
      images: ["https://chandigarhsalon.com/application/uploads/img/SkinCare.jpg",
        "https://chandigarhsalon.com/application/uploads/img/hairCut.jpeg",
        "https://chandigarhsalon.com/application/uploads/img/MakeUp.png",
        "https://chandigarhsalon.com/application/uploads/img/FeetNail.jpg"
      ]
    },
    {
      id: 3,
      name: 'Manicure',
      description: 'Nail trimming, cleaning, and polish.',
      price: 25,
      images: ["https://chandigarhsalon.com/application/uploads/img/SkinCare.jpg",
        "https://chandigarhsalon.com/application/uploads/img/hairCut.jpeg",
        "https://chandigarhsalon.com/application/uploads/img/MakeUp.png",
        "https://chandigarhsalon.com/application/uploads/img/FeetNail.jpg"
      ]
    }
  ]);

  const [editingService, setEditingService] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const handleSave = (service) => {
    if (editingService) {
      setServices((prev) =>
        prev.map((s) => (s.id === service.id ? service : s))
      );
    } else {
      setServices([...services, { ...service, id: Date.now() }]);
    }
    setShowModal(false);
    setEditingService(null);
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const result = await showConfirmDialog({
      title: 'Delete this service?',
      text: 'This service will be permanently removed.',
      confirmButtonText: 'Delete',
    });

    if (result.isConfirmed) {
      setServices(services.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className='gradient-heading'>Manage Services</h2>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faCogs} className="me-2" />
          Create Service
        </button>
      </div>

      <div className="row">
        {services.map((service) => (
          <div className="col-md-4 mb-4" key={service.id}>
            <ServiceCard
              {...service}
              isAdmin
              onEdit={() => handleEdit(service)}
              onDelete={() => handleDelete(service.id)}
            />
          </div>
        ))}
      </div>

      {showModal && (
        <Modal
          title={editingService ? 'Edit Service' : 'Add Service'}
          onClose={() => setShowModal(false)}
        >
          <ServiceForm
            onSubmit={editingService ? handleEdit : handleSave}
            initialData={editingService}
          />
        </Modal>
      )}
    </div>
  );
}

export default Services;
