const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/service.controller');

router.post('/addEditService', serviceController.upsertService);
router.get('/getAllFacilities', serviceController.getAllFacility);
router.delete('/deleteFacility/:id', serviceController.deleteFacility);
module.exports = router;



