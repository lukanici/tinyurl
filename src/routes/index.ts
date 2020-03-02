import express, { Router, Request, Response } from 'express';
const router: Router = express.Router();

import Url from '../models/Url';
import path from 'path';


// @route   GET /:code
// @desc    Redirect to original URL
router.get('/:code', async (req: Request, res: Response) => {
  const url = await Url.findOne({ code: req.params.code });
  if (url) {
    return res.redirect(url.originalUrl);
  } else {
    // return res.status(400).json({ error: 'No URL found' });

    // Redirect to Angular app to display 404 page
    res.sendFile(path.join(__dirname, '/../../client/dist/TinyURL/index.html'));
  }
});


export default router;