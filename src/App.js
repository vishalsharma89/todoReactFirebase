import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import firebase from 'firebase';
import './App.css';
import db from './firebase';
// import db from "../../firebase"
function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []);


  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();//will stop REFRESH
    // setting todo
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
    setInput('') //clear up the input after clicking add todo button
  }
  return (
    <div className="App">
      <h1 className="Heading">My To-Do</h1>
      <form>
        <FormControl>
          <InputLabel className='todolist'>Write a To-Do</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} variant="contained" type='submit' onClick={addTodo}>Add Todo</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
        {/* <li></li> */}
      </ul>
    </div>
  );
}

export default App;

// 1
