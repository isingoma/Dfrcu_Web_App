// lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7154/api/payments', // adjust to your C# API URL
  headers: { 'Content-Type': 'application/json' },
});

export default api;
