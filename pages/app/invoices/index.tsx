import React from 'react'
import Header from '@/components/shared/Header'

import SideBarInvoices from '@/components/invoices/components/SideBarInvoices'
import FlowLayoutInside from '@/components/flow/layout/FlowLayoutInside'
import Preview from '@/components/invoices/components/Preview'
import Creation from '@/components/invoices/components/Creation'


function index() {

 

  return (
    <>
    <Header />
   <SideBarInvoices />
    <FlowLayoutInside>

      <Creation />
      <Preview />

    </FlowLayoutInside>
    </>
  )
}

export default index