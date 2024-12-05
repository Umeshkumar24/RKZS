import { NextResponse } from 'next/server';
import connectDB from '@/lib/mysql';

export async function GET() {
  try {
    const conn = await connectDB();

    // Test 1: Basic connection test
    const [connectionTest] = await conn.execute('SELECT 1 + 1 as test');
    
    // Test 2: Check users table
    const [usersTest] = await conn.execute('SELECT COUNT(*) as userCount FROM users');
    
    // Test 3: Check attendance table
    const [attendanceTest] = await conn.execute('SELECT COUNT(*) as attendanceCount FROM attendance');

    return NextResponse.json({
      status: 'success',
      message: 'Database connection successful',
      tests: {
        connection: connectionTest,
        users: usersTest,
        attendance: attendanceTest
      }
    }, { status: 200 });

  } catch (error: any) {
    console.error('Database test error:', error);
    return NextResponse.json({
      status: 'error',
      message: error.message
    }, { status: 500 });
  }
}
