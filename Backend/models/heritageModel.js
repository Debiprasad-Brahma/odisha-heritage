import mongoose from 'mongoose';


const heritageSchema = new mongoose.Schema({
name: { type: String, required: true },
district: { type: String, required: true, index: true },
category: { type: String, required: true, index: true },
description: { type: String },
img: { type: String },
rating: { type: Number, default: 0 },
addedBy: { type: String, enum: ['system', 'user'], default: 'system' },
contributedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
verified: { type: Boolean, default: false },
}, { timestamps: true });


heritageSchema.index({ district: 1, category: 1 });


const Heritage = mongoose.model('Heritage', heritageSchema);
export default Heritage;