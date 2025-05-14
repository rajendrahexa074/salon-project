// services/serviceService.js
const mongoose = require('mongoose');
const Service = require('../models/service.model');

async function upsertService({ id, name, description, price, images }) {
    try {
        // If an ID was provided, attempt to update
        if (id) {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return { status: 400, success: false, message: 'Invalid service ID' };
            }

            const existing = await Service.findById(id);
            if (existing) {
                existing.name = name;
                existing.description = description;
                existing.price = price;
                existing.images = images;
                const updated = await existing.save();

                return {
                    status: 200,
                    success: true,
                    message: 'Service updated successfully.',
                    data: updated
                };
            }
            // fall through to create new if not found
        }

        // Create new Service
        const created = await new Service({ name, description, price, images }).save();
        return {
            status: 201,
            success: true,
            message: 'Service created successfully.',
            data: created
        };

    } catch (err) {
        if (err.name === 'ValidationError') {
            const errors = Object.values(err.errors).map(e => e.message);
            return {
                status: 400,
                success: false,
                message: 'Validation failed',
                errors
            };
        }
        console.error('Service upsert error:', err);
        return {
            status: 500,
            success: false,
            message: 'Server error'
        };
    }
}


async function getAllFacilities() {
    try {
        const facilities = await Service.find({});
        return {
            success: true,
            message: 'Facilities fetched successfully',
            data: facilities,
            status: 201
        };
    } catch (error) {
        return {
            success: false,
            message: 'Failed to fetch facilities',
            error: error.message,
            status: 500
        };
    }
}


async function deleteFacility(id) {
    try {
        if (id) {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return { status: 400, success: false, message: 'Invalid service ID' };
            };
            const deletedFacility = await Service.findOneAndDelete(id);
            return {
                success:true,
                message:'Facility deleted successfully',
                status:201,
                data:deleteFacility
            };
        }


    } catch (error) {
        return {
            success: false,
            message: 'Failed to remove facility',
            error: error.message,
            status: 500
        };


    }
}


module.exports = { upsertService, getAllFacilities,deleteFacility };
