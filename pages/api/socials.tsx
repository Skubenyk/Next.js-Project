import { NextApiRequest, NextApiResponse } from 'next';
import { socials } from '../api/data/socials';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ socials });
  }
}
