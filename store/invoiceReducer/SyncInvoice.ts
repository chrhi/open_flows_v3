import type {Invoice} from "@/static/types"
import { create } from 'zustand'

 type SyncInvoiceType ={
    invoice:Invoice | undefined,
    setInvoice:(input:Invoice) => void
 }


export const SyncInvoice = create<SyncInvoiceType>(
   
      (set ) => ({
       invoice:undefined,
       setInvoice:(input:Invoice) => set({invoice:input})
      })
  )