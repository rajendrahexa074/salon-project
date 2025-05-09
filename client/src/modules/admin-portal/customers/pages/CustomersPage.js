import React, { useState } from 'react';
import '../../../../css/CustomerPage.css'
import { showConfirmDialog } from '../../../../utils/SwalUtills';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomerPage() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', isActive: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', isActive: true },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', phone: '555-555-5555', isActive: true }
  ]);

  const handleToggleStatus = async (id) => {
    const result = await showConfirmDialog({
      title: 'Inactive this customer?',
      text: 'This customer will be marked as inactive and won’t appear in active lists.',
      confirmButtonText: 'Inactive',
    });

    if (result.isConfirmed) {
      setCustomers(prev =>
        prev.map(customer =>
          customer.id === id ? { ...customer, isActive: !customer.isActive } : customer
        )
      );
    }

  };

  const handleDelete = async (id) => {
    const result = await showConfirmDialog({
      title: 'Delete this customer?',
      text: 'This customer will be permanently removed.',
      confirmButtonText: 'Delete',
    });
    if (result.isConfirmed) {
      setCustomers(customers.filter(x => x.id !== id))

    }
  }


  return (
    <section className="customer-section">
      <h2 className="gradient-heading">Customer List</h2>
      <table className="customer-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <td>
                  <div className="tooltip-container">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={customer.isActive}
                        onChange={() => handleToggleStatus(customer.id)}
                      />
                      <span className="slider"></span>
                    </label>
                    <span className="tooltip-text">Toggle Active</span>
                  </div>

                  <div className="tooltip-container">
                    <button className="action-button delete" onClick={() => handleDelete(customer.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <span className="tooltip-text">Delete Customer</span>
                  </div>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CustomerPage;
