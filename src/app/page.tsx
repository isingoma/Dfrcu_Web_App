// app/page.tsx
'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        Welcome to DFCU-Pay
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-xl mb-8">
        Secure and seamless payments made simple. Log in to manage your transactions, track your balances, and stay in control — wherever you are.
      </p>
      <button
        onClick={() => router.push('/login')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition"
      >
        Get Started
      </button>
    </div>
  );
}
