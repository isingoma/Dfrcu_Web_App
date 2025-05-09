// app/login/page.tsx

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for page navigation
import { useAuth } from '@/components/AuthProvider';

export default function LoginPage() {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError('Both fields are required.');
      return;
    }

    setLoading(true);
    try {
      await login(form.username, form.password);
      // Navigate to the dashboard after successful login
      router.push('/dashboard'); // This will redirect the user to the dashboard
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 p-8 shadow-lg rounded-lg bg-white"
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Welcome Back!
        </h2>

        {/* Username Input */}
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Error Message */}
        {error && <div className="text-red-500 text-sm">{error}</div>}

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full p-3 text-white font-semibold rounded-lg transition-colors ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={loading}
        >
          {loading ? 'Logging In...' : 'Log In'}
        </button>
      </form>
    </div>
  );
}
