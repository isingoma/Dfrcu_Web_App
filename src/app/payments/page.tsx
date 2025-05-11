'use client'
import InitiatePayment from '@/components/InitiatePayment';
import CheckPaymentStatus from '@/components/CheckPaymentStatus';
import { useAuth } from '@/components/AuthProvider';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
        <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold mb-2">Initiate Payment</h2>
          <InitiatePayment />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold mb-2">Check Payment Status</h2>
          <CheckPaymentStatus />
        </div>
      </div>
    </div>
  );
}