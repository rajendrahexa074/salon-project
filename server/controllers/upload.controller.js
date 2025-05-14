
const uploadService = require('../services/upload.service');

exports.uploadFiles = (req, res) => {
    try {

        const result = uploadService.uploadFiles(req);
        if (!result.success) {
            return res.status(result.status).json({ message: result.message });
        };
       
        return res.status(201).json({ message: result.message, files: result.files });


    } catch (error) {
        return res.status(500).json({ message: 'Internal server error: ' + error.message });
    }
}
