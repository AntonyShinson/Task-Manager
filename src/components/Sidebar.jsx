import Button from './Button.jsx';


///#faf9f9

export default function Sidebar({selectedProjectId,onStartAddProject,projects,onSelectedProject}){
    return <aside className="h-[93%] w-[20%] px-8 py-16 bg-[#faf9f9] text-black md-72 border-r-2 border-[#c4bcab]"> 
        <h2 className="mb-8 text-2xl font-bold uppercase md-text-xl text-stone-500">Your Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul className="mt-8">
            {projects.map((project) => {
            let cssClasses="w-full font-bold bg-stone-800 text-left px-2 py-3 rounded-md my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
            
            if(project.id===selectedProjectId)
            {
                cssClasses+=' bg-stone-700 text-stone-100';
            }
            else{
                cssClasses+=' text-stone-400 bg-stone-800';
            }

            return (<li key={project.id}>
                <button onClick={()=>onSelectedProject(project.id)}
                    className={cssClasses} >{project.title}</button>
            </li>)})}
        </ul>
    </aside>
}