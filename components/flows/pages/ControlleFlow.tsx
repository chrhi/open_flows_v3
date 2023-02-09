import { useFlows } from '@/context/useFlows'
import NewProject from '@/components/flows/pages/NewProject';
import Projects from '@/components/flows/pages/Projects';

function ControlleFlow() {
    const isAddingNewProject = useFlows(state => state.isAddingNewProject);
  return (
    
        isAddingNewProject ? <NewProject /> : <Projects />
       
  )
}

export default ControlleFlow