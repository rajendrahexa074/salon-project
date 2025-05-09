import React from 'react';
import '../../../../css/Services.css';
import ImageSlider from '../../../../components/ImageSlider';

function ServiceCard({ id, name, description, price, images, onEdit, onDelete }) {
    return (
        <div className="card service-card">
            <ImageSlider images={images} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-price">${price}</p>
                <div>
                    <button
                        className="btn btn-warning me-2"
                        onClick={() => onEdit({ id, name, description, price, images })}>Edit</button>
                    <button
                        className="btn btn-danger"
                        onClick={() => onDelete(id)}> Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
