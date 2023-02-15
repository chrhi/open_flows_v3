import Header from '@/components/shared/Header'
import SideBar from '@/components/flow/components/SideBar'
import FlowLayoutInside from '@/components/flow/layout/FlowLayoutInside'
import DocsFeed from '@/components/flow/components/DocsFeed'
import DocView from "@/components/flow/components/DocView"

export default function docs() {
  return (
   <>
      <Header />
    <SideBar />
    <FlowLayoutInside>

      <DocsFeed />
      <DocView />

    </FlowLayoutInside>
   </>
  )
}

