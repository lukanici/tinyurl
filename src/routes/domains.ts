import express, { Router, Request, Response } from 'express';
import Url from '../models/Url';

const router: Router = express.Router();


router.get('/', async (req: Request, res: Response) => {
  const from: Date = req.query.from ? new Date(Date.parse(req.query.from)) : new Date();
  const to: Date = new Date();

  const domains = await Url.aggregate([
    {
      $match: {
        date: { $gte: from, $lte: to }
      }
    },
    {
      $group: {
        _id: "$domain",
        count: { $sum: "$count" }
      }
    },
    {
      $project: {
        _id: false,
        hostname: "$_id",
        count: "$count"
      }
    },
    {
      $sort: {
        count: -1
      }
    }
  ]);

  return res.json(domains);
});


export default router;