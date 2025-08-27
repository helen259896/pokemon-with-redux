'use server'
import type { NextApiRequest, NextApiResponse } from 'next'
// import { NextResponse, type NextRequest } from 'next/server'
// import { redirect } from 'next/navigation';
import {comments} from '../data'; 
type Data = {
  id: number;
  text: string
};

export  default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const method = req.method;
    switch(method) {
        case 'GET':
          GET(req, res);
          break;
        case 'DELETE':
          DELETE(req, res);
          break;
        case 'PATCH':
          PATCH(req, res);
          break;
        default:
          GET(req, res);
          // res.status(200).json({ name: "John Doe" });
    }
}
export async function GET(req: NextApiRequest, res:NextApiResponse) {
  //set cookie inside query response header
  res.setHeader('y-Custom-Header', 'MyValue');
  res.setHeader('Set-Cookie', 'theme=light');
  res.setHeader('Set-Cookie', 'myCookieName=55678');
  
  return res?.status(200).send("<h1>This is xxx testing profile</h1>");
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const {id} = req.query
  const index = comments.findIndex((comment) => comment.id === Number(id));
  // console.log('DELETE pid WWWWWWWWWWWWWWWWWWWWWWWWWW', index);

  if (index >= 0) {
    comments.splice(index, 1);
  }
  res.json(comments)
}
export async function PATCH(req: NextApiRequest, res: NextApiResponse) {
  const {id} = req.query;
  const commentBody = (req.body as Data)?.text;
  const comment = comments.forEach(comment => {
    if(comment.id === Number(id)){
          comment.text = commentBody;
    }
  });
  // console.log('pid WWWWWWWWWWWWWWWWWWWWWWWWWW', id);
  // console.log('comment WWWWWWWWWWWWWWWWWWWWWWWWWW', commentBody);
  res?.status(200).json(comment)
}