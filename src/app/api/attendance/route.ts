import { NextResponse } from 'next/server';
import connectDB from '@/lib/mysql';
import { RowDataPacket } from 'mysql2';

// Handle both POST and GET requests for attendance
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

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Get the current date and calculate the start date (e.g., one month ago)
    const today = new Date();
    const startDate = new Date(today);
    startDate.setMonth(today.getMonth() - 1); // Adjust as needed for your requirements

    // Query to get the number of classes attended grouped by user_id
    const [attendanceRows] = await conn.execute<RowDataPacket[]>(
      `SELECT user_id, COUNT(id) as attended 
       FROM attendance 
       WHERE user_id = ? 
       AND DATE(date) >= ? 
       AND DAYOFWEEK(date) NOT IN (1, 7)
       GROUP BY user_id`,
      [userId, startDate]
    );

    console.log('Attendance Rows:', attendanceRows); // Log the attendance rows

    // If no attendance records are found, set attended to 0
    const attended = attendanceRows.length > 0 ? attendanceRows[0].attended : 0; // Get the attended count

    // Calculate total classes in the last month excluding weekends
    const totalClasses = 5 * 4; // Assuming 5 classes per week for 4 weeks

    return NextResponse.json({ attended, total: totalClasses }, { status: 200 });

  } catch (error: any) {
    console.error('Attendance fetch error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
} 