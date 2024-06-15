import { NextApiRequest, NextApiResponse } from 'next';

export function logger(req: NextApiRequest, res: NextApiResponse, next: () => void) {
  console.log(`${req.method} ${req.url}`);
  next();
}
