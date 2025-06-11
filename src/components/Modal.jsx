import {useImperativeHandle,useRef} from 'react';
import Button from './Button';



export default function Modal({ref,children,buttonCaption}){

    const dialog=useRef(); 

    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        };
    });
    return <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    ref={dialog}>
        {children}
        <form method="dialog" className="text-center mt-3 mb-1">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>;
}