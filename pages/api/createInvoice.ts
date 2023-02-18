// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { generatePdf } from '@/server/generatePdf'
import {getInvoice} from '@/server/invoiceTemplate'
import { supabase } from '@/config/supabase'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
     generatePdf("abdullah pdf", getInvoice).then(async  buffer => {
        const {data , error} = await supabase.storage
        .from("documents")
        .upload("abdullah" , buffer )
        if(error){
            console.error(error)
            return
        }
    })
    
   
  res.status(200).json({ name: 'the function worked' })
}
