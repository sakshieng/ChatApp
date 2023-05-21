import { useEffect, useState } from 'react';
import './App.css';
import io from 'socket.io-client'
import {nanoid} from 'nanoid';
const socket = io.connect("http://localhost:5000");
const username = nanoid(4);

function App() {
  const [message,setMessage] = useState();
  const [chat,setChat] = useState([]);
  useEffect(()=>{
    // on -> receive emit -> send
    socket.on("Chat",(serverMessage)=>{
      setChat([...chat,serverMessage]);
    })
  })
  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("Chat",{
      message,username
    })
    setMessage("");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to chat app!</h1>
        {chat && chat.map((msg)=>{
          console.log(msg);
          return(
            <div className='data'>
              <p>{msg.message}</p>
              <p id='user'>id={msg.username}</p>
            </div>
          )
        })}
        <form onSubmit={sendChat}>
          <input type='text' name='message' value={message} onChange={(e)=>{
            setMessage(e.target.value);
          }} placeholder='Write ur message here'/>
          <button type='submit'>submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
