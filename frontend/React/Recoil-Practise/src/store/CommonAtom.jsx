import { atom, selector } from "recoil";


export const notification = atom({
    key:"notification",

    // this default  value is used when the user first visits our page. and data fetch inside the component 

    // default:{
    //     network:0,
    //     jobs:0,
    //     messaging:0,
    //     notifications:0
    // }

    // now we will fetch data inside atom insted of inside the component


    default:selector({
        key:"notificationSelector",
        get: async()=>{

            const res = await fetch("https://sum-server.100xdevs.com/notifications");
            const json = await  res.json();
            
            return json;
            
        }
    })


});

// there is a problem with it . it will not let your component render until  the data has been fetched  
// so if you want to show loading screen or something like that , then use this way
/*
import {useRecoilValueLoadable} from 'recoil';
const NotificationScreen=()=>{
    const loadableNotification=useRecoilValueLoadable(notification);
    console.log(loadableNotification)
    return <div>Loading...</div>;
};*/



// instead of above method we can use below one which will give us status of data fetching

// const NotificationScreen=()=>{
//     const notificationStatus=useRecoilValue(notification);
//     console.log(notificationStatus);
//     if (notificationStatus.state==="loading"){
//         return <div>Loading ... </div>
//     }else if(notificationStatus.state=="error"){
//         return <div>{notificationStatus.contents}</div>
//     } else if(notificationStatus.state=="ready"){
        
//        return <NotificationList notifications={notificationStatus.contents}/>
//     }
// }

// export default NotificationScreen;



export const totalNotification = selector({
    key:'totalNotification',
    get:({get})=>{
        const allNotification = get(notification);

        return allNotification.network +  
            allNotification.jobs +  
            allNotification.messaging + 
            allNotification.notifications;
    }
})