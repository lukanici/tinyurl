import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  domain: String,
  code: String,
  count: { type: Number, default: 1 },
  date: { type: Date, default: Date.now }
});

urlSchema.methods.toJSON = function () {
  return {
    originalUrl: this.originalUrl,
    code: this.code
  };
};

export default mongoose.model('Url', urlSchema); 