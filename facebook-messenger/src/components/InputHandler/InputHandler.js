import React, { useState, useEffect } from 'react'; 
import { FormControl, Input } from '@material-ui/core';
import Message from '../Message/Message';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import './InputHandler.css';

const InputHandler = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'John', message: 'Hello, how are you ?'},
    {username: 'Jack', message: 'Hey!'},
  ]);
  const [username, setUserName] = useState('');

  useEffect(() => {
    setUserName( prompt( 'Please enter your name' ) );
  }, [])

  // SEND MESSAGE LOGIC
  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([
      ...messages, { username: username, message: input },
    ]);
    setInput(''); 
  }

  return(
    <div className="InputHandler">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Messenger_logo_2018.svg" alt=""/>
      <h1>Welcome { username }</h1>

      {/* INPUT BAR & SEND BUTTON */}
      <form className="InputHandler__form">
        <FormControl className="InputHandler__formControl">
          <Input 
              className="InputHandler__input" 
              placeholder="Enter a message..." 
              value={ input } 
              onChange={event => setInput(event.target.value)} 
          />
          <IconButton
              className="InputHandler__iconButton"
              variant="contained" 
              color="primary" 
              disabled={ !input } 
              type="submit" 
              onClick={ sendMessage }
          >
              <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      {/* END INPUT BAR & SEND BUTTON */}

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

export default InputHandler;
