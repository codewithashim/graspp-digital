import { NextApiResponse } from 'next';

export function errorHandler(err: Error, res: NextApiResponse) {
  console.error('Error:', err);
  res.status(500).json({ message: 'Something went wrong' });
}
