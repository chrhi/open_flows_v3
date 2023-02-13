import Header from '@/components/shared/Header'
import SideBar from '@/components/flow/components/SideBar'
import FlowLayoutInside from '@/components/flow/layout/FlowLayoutInside'

function docs() {
  return (
   <>
      <Header />
    <SideBar />
    <FlowLayoutInside>

      <h1>this is the docs page</h1>

    </FlowLayoutInside>
   </>
  )
}

export default docs