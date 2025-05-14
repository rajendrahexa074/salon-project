

exports.uploadFiles = (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return { success: false, status: 400, message: 'No files uploaded' };
        }

        const uploadedFiles = req.files.map(file => ({
            originalName: file.originalname,
            storedName: file.filename,
            path: file.path
        }));

        return { success: true, files: uploadedFiles ,message:'File uploaded successfully.'};
    } catch (error) {
        return { success: false, status: 500, message: 'Error uploading files: ' + error.message }
    }
}