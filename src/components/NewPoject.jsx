import Input from './Input';
import {useRef} from 'react'; 
import Modal from './Modal';

export default function NewProject({onAdd,onCancel}){
    const modal=useRef();
    const title = useRef();
    const description = useRef();
    const date =  useRef();

    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDate=date.current.value;

        if(enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDate===''){
            modal.current.open();
            return;
        }

        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            date:enteredDate
        });
    }

    return <div className="w-[35rem] mt-16 ">
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4">INVALID VALUE</h2>
            <p className="text-stone-600 mb-4">Looks like you have entered an invalid value</p>
            <p className=" text-stone-600 mb-4mt-8">Please make sure you have entered correct value</p>
        </Modal>
        <div>
            <Input type="text" ref={title} label="Title"/>
            <Input ref={description} label="Description" textarea/>
            <Input type="date" ref={date} label="Due Date" />
        </div>
        <menu className="flex mt-8 items-center justify-center gap-4 my-4">
            <li>
                <button onClick={onCancel} className="w-40 bg-[#ffd299] hover:bg-[#F7EEDD] text-[#4b3d2d] hover:text-[#2c2a1f] font-semibold px-4 py-2 rounded transition-colors duration-300">Cancel</button>
            </li>
            <li>
                <button onClick={handleSave} className="w-40 bg-[#dd6236] hover:bg-[#FF7F50] text-[#fff8f2] hover:text-[#2c1c13] font-semibold px-4 py-2 rounded transition-colors duration-300">Save</button>
            </li>
        </menu>
    </div>
}