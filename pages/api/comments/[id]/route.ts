'use server'
import type { NextApiRequest, NextApiResponse } from 'next'
// import { redirect } from 'next/navigation';
// import { headers, cookies } from 'next/headers';
import {comments} from '../data'; 
type Data = {
  id: number;
  text: string
};

export  default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
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
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // const {id} = req.query;
  // const {headers} = req;
  // const auth = req.headers.authorization;
  // console.log('headers XXXXXXXX', headers);
  // console.log('headers', auth);
  // if(parseInt(id) === 22 ){
  //   // redirect to another page
  //   res.redirect('/api/comments/route'); 
  // }
  // const comment = comments.find((comment) => comment.id === Number(id));
  // res?.status(200).json(comment ? comment : comments)
  // return res?.status(200).send("This is the testing xxxx response", {
  //   headers: {
  //     // 'Content-Type': 'text/plain',
  //     'Content-Type': 'text/html',
  //     'Set-Cookie': 'theme=dark',
  //   },
  // });
  // const cookieStore = await cookies();
  
 
  // cookies().set('resultpage', '20');
  //  cookieStore.set({
  //     'theme': "dark",
  //  });
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