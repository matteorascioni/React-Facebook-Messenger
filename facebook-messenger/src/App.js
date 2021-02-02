import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    // all the logic to send a message
    event.preventDefault();
    setMessages([messages, input]);
    setInput(''); 
  }

  return(
      <div className="App">
          <form>
          <input value={ input } onChange={event => setInput(event.target.value)} />
          <Button 
            variant="contained" 
            color="primary" 
            disabled={!input} 
            type="submit" 
            onClick={ sendMessage }
          >
              Send message
          </Button>
          </form>
      
          {
          messages.map(message => 
          <p>{ message }</p>
          )
          }
    </div>
  )
}


export default App;
