import { atomFamily } from "recoil";
import { TODOS } from "./Todo";


export const todoAtomFamily = atomFamily({

    key: "todoAtomFamily",

    default : id =>{
        const todo = TODOS.find(t => t.id === id);
        return  todo || { title:"", completed: false, id};
    }

});



// we use atom family when we need similar atom more then one but  with different initial state or validation 

// here it will create a new atom whenever  you call the function with different parameters (id) find the todo with id
// and return that todo