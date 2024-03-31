import { atomFamily, selectorFamily } from "recoil";



export const todoAtomFamily = atomFamily({

    key: "todoAtomFamily",

    default : selectorFamily({
        key:"unique",
        get: function(id){
            return async function({get}){
                const todo = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);
                const json = await todo.json();
                return  json.todo;
                
            }
        }
    })

});
