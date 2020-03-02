import mongoose from 'mongoose';
import config from 'config';

const mongoURI: string = config.get('db.mongoURI');

const connectDB = async () => {
  try {
    mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;