const express = require('express');
const router = express.Router();
const MedicalReport = require('../models/MedicalReport');

// Create a new medical report
router.post('/', async (req, res) => {
    const { patientId, reportData } = req.body;
    const report = new MedicalReport({ patientId, reportData });

    try {
        await report.save();
        res.status(201).json({ message: 'Medical report created successfully', report });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Export the router
module.exports = router;