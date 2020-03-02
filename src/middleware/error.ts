import { Request, Response } from "express";

export default function (err: Error, req: Request, res: Response, next: Function) {
  // Log the exception
  res.status(500).json({ error: 'Something failed.' });
}