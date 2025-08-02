import express from 'express';
import { PrismaClient } from '../../src/generated/prisma';
import { ApiResponse, PaginatedResponse, ContactSubmission, NewsletterSignup } from '../types';
import { emailService } from '../services/emailService';

const router = express.Router();
const prisma = new PrismaClient();

// Middleware to check if user is admin (basic implementation)
const requireAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // TODO: Implement proper JWT authentication
  const adminToken = req.headers.authorization?.replace('Bearer ', '');
  
  if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ 
      success: false, 
      error: 'Unauthorized access' 
    });
  }
  
  next();
};

// Get all contact submissions with pagination
router.get('/contact-submissions', requireAdmin, async (req: express.Request, res: express.Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string;
    const service = req.query.service as string;
    
    const skip = (page - 1) * limit;
    
    // Build where clause
    const where: any = {};
    
    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
        { message: { contains: search, mode: 'insensitive' } }
      ];
    }
    
    if (service) {
      where.service = service;
    }
    
    // Get total count
    const total = await prisma.contactSubmission.count({ where });
    
    // Get submissions
    const submissions = await prisma.contactSubmission.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });
    
    const response: PaginatedResponse<ContactSubmission> = {
      data: submissions,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
    
    res.json({ success: true, data: response });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch contact submissions' 
    });
  }
});

// Get contact submission by ID
router.get('/contact-submissions/:id', requireAdmin, async (req: express.Request, res: express.Response) => {
  try {
    const id = parseInt(req.params.id);
    
    const submission = await prisma.contactSubmission.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });
    
    if (!submission) {
      return res.status(404).json({ 
        success: false, 
        error: 'Contact submission not found' 
      });
    }
    
    res.json({ success: true, data: submission });
  } catch (error) {
    console.error('Error fetching contact submission:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch contact submission' 
    });
  }
});

// Delete contact submission
router.delete('/contact-submissions/:id', requireAdmin, async (req: express.Request, res: express.Response) => {
  try {
    const id = parseInt(req.params.id);
    
    const submission = await prisma.contactSubmission.delete({
      where: { id }
    });
    
    res.json({ 
      success: true, 
      message: 'Contact submission deleted successfully',
      data: submission
    });
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to delete contact submission' 
    });
  }
});

// Get all newsletter signups with pagination
router.get('/newsletter-signups', requireAdmin, async (req: express.Request, res: express.Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string;
    const isActive = req.query.isActive as string;
    
    const skip = (page - 1) * limit;
    
    // Build where clause
    const where: any = {};
    
    if (search) {
      where.OR = [
        { email: { contains: search, mode: 'insensitive' } },
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } }
      ];
    }
    
    if (isActive !== undefined) {
      where.isActive = isActive === 'true';
    }
    
    // Get total count
    const total = await prisma.newsletterSignup.count({ where });
    
    // Get signups
    const signups = await prisma.newsletterSignup.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });
    
    const response: PaginatedResponse<NewsletterSignup> = {
      data: signups,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
    
    res.json({ success: true, data: response });
  } catch (error) {
    console.error('Error fetching newsletter signups:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch newsletter signups' 
    });
  }
});

// Update newsletter signup status
router.patch('/newsletter-signups/:id', requireAdmin, async (req: express.Request, res: express.Response) => {
  try {
    const id = parseInt(req.params.id);
    const { isActive } = req.body;
    
    const signup = await prisma.newsletterSignup.update({
      where: { id },
      data: { isActive }
    });
    
    res.json({ 
      success: true, 
      message: 'Newsletter signup updated successfully',
      data: signup
    });
  } catch (error) {
    console.error('Error updating newsletter signup:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to update newsletter signup' 
    });
  }
});

// Delete newsletter signup
router.delete('/newsletter-signups/:id', requireAdmin, async (req: express.Request, res: express.Response) => {
  try {
    const id = parseInt(req.params.id);
    
    const signup = await prisma.newsletterSignup.delete({
      where: { id }
    });
    
    res.json({ 
      success: true, 
      message: 'Newsletter signup deleted successfully',
      data: signup
    });
  } catch (error) {
    console.error('Error deleting newsletter signup:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to delete newsletter signup' 
    });
  }
});

// Send newsletter broadcast
router.post('/newsletter-broadcast', requireAdmin, async (req: express.Request, res: express.Response) => {
  try {
    const { subject, content, testMode = false } = req.body;
    
    if (!subject || !content) {
      return res.status(400).json({ 
        success: false, 
        error: 'Subject and content are required' 
      });
    }
    
    // Get active subscribers
    const subscribers = await prisma.newsletterSignup.findMany({
      where: { isActive: true }
    });
    
    if (subscribers.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'No active subscribers found' 
      });
    }
    
    if (testMode) {
      // Send test email to first subscriber
      const testSubscriber = subscribers[0];
      const result = await emailService.sendNewsletterBroadcast([testSubscriber], subject, content);
      
      res.json({ 
        success: true, 
        message: 'Test newsletter sent successfully',
        data: { sent: result.success, failed: result.failed }
      });
    } else {
      // Send to all subscribers
      const result = await emailService.sendNewsletterBroadcast(subscribers, subject, content);
      
      res.json({ 
        success: true, 
        message: 'Newsletter broadcast completed',
        data: { sent: result.success, failed: result.failed, total: subscribers.length }
      });
    }
  } catch (error) {
    console.error('Error sending newsletter broadcast:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send newsletter broadcast' 
    });
  }
});

// Get dashboard statistics
router.get('/dashboard-stats', requireAdmin, async (req: express.Request, res: express.Response) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    
    // Contact submissions stats
    const totalSubmissions = await prisma.contactSubmission.count();
    const todaySubmissions = await prisma.contactSubmission.count({
      where: { createdAt: { gte: startOfDay } }
    });
    const weekSubmissions = await prisma.contactSubmission.count({
      where: { createdAt: { gte: startOfWeek } }
    });
    const monthSubmissions = await prisma.contactSubmission.count({
      where: { createdAt: { gte: startOfMonth } }
    });
    
    // Newsletter signups stats
    const totalSignups = await prisma.newsletterSignup.count();
    const activeSignups = await prisma.newsletterSignup.count({
      where: { isActive: true }
    });
    const todaySignups = await prisma.newsletterSignup.count({
      where: { createdAt: { gte: startOfDay } }
    });
    
    // Service breakdown
    const serviceBreakdown = await prisma.contactSubmission.groupBy({
      by: ['service'],
      _count: { service: true }
    });
    
    const stats = {
      contactSubmissions: {
        total: totalSubmissions,
        today: todaySubmissions,
        week: weekSubmissions,
        month: monthSubmissions
      },
      newsletterSignups: {
        total: totalSignups,
        active: activeSignups,
        today: todaySignups
      },
      serviceBreakdown: serviceBreakdown.map(item => ({
        service: item.service,
        count: item._count.service
      }))
    };
    
    res.json({ success: true, data: stats });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch dashboard statistics' 
    });
  }
});

export default router; 