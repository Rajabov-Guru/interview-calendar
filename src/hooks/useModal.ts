import {useState} from "react";

export default function useModal(initial:boolean){
    const [status, setStatus] = useState<boolean>(initial);

    function close():void{
        setStatus(false);
    }
    function show():void{
        setStatus(true);
    }

    return {status,show, close};
}