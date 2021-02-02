import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';

import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {userName: 'Matteo', text: 'Hello'},
    {userName: 'Livia', text: 'Hi'},
  ]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName( prompt( 'Please enter your name' ) );
  }, [])

  const sendMessage = (event) => {
    // all the logic to send a message
    event.preventDefault();
    setMessages([
      ...messages, { userName: userName, text: input },
    ]);
    setInput(''); 
  }

  return(
      <div className="App">
        <h1>Welcome {userName}</h1>

        <form>
          <FormControl>
              <InputLabel>Enter a message...</InputLabel>
              <Input value={ input } onChange={event => setInput(event.target.value)} />
              <Button 
              variant="contained" 
              color="primary" 
              disabled={!input} 
              type="submit" 
              onClick={ sendMessage }
              >
                  Send message
              </Button>
            </FormControl>
        </form>
     
        {
          messages.map(message => (
            <Message userName={ message.userName } text={ message.text }/>
          ))
        }
    </div>
  )
}


export default App;
