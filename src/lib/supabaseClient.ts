import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wezbnulztcdfomsjudse.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlemJudWx6dGNkZm9tc2p1ZHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NzQwNDUsImV4cCI6MjA2ODE1MDA0NX0.x_w7L7E7WQ5Bx_kYV_W7ckuF5R-8DJKxowJvHlNFOV8';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});

// Type definitions for better TypeScript support
export interface ContactSubmission {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  website?: string;
  phone?: string;
  service: string;
  budget: string;
  message: string;
  newsletter: boolean;
  createdAt?: Date;
}

export interface NewsletterSignup {
  id?: number;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt?: Date;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Error handling utility
export class SupabaseError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'SupabaseError';
  }
}

// Rate limiting utility
class RateLimiter {
  private requests: Map<string, number[]>;
  private windowMs: number = 900000; // 15 minutes in milliseconds
  private maxRequests: number = 5;

  constructor() {
    this.requests = new Map();
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    return true;
  }

  reset(identifier: string): void {
    this.requests.delete(identifier);
  }
}

export const rateLimiter = new RateLimiter(); 