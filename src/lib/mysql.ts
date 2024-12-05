import mysql from 'mysql2/promise';

const MYSQL_URI = process.env.MYSQL_URI as string;

if (!MYSQL_URI) {
  throw new Error('Please define the MYSQL_URI environment variable');
}

let cached: {
  conn: mysql.Connection | null;
  promise: Promise<mysql.Connection> | null;
} = {
  conn: null,
  promise: null,
};

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  try {
    console.log('Creating new MySQL connection...');
    cached.promise = mysql.createConnection(MYSQL_URI);
    cached.conn = await cached.promise;
    console.log('MySQL Connected Successfully');
    return cached.conn;
  } catch (error) {
    console.error('MySQL Connection Error:', error);
    cached.promise = null;
    throw error;
  }
}

export default connectDB; 