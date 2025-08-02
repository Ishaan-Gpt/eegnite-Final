import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const router = Router();
const prisma = new PrismaClient();

const RESEND_API_KEY = process.env.RESEND_API_KEY;

router.post('/', async (req, res) => {
  const { email, firstName, lastName } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }
  try {
    await prisma.newsletterSignup.create({
      data: {
        email,
        firstName: firstName || null,
        lastName: lastName || null,
      },
    });
    // Send welcome email via Resend
    if (RESEND_API_KEY) {
      try {
        await axios.post(
          'https://api.resend.com/emails',
          {
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Welcome to the EEGNITE Newsletter!',
            html: '<h1>Welcome!</h1><p>Thank you for subscribing to EEGNITE.</p>',
          },
          {
            headers: {
              Authorization: `Bearer ${RESEND_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );
      } catch (err) {
        // Ignore email errors
      }
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to save newsletter signup' });
  }
});

export default router;
