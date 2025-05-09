import React, { useState } from 'react';
import StaffForm from './StaffForm';
import Modal from '../../../../components/Modal';
import '../../../../css/StaffPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { showConfirmDialog } from '../../../../utils/SwalUtills';
const initialStaff = [
  { id: 1, name: 'Jane Doe', role: 'Stylist', email: 'jane@example.com' },
  { id: 2, name: 'John Smith', role: 'Manager', email: 'john@example.com' },
];

function StaffPage() {
  const [staffList, setStaffList] = useState(initialStaff);
  const [editingStaff, setEditingStaff] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (staff) => {
    setStaffList([...staffList, { ...staff, id: Date.now() }]);
    setShowModal(false);
  };

  const handleEdit = (updatedStaff) => {
    setStaffList(staffList.map((s) => (s.id === updatedStaff.id ? updatedStaff : s)));
    setEditingStaff(null);
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    const result = await showConfirmDialog({
          title: 'Remove this user?',
          text: 'This user will be permanently removed.',
          confirmButtonText: 'Remove',
        });
        if(result.isConfirmed){
          setStaffList(staffList.filter((s) => s.id !== id));

        }
  };

  const openModal = (staff = null) => {
    setEditingStaff(staff);
    setShowModal(true);
  };

  return (
    <div className="staff-container">
      <div className='row'>
        <div className='col-9'>
        <h2 className="mb-3 gradient-heading">Staff Management</h2>
        </div>
        <div className='col-3'>
          <button className="btn btn-primary mb-3" onClick={() => openModal()}>
            <FontAwesomeIcon icon={faUserPlus} /> &nbsp; Create Staff </button>
        </div>
      </div>
      
      

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th><th>Role</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.name}</td>
              <td>{staff.role}</td>
              <td>{staff.email}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => openModal(staff)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(staff.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Component */}
      {showModal && (
         <Modal
         title={editingStaff ? 'Edit Staff' : 'Add Staff'}
         onClose={() => setShowModal(false)}
       >
         <StaffForm
           onSubmit={editingStaff ? handleEdit : handleAdd}
           initialData={editingStaff}
         />
       </Modal>
      )}
    </div>
  );
}

export default StaffPage;
