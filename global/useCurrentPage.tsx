import { create } from "zustand";
import {  persist } from 'zustand/middleware'
interface Page {
    currentPage: string
    moveToFlows: () => void
    moveToDashBored:() => void
  }
//devtools
export const useCurrentPage = create<Page>((set) => ({
    currentPage:"dashboard",
    moveToFlows: () => set({currentPage:"flows"}),
    moveToDashBored: () => set({currentPage:"dashboard"}),
}))