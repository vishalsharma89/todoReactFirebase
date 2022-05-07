import {Button,Modal,FormControl,Input, List, ListItem,ListItemText,ListItemAvatar } from '@mui/material';
import React from 'react';
import db from '../firebase'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../components/Todo.css';

import Stack from '@mui/material/Stack';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Todo(props) {

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const handleOpen=()=> setOpen(true);
  const handleClose =()=> setOpen(false);


// const deleteTodos = () => {
//     db.collection('todos').doc(props.todo.id).delete();
//   };


const updateTodos = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };


  return (
    <>
    <React.Fragment>
    <Modal open={open} onClose={(e) => setOpen(false)}>
        <Box sx={style}>
          <h1>Update Todos</h1>
          <FormControl>
            <Input
              value={input}
              placeholder={props.todo.todo}
              onChange={(event) => setInput(event.target.value)}
            />
          </FormControl>
          <Button onClick={updateTodos} disabled={!input}>
            Update
          </Button>
        </Box>
      </Modal>
      <div className="container">

      <Card sx={{ maxWidth: 400 }}>
      <List className='list'>
         <CardContent>
          <ListItem sx={{ textAlign: 'center' }}>
           
              <ListItemText primary={props.todo.todo} secondary="Deadline"/>
          </ListItem>
         </CardContent>
          {/* DELETE TODO */}
           <Stack className='Button' direction="row" spacing={2}>
           <CardActions >

          <Button variant="contained" onClick={(e)=>setOpen(true)}>Edit me</Button>
          <Button variant="contained" onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>DELETE ME</Button>
           </CardActions>
           </Stack>
      </List>
      </Card>
      </div>
      </React.Fragment>
    </>
  )
}

export default Todo;
