import mongoose, { Schema } from 'mongoose';

export const EnrollSchema = new Schema({
  user: Schema.Types.ObjectId,
  courses: [{
    _id: Schema.Types.ObjectId,
    name: String,
    weight: Number,
    images: [String],
  }],
});

export const EnrollModel = mongoose.model('Enroll', EnrollSchema);
