import { NextResponse } from 'next/server';
import connectDB from '@/lib/mysql';
import bcrypt from 'bcryptjs';
import { RowDataPacket } from 'mysql2';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return new NextResponse(
    JSON.stringify({ message: 'Signup API endpoint is reachable' }), 
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

export async function POST(req: Request) {
  try {
    const conn = await connectDB();
    
    const { name, email, password } = await req.json();
    
    // Check if user exists
    const [existingUsers] = await conn.execute<RowDataPacket[]>(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    await conn.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );
    
    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}