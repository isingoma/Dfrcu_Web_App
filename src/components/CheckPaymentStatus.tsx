'use client';
import { useState } from 'react';
import api from '@/lib/api';
import StatusAlert from './StatusAlert';

export default function CheckPaymentStatus() {
  const [ref, setRef] = useState('');
  const [status, setStatus] = useState<{ message: string, type: string } | null>(null);

  const checkStatus = async () => {
    try {
      const res = await api.get(`/checkstatus/${ref}`);
      setStatus({ message: `Status: ${res.data.status}`, type: 'info' });
    } catch (err: any) {
      setStatus({ message: err.response?.data?.message || 'Check failed', type: 'error' });
    }
  };

  return (
    <div className="space-y-4">
      <input
        className="w-full border p-2 rounded"
        placeholder="Transaction Reference"
        value={ref}
        onChange={(e) => setRef(e.target.value)}
      />
      <button onClick={checkStatus} className="bg-green-600 text-white px-4 py-2 rounded">
        Check Status
      </button>
      {status && <StatusAlert type={status.type} message={status.message} />}
    </div>
  );
}
