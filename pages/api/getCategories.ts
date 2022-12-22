// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {Categories} from '../../type';
import {groq} from 'next-sanity';
type Data = {
  catagories: [Categories]      //you also do this -> catagories: Categories[]
}
const query = groq`

`;

export default function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  // res.status(200).json({ name: 'babu' })
}
