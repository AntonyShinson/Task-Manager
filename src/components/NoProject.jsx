import image from '../assets/no-projects.png';
import Button from './Button.jsx';


export default function NoProject({onStartAddProject}){
    return <div className="mt-24 text-center w-2/3">
        <img src={image} className="w-16 h-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <p className="mt-8 text-stone-400 mb-4">
            <Button onClick={onStartAddProject}>Create New Project</Button>
        </p>
    </div>
}