import React, { useState, useEffect } from 'react';

function StaffForm({ onSubmit, initialData }) {
    const [formData, setFormData] = useState({ name: '', role: '', email: '' });
    const roles = ['Manager', 'Stylist', 'Receptionist', 'Assistant'];

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({ name: '', role: '', email: '' });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input name="name" value={formData.name} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Role</label>
                <select className='form-control' onChange={handleChange} value={formData.role} name='role' required >
                    {roles.map((role) => (<option key={role} value={role}>{role}</option>))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-success">
                {initialData ? 'Update' : 'Add'} Staff
            </button>
        </form>
    );
}

export default StaffForm;
