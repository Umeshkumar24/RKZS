import { NextResponse } from 'next/server';
import connectDB from '@/lib/mysql';
import bcrypt from 'bcryptjs';
import { RowDataPacket } from 'mysql2';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const conn = await connectDB();
    
    const { email, password } = await req.json();

    // Find user by email
    const [rows] = await conn.execute<RowDataPacket[]>(
      'SELECT id, password FROM users WHERE email = ?',
      [email]
    );

    const user = rows[0];
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Set user ID in cookie
    cookies().set('userId', user.id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    return NextResponse.json(
      { 
        message: 'Login successful',
        userId: user.id 
      },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
} 