// import React from 'react';
// import "./counter.css"
// import {AppContext} from './AppContext';
// import Navbar from './navbar/navbar'
// import Messages from './message/message'

// // const AppContext = React.createContext({})

// function Counter() {
//     return (
//         <AppContext.Provider value={{
//             "username": "superawesome"
//         }}>
//             <div className="App">
//                 <Navbar />
//                 <Messages />
//             </div>
//         </AppContext.Provider>

//     )
// }
// export default Counter

import React, { useContext } from "react";
import ReactDOM from "react-dom";

const AppContext = React.createContext({});

const Navbar = () => {
  const  {username}  = useContext(AppContext)

  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  )
}

const Messages = () => {
  const  {username}  = useContext(AppContext)

  return (
    <div className="messages">
      <h1>Messages</h1>
      <p>1 message for {username}</p>
      <p className="message">useContext is awesome!</p>
    </div>
  )
}

function Counter() {
  return (
    <AppContext.Provider value={{
      username: 'superawesome'
    }}>
      <div className="App">
        <Navbar />
        <Messages />
      </div>
    </AppContext.Provider>
  );
}

export default Counter

