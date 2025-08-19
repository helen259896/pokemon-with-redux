// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { redirect } from 'next/navigation'
// import { notFound } from 'next/navigation';

// import 'server-only';
// 'use server'

type Data = {
  name: string;
};

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>,
// ) {
//   res.status(200).json({ name: "John Doe" });
// }
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   
  // return new Response("Hello new world Doe");
  res?.status(200).json({ name: 'Hello from Next.js!' })
}
