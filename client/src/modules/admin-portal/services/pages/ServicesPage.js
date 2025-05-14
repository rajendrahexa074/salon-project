import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../../../components/Modal'; // You’ll create this
import ServiceForm from './ServiceForm';
import { showConfirmDialog } from '../../../../utils/SwalUtills';
import { useDispatch } from 'react-redux';
import { deleteFacilityApi, getFacilitieList, manageFacility } from '../../../../store/slice/FacilitySlice';
import { toast } from 'react-toastify';
import NoData from '../../../../components/NoData';
import { useLoading } from '../../../../context/LoadingContext';
function Services() {
  const { setLoading } = useLoading();
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);

  const [editingService, setEditingService] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    fetchFacilities();
  }, [dispatch]);


  const fetchFacilities = async () => {
    try {
      setLoading(true);
      const response = await dispatch(getFacilitieList()).unwrap();
      if (response && response.data) {
        setServices(response.data);
      }
      setLoading(false);
    } catch (error) {
      toast.error(error || 'Something went wrong!');
      setLoading(false);
    }
  };




  const upsertService = async (service) => {
    try {
      if (editingService) {
        service['id'] = service._id;
      }

      const result = await dispatch(manageFacility(service)).unwrap();
      toast.success(result.message);

      await fetchFacilities();
    } catch (error) {
      toast.error(error?.message || 'Something went wrong!');
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
      try {
        const response = await dispatch(deleteFacilityApi(id)).unwrap();
        toast.success(response.message);
        fetchFacilities();
      } catch (error) {
        toast.error(error?.message || 'Error deleting facility');
      }
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

      {services.length ? (
        <>



          <div className="row">
            {services.map((service) => (
              <div className="col-md-4 mb-4" key={service._id}>
                <ServiceCard
                  {...service}
                  isAdmin
                  onEdit={() => handleEdit(service)}
                  onDelete={() => handleDelete(service._id)}
                />
              </div>
            ))}
          </div>
        </>



      ) : (
        <NoData message='No Facilities Found!!' image='/no-record-found.jpg' />
      )}



      {showModal && (
        <Modal
          title={editingService ? 'Edit Service' : 'Add Service'}
          onClose={() => { setEditingService(null); setShowModal(false); }}
        >
          <ServiceForm
            onSubmit={upsertService}
            initialData={editingService}
          />
        </Modal>
      )}
    </div>
  );
}

export default Services;
