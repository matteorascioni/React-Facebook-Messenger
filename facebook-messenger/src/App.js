import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'John', message: 'Hello'},
    {username: 'Jack', message: 'Hi'},
  ]);
  const [username, setUserName] = useState('');

  /**
   * FIREBASE
   */
  // useEffect(() => {
  //   db.collection('messages').onSnapshot(snapshot => {
  //     setMessages( snapshot.docs.map( doc => doc.data() ) );
  //   });
  // }, [] )

  useEffect(() => {
    setUserName( prompt( 'Please enter your name' ) );
  }, [])

  const sendMessage = (event) => {
    // all the logic to send a message
    event.preventDefault();
    setMessages([
      ...messages, { username: username, message: input },
    ]);
    setInput(''); 
  }

  return(
      <div className="App">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Messenger_logo_2018.svg" alt=""/>
        <h1>Welcome { username }</h1>

        <form className="app__form">
          <FormControl>
              <InputLabel>Enter a message...</InputLabel>
              <Input value={ input } onChange={event => setInput(event.target.value)} />
              <IconButton
                variant="contained" 
                color="primary" 
                disabled={ !input } 
                type="submit" 
                onClick={ sendMessage }
              >
                <SendIcon />
              </IconButton>

{/* 
              <Button 
                variant="contained" 
                color="primary" 
                disabled={ !input } 
                type="submit" 
                onClick={ sendMessage }
              >
                  Send message
              </Button> */}
            </FormControl>
        </form>

        <FlipMove>
          {
            messages.map( message => (
              <Message username={ username } message={ message }/>
            ))
          }
        </FlipMove>
    </div>
  )
}


export default App;
