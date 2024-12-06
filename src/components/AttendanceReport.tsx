import React, { useEffect, useState } from 'react';

interface AttendanceReportProps {
  userId: number; // Ensure this is a number
}

const AttendanceReport: React.FC<AttendanceReportProps> = ({ userId }) => {
  const [attendanceData, setAttendanceData] = useState<{ attended: number; total: number }>({ attended: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        console.log('User ID:', userId); // Log the userId before the fetch call
        const response = await fetch(`/api/attendance?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch attendance data');
        }
        const data = await response.json();
        console.log('Fetched attendance data:', data); // Log the fetched data
        setAttendanceData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceData();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { attended, total } = attendanceData;
  const percentage = total > 0 ? (attended / total) * 100 : 0; // Avoid division by zero

  // SVG Circle Calculation
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div>
      <h2>Attendance Report</h2>
      <svg width="120" height="120">
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth="10"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          stroke="#4caf50"
          fill="transparent"
          strokeWidth="10"
          r={radius}
          cx="60"
          cy="60"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        />
      </svg>
      <p>
        Attended: {attended} out of {total} classes ({percentage.toFixed(2)}%)
      </p>
    </div>
  );
};

export default AttendanceReport; 