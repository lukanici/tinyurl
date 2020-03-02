import express, { Router, Request, Response } from 'express';
const router: Router = express.Router();

import validUrl from 'valid-url';
import shortid from 'shortid';
import Url from '../models/Url';
import url from 'url';

// @route   POST /api/urls/
// @desc    Create short URL
router.post('/', async (req: Request, res: Response) => {
  const { originalUrl } = req.body;

  // Validate URL
  if (!validUrl.isUri(originalUrl)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  // Check if that URL has already been shortened
  let existingUrl = await Url.findOne({ originalUrl });
  if (existingUrl) {
    existingUrl.count++;
    await existingUrl.save();
    return res.json(existingUrl.toJSON());
  }

  // Create new URL code
  const code = shortid.generate();
  const domain = url.parse(originalUrl).hostname;

  const newUrl = new Url({
    originalUrl,
    domain,
    code
  });
  await newUrl.save();
  return res.json(newUrl.toJSON());
});


export default router;