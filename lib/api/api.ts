import axios from 'axios';

const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || 'http://localhost:3000';
const baseURL = `${base}/api`;

export const nextServer = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});