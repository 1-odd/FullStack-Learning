import { useEffect } from 'react';
import './App.css'
// import { networkAtom, notificationAtom , jobsAtom,messageAtom , sumofAllNotification } from './store/Atoms'
import { notification , totalNotification } from './store/CommonAtom'
import { RecoilRoot, useRecoilValue , useRecoilState } from 'recoil'

function App() {


  return (

    <RecoilRoot>
        <Navbar/>
    </RecoilRoot>
  )
}

function Navbar(){

  // const networkCount = useRecoilValue(networkAtom);
  // const messageCount = useRecoilValue(messageAtom);
  // const jobsCount = useRecoilValue(jobsAtom);
  // const notificationCount = useRecoilValue(notificationAtom);

  const [notificationCount , setNotificationCount] = useRecoilState(notification);
  const  totalNotifications = useRecoilValue(totalNotification);

  // useEffect(()=>{
  //   fetch("https://sum-server.100xdevs.com/notifications")
  //   .then(async (res)=>{
  //     const json = await  res.json();
  //     setNotificationCount(json);
  //     console.log(json)
  //   })
  // },[])

  // insted of this we will use atom for fetch the data  and display it in UI using selectors


  return(
    <div>
    

    
    <button>Home</button>

    <button>My Network {notificationCount.network >= 100?"99+":notificationCount.network}</button>

    <button>Jobs {notificationCount.messaging}</button>

    <button>Messaging {notificationCount.jobs}</button>

    <button>Notification {notificationCount.notifications}</button>

    <button>My Profile </button>
    <h2>Total notifications are : {totalNotifications}</h2>

  </div>
  )
}

export default App



// it is similer like linkedin navbar where i fetch data from backend and manage the states of that data using recoil 
// it fetch the data at the time of  component mounting only once and not again until there is a change in notification atom or selector, so