import {atom, selector} from 'recoil'

export const networkAtom = atom({

    key:"networkAtom",
    default: 105
});


export const jobsAtom = atom({

    key:"jobskAtom",
    default: 10
})


export const messageAtom = atom({

    key:"messageAtom",
    default: 5
})

export const notificationAtom = atom({

    key:"notificationAtom",
    default: 12
})


export const sumofAllNotification = selector({
    key: "sumOfNotifications",   // unique ID (to be used by derived atoms/selectors)
    get:({get})=>{
        const sum = get(networkAtom) + get(jobsAtom)+ get(notificationAtom) + get(messageAtom);
         return sum;
    }
})