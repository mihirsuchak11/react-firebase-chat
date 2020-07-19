import React, { useState, useEffect } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

import Message from './Message';
import db from './firebase';

import './App.css';

export default function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapShot => {
      setMessages(snapShot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  }, [])

  useEffect(() => {
    const name = prompt('Please enter your name');
    setUserName(name)
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      userName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <>
      <h1>Welcome {userName}</h1>
      <FlipMove>
        {
          messages.map(({ message, id }) => (
            <Message key={id} userName={userName} message={message} />
          ))
        }
      </FlipMove>
      <form action="" className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="outlined" color="primary" type="submit" onClick={sendMessage}><SendIcon /></IconButton>
        </FormControl>
      </form>
    </>
  )
}
