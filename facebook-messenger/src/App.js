import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';

import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'Manuel', text: 'Hello'},
    {username: 'Livia', text: 'Hi'},
  ]);
  const [username, setUserName] = useState('');

  useEffect(() => {
    setUserName( prompt( 'Please enter your name' ) );
  }, [])

  const sendMessage = (event) => {
    // all the logic to send a message
    event.preventDefault();
    setMessages([
      ...messages, { username: username, text: input },
    ]);
    setInput(''); 
  }

  return(
      <div className="App">
        <h1>Welcome { username }</h1>

        <form>
          <FormControl>
              <InputLabel>Enter a message...</InputLabel>
              <Input value={ input } onChange={event => setInput(event.target.value)} />
              <Button 
                variant="contained" 
                color="primary" 
                disabled={ !input } 
                type="submit" 
                onClick={ sendMessage }
              >
                  Send message
              </Button>
            </FormControl>
        </form>
     
        {
          messages.map(message => (
            <Message username={ username } message={ message }/>
          ))
        }
    </div>
  )
}


export default App;
