import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uploadApi } from '../../../../store/slice/FileUploadSlice';
import { toast } from 'react-toastify';

function ServiceForm({ onSubmit, initialData }) {
    const API_URL = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();
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
            setFormData({ name: '', description: '', price: '', images: [] });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // inside your React component

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let uploadedFiles = [];
            const filesToUpload = formData.images.filter(x => x instanceof File);

            if (filesToUpload.length > 0) {
                uploadedFiles = await fileUpload(filesToUpload);
            }
            const existingImages = formData.images.filter(x => !(x instanceof File));
            const allImages = [...existingImages, ...uploadedFiles];

            onSubmit({
                ...formData,
                price: parseFloat(formData.price),
                images: allImages,
            });
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }
    };

    const fileUpload = async (files) => {
        try {
            const data = new FormData();
            files.forEach(file => {
                data.append('files', file);
            });

            const response = await dispatch(uploadApi(data)).unwrap();
            return response.files;
        } catch (error) {
            console.error('Upload error:', error);
            throw error;
        }
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
                <label className="form-label">Select Images</label>
                <input
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    className="form-control"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            images: [...formData.images, ...Array.from(e.target.files)]
                        })

                    }
                />


                {/* Preview Images */}
                <div className="mt-3 d-flex flex-wrap gap-2">
                    {formData.images.map((image, index) => {

                        const imageURL = image instanceof File ? URL.createObjectURL(image) : `${API_URL}/static/${image.storedName}`;

                        return (
                            <div key={index} style={{ width: 100, height: 100, border: '1px solid #ccc', padding: 4 }}>
                                <img
                                    src={imageURL}
                                    alt={`preview-${index}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <button type="submit" className="btn btn-primary">
                {initialData ? 'Update' : 'Create'} Service
            </button>
        </form>
    );
}

export default ServiceForm;
