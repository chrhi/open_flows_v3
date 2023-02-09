import { create } from 'zustand'
import type { Flow } from '@/static/types'

export const Flows = create(

    (set , get) => ({
      flows: [],
      setFlows: (data:[Flow]) => set({ flows:data }),
      filterFlows: () => {
        
         //@ts-ignore
        const currentFlows = get().flows
        const newFlows = currentFlows.filter((item: number) => item > 4)
        set({ flows:newFlows })
      },
    })
  
)