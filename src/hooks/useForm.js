import { useState } from "react";

export const useForm = (objetInitial = {}) =>{
    
    const [form, setForm] = useState(objetInitial);

    const serialiceForm = (form) =>{
        const formData = new FormData(form);
        const objectComplete = {};

        for( let [name, value] of formData){
            objectComplete[name] = value;
        }

        return objectComplete;
    }

    const send = (e) =>{
        e.preventDefault();

        let curso = serialiceForm(e.target);

        setForm(curso)
    } 

    const change = ({target})=>{
        const {name, value} = target;

        setForm({
            ...form,
            [name] : value
        })
    }
    
    
    
    
    return {
        form,
        send,
        change
    }
}