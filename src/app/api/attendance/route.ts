import { NextResponse } from 'next/server';
import connectDB from '@/lib/mysql';
import { RowDataPacket } from 'mysql2';

export async function POST(req: Request) {
  try {
    const conn = await connectDB();
    const { userId } = await req.json();

    // Get current date
    const today = new Date();
    const isSunday = today.getDay() === 0;

    // If it's Sunday, return without marking attendance
    if (isSunday) {
      return NextResponse.json(
        { message: 'Today is Sunday, no attendance required' },
        { status: 200 }
      );
    }

    // Check if attendance already marked for today
    const [existing] = await conn.execute<RowDataPacket[]>(
      'SELECT id FROM attendance WHERE user_id = ? AND DATE(date) = CURDATE()',
      [userId]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { message: 'Attendance already marked for today' },
        { status: 200 }
      );
    }

    // Mark attendance
    await conn.execute(
      'INSERT INTO attendance (user_id, date, status) VALUES (?, CURDATE(), ?)',
      [userId, 'present']
    );

    return NextResponse.json(
      { message: 'Attendance marked successfully' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Attendance marking error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Get attendance history
export async function GET(req: Request) {
  try {
    const conn = await connectDB();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    const [rows] = await conn.execute<RowDataPacket[]>(
      `SELECT 
        date,
        status,
        check_in
      FROM attendance 
      WHERE user_id = ? 
      ORDER BY date DESC`,
      [userId]
    );

    return NextResponse.json(rows, { status: 200 });

  } catch (error: any) {
    console.error('Attendance fetch error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
} 