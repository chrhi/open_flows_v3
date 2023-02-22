import FlowLayoutInside from '@/components/flow/layout/FlowLayoutInside'
import SideBarInvoices from '@/components/invoices/components/SideBarInvoices'
import Header from '@/components/shared/Header'
import Settings from '@/components/invoices/components/Settings'
import React from 'react'

export default function settings() {
  return (
  <>
   <Header />
   <SideBarInvoices />
   <FlowLayoutInside>
    <Settings />
    </FlowLayoutInside>
  </>
  )
}

