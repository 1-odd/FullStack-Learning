import { atom, selector } from "recoil";

export  const countAtom = atom({

    key:"countAtom", // name or anything but should be unique for every atom instance you create

    default:0 // default value

})

export const evenSelector = selector({
    key:'evenSelector',//name of the selector
    get:({get})=>{
        const count = get(countAtom)
        return count %2 === 0;
        }
})