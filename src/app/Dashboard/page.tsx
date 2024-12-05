'use client'

import { useEffect, useState } from 'react';
import { CourseList } from '@/components/CourseList';
import { useRouter } from 'next/navigation';
import { Sidebar1 } from '@/components/Sidebar1';

export default function Home() {
  const router = useRouter();
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const getUserId = async () => {
      try {
        const response = await fetch('/api/auth/user');
        const data = await response.json();
        
        if (!data.userId) {
          router.push('/login');
          return;
        }
        
        setUserId(data.userId);
        return data.userId;
      } catch (error) {
        console.error('Error getting user ID:', error);
        router.push('/login');
      }
    };

    const markAttendance = async (uid: number) => {
      try {
        const response = await fetch('/api/attendance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: uid }),
        });

        const data = await response.json();
        console.log('Attendance response:', data);
      } catch (error) {
        console.error('Error marking attendance:', error);
      }
    };

    getUserId().then(uid => {
      if (uid) markAttendance(uid);
    });
  }, [router]);

  if (!userId) return null;

  return (
    <>
      <Sidebar1/>
    </>
  );
}
