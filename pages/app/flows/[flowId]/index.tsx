import Header from '@/components/shared/Header'
import SideBar from '@/components/flow/components/SideBar'
import FlowLayoutInside from '@/components/flow/layout/FlowLayoutInside'
import Brief from '@/components/flow/components/Brief'
import Messages from '@/components/flow/components/Messages'


function index() {

 

  return (
    <>
    <Header />
    <SideBar />
    <FlowLayoutInside padding>

      <Brief />
      <Messages />

    </FlowLayoutInside>
    </>
  )
}

export default index