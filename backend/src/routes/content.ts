import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/content?key=homepage
router.get('/', async (req, res) => {
  const key = req.query.key as string;
  if (!key) return res.status(400).json({ error: 'Missing key parameter' });
  try {
    const entry = await prisma.siteContent.findUnique({ where: { key } });
    if (!entry) return res.status(404).json({ error: 'Content not found' });
    res.json({ success: true, content: entry.content });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

// POST /api/content { key, content }
router.post('/', async (req, res) => {
  const { key, content } = req.body;
  if (!key || !content) return res.status(400).json({ error: 'Missing key or content' });
  try {
    const upserted = await prisma.siteContent.upsert({
      where: { key },
      update: { content, updatedAt: new Date() },
      create: { key, content },
    });
    res.json({ success: true, content: upserted.content });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save content' });
  }
});

export default router; 