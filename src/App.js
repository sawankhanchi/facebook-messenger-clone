import React, { useEffect, useState } from 'react';
import './App.css';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // console.log(input);
  // console.log(messages);

  // useState = variable in REACT
  // useEffect = run code on a condition in REACT

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
    // run code here...
    // if its blank inside [], this code runs ONCE when the app component loads
    setUsername(prompt('Please enter your name'))

  }, []) // condition



  const sendMessage = (event) => {
    // all the logic to send a message goes
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" style={{marginTop: '20px'}}alt="" />
      <h1>Hello Messenger</h1>
      <h2>Welcome {username} </h2>

      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app_input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
          
        </FormControl> 
      </form>

      {/* input field */}
      {/* button */}

      {/* messages themselves */}
      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
