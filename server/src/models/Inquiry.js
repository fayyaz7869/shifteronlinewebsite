import { Schema, model } from 'mongoose';

const inquirySchema = new Schema(
  {
    type: {
      type: String,
      enum: ['customer', 'driver'],
      required: true,
      default: 'customer',
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    vehicleType: {
      type: String,
      trim: true,
      default: '',
    },
    pickupLocation: {
      type: String,
      trim: true,
      default: '',
    },
    dropLocation: {
      type: String,
      trim: true,
      default: '',
    },
    cargoType: {
      type: String,
      trim: true,
      default: '',
    },
    needHelper: {
      type: Boolean,
      default: false,
    },
    vehicleNumber: {
      type: String,
      trim: true,
      default: '',
    },
    preferredHub: {
      type: String,
      trim: true,
      default: '',
    },
    hasDocuments: {
      type: Boolean,
      default: true,
    },
    notes: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Closed'],
      default: 'New',
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Inquiry = model('Inquiry', inquirySchema);
