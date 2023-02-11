// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '@/config/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const refreshToken = req.cookies['abdullah-refresh-token']
const accessToken = req.cookies['abdullah-access-token']
console.log("this is from out backend")
console.log(refreshToken)
console.log(accessToken)

if (refreshToken && accessToken) {
  await supabase.auth.setSession({
    refresh_token: refreshToken,
    access_token: accessToken,
  }).catch(error => console.error(error))
 
  supabase.auth.getSession().then(res => console.log(res))
  
} else {
  // make sure you handle this case!
  throw new Error('User is not authenticated.')
}

// returns user information
supabase.auth.getUser().then(res => console.log(res)).catch(err => console.log(err))
  res.status(200).json({status:"succuss ~" })
}
