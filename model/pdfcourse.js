// models/Course.js
const mongoose = require('mongoose');

const pdfCourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('PdfCourse', pdfCourseSchema);
