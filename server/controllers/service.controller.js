const facilityService = require('../services/facility.service');

const upsertService = async (req, res) => {
    const payload = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        images: req.body.images
    };
    const result = await facilityService.upsertService(payload);
    return res.status(result.status).json(result)

}


const getAllFacility = async (req, res) => {
    const result = await facilityService.getAllFacilities();
    return res.status(result.status).json(result);

}

const deleteFacility = async (req, res) => {
    const result = await facilityService.deleteFacility(req.params.id);
    return res.status(result.status).json(result);
}


module.exports = { upsertService, getAllFacility,deleteFacility }