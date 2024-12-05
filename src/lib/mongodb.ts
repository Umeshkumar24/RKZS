// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   try {
//     const opts = {
//       bufferCommands: true,
//       serverSelectionTimeoutMS: 5000,
//       socketTimeoutMS: 45000,
//       family: 4,
//     };

//     console.log('Creating new MongoDB connection...');
//     cached.promise = mongoose.connect(MONGODB_URI, opts);
//     cached.conn = await cached.promise;
//     console.log('MongoDB Connected Successfully');
//     return cached.conn;
//   } catch (error) {
//     console.error('MongoDB Connection Error:', error);
//     cached.promise = null;
//     throw error;
//   }
// }

// export default connectDB;