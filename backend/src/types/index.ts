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
  updatedAt?: Date;
  userId?: string;
}

export interface NewsletterSignup {
  id?: number;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
  userId?: string;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: 'USER' | 'ADMIN' | 'MODERATOR';
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

export interface UserProfile {
  id: string;
  userId: string;
  company?: string;
  jobTitle?: string;
  industry?: string;
  companySize?: 'SOLO' | 'SMALL_2_10' | 'MEDIUM_11_50' | 'LARGE_51_200' | 'ENTERPRISE_200_PLUS';
  phone?: string;
  website?: string;
  marketingEmails: boolean;
  newsletterEmails: boolean;
  notifications: boolean;
  allowAnalytics: boolean;
  allowCookies: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AnalyticsEvent {
  id: string;
  userId?: string;
  eventType: 'PAGE_VIEW' | 'BUTTON_CLICK' | 'FORM_SUBMIT' | 'DOWNLOAD' | 'EMAIL_SIGNUP' | 'CONTACT_SUBMIT' | 'CALCULATOR_USE' | 'TOOL_USE' | 'ERROR' | 'PERFORMANCE';
  eventName: string;
  pageUrl?: string;
  referrer?: string;
  userAgent?: string;
  ipAddress?: string;
  sessionId?: string;
  deviceType?: 'DESKTOP' | 'MOBILE' | 'TABLET' | 'OTHER';
  browser?: string;
  os?: string;
  properties?: Record<string, any>;
  createdAt: Date;
}

export interface AdminDashboard {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ContactFormData {
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
}

export interface NewsletterFormData {
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
} 