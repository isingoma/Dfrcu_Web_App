'use client';
import { useState } from 'react';
import api from '@/lib/api';
import StatusAlert from './StatusAlert';

export default function InitiatePayment() {
  const [form, setForm] = useState({ payer: '', payee: '', amount: '', currency: '', reference: '' });
  const [status, setStatus] = useState<{ message: string, type: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/initiatepayment', form);
      setStatus({ message: `Transaction ${res.data.reference}: ${res.data.message}`, type: 'success' });
    } catch (err: any) {
      setStatus({ message: err.response?.data?.message || 'Something went wrong', type: 'error' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {['payer', 'payee', 'amount', 'currency', 'reference'].map((field) => (
        <input
          key={field}
          required={field !== 'reference'}
          className="w-full border p-2 rounded"
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={(form as any)[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
        />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Initiate Payment</button>
      {status && <StatusAlert type={status.type} message={status.message} />}
    </form>
  );
}
