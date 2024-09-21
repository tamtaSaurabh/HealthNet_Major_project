const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reportData: { type: String, required: true }, // You can change this to a more complex structure as needed.
    uploadDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MedicalReport', reportSchema);