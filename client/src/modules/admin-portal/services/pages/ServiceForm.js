import React, { useState, useEffect } from 'react';

function ServiceForm({ onSubmit, initialData }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        images: []
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({ name: '', description: '', price: '', images: '' });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            ...formData, price: parseFloat(formData.price),
            images: formData.images.map((file) => (URL.createObjectURL(file)))
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Service Name</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Price ($)</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Image URLs (comma-separated)</label>
                <input
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    className="form-control"
                    onChange={(e) =>
                        setFormData({ ...formData, images: Array.from(e.target.files) })
                    }
                />
            </div>

            <button type="submit" className="btn btn-primary">
                {initialData ? 'Update' : 'Create'} Service
            </button>
        </form>
    );
}

export default ServiceForm;
