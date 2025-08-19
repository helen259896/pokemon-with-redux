// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest  } from 'next/server';
// import { Readable } from "node:stream";
// 'use server';

import {comments} from './data';
type Data = {
  id: number;
  text: string
};


//support GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS methods
export  default function handler(
  req: NextRequest,
  res: NextResponse<Data>,
) {
    const method = req.method;
    switch(method) {
        case 'GET':
          GET(req, res);
          break;
        case 'POST':
          POST(req, res);
          break;
        case 'PUT':
          PUT(req, res);
          break;
        default:
          GET(req, res);
          // res.status(200).json({ name: "John Doe" });
    }
}

export  async function GET(
  req: NextRequest,
  res: NextResponse<Data>
) {
    // return new Response("Hello new world Doe");
    const params = req.query;
    const searchKey = params?.['search'];
    const results = comments.filter(comment => {
      if (searchKey) {
        return comment.text.toLowerCase().includes(searchKey.toLowerCase());
      }
      return true;
    });
    const rcomments = results.length > 0 ? results : comments;
    console.log('results',  results);
    // console.log('url',  req.url);
    // console.log('url',  req.query);
    // console.log('url',  req.formData);
    // console.log('params',  params);
//   res?.status(200).json({ name: 'Hello from Next.js!' })
  res?.status(200).json(rcomments)
}

export async function POST(
  req: NextRequest,
  res: NextResponse<Data>
) {
  // const {body, headers, method }= req;
  // const { Readable } = require('stream');

  
   const comment = req.body as unknown;
  //  const comment = Readable.from(req.body);
    console.log('comments',  comment);
    
    addComment(comment as Data);
    console.log('comments',  comments);
    // res.setHeader('Cache-Control', 'stale-while-revalidate=59');
    res.headers.set("Content-Type", "text/html");
    res?.status(202).json(comments)

  // res?.status(201).json(newComment)
  // res?.status(200).json({ name: 'Hello from Next.js!' })
}
 
  
    
  //   res?.status(200).json(comments);
  


export  async function PUT(
   req: NextRequest,
   res: NextResponse<Data>
) {
    // return new Response("Hello new world Doe");
    
  res?.status(200).json({ name: 'PUT is here from Next.js!' })
  // res?.status(200).json(comments)
}

function addComment (comment: Data) {
  let find = false;
  //find the comment id and replace the content
  //or add the comment as a new item
    comments.forEach(com => {
      if(com.id === comment.id) {
        find = true;
        com.text = comment.text;
      }
    })
    if (!find) {
      comments.push({
        id: comments.length + 1,
        text: comment.text,
      });
    }
}