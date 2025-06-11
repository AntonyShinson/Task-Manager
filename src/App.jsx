import Sidebar from './components/Sidebar';
import NewProject from './components/NewPoject';
import NoProject from './components/NoProject';
import {useState} from 'react';
import SelectedProject from './components/SelectedProject';

function App() {

  const[projectState,setProjectState]=useState({
    currentAction:'adding',
    selectedProjectId:undefined,
    projects: [],
    tasks:[]
  });

  function handleCancel(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
      };
    });
  };

  function handleSelect(id){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:id,
      };
    });
  };

  function handleAddTask(text){
    setProjectState(prevState=>{
      const taskId=Math.random();
      const newTask={
        text:text,
        projectId:prevState.selectedProjectId,
        id:taskId
      };
      return {
        ...prevState,
        tasks:[newTask,...prevState.tasks],
      };
    })
  };

  function handleDeleteTask(id){
    setProjectState(prevState=>{
      return {
        ...prevState,
        tasks:prevState.tasks.filter((task)=>task.id!==id),
      };
    });
  };

  function handleStartAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:null,
      };
    });
  };

  function handleDelete(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter((project)=>project.id!==prevState.selectedProjectId),
      };
    });
  };

  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const projectId=Math.random();
      const newProject={
        ...projectData,
        id:projectId
      };
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject],
      };
    })
  };

  const selectedProject = projectState.projects.find(project=>project.id===projectState.selectedProjectId);
  
  
  let content =<SelectedProject tasks={projectState.tasks} project={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>;
  if (projectState.selectedProjectId===null){
    content = <NewProject  onAdd={handleAddProject} onCancel={handleCancel}/>
  }else if(projectState.selectedProjectId===undefined){
    content = <NoProject onStartAddProject={handleStartAddProject}/>
  }

  return (
    <>
    <main className="h-screen my-8 flex gap-8 ">
      <Sidebar onSelectedProject={handleSelect} selectedProjectId={projectState.selectedProjectId}
      onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      {content}
    </main>
    </>
  );
}

export default App;
