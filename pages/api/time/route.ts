export const dynamic = 'force-dynamic';
// 'use server'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    // res?.status(200).json({ name: 'Hello from Next.js!' })
  res?.status(200).json({time: new Date().toLocaleTimeString(),
    });
} 