import Tasks from './Tasks';

export default function SelectedProject({project,onDelete,onAddTask,onDeleteTask,tasks}
){
    
    const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
    });

    return <div className="w-[35rem] mt-16">
        <header className="mb-4 pb-4 border-b-2 border-stone-300">
            <div className="flex item-center justify-between">
                <div>
                    <h1 className="uppercase text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <p>{formattedDate}</p>
                </div>
                <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>Delete</button>
            </div>
        
        
        <p className="mt-3 text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
        <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
}