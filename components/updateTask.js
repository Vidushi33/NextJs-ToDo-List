"use client"

import React, { useState } from 'react'
import { HiPencilAlt } from "react-icons/hi"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';


export default  function UpdateTask  ({id, title, description}){
  // console.log(id)
  // console.log(title)

  const [open, setOpen] =useState(false);
  const [newTitle, setNewTitle] = useState(title)
    const [newDesc, setNewDesc] = useState(description)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async(e) => {
        

    if(!newTitle || !newDesc)
    {
      alert("Title and Description are Required !!")
    }
    else{
      try{
        const res = await fetch(`http://localhost:3000/api/task?id=${id}`, {
          method:"PUT",
          headers:{
            "Content-type" : "application/json",
          },
          body:JSON.stringify({title:newTitle, description:newDesc}),
          
        })

        // console.log(res)
        
    }catch(error){
      console.log(error)
    }

     
  handleClose()
  window.location.reload()
  setNewTitle('')
  setNewDesc('')
    }
  
  
} 




  
  return (
    
    <div className='flex'>
       <button className='mr-2 text-blue-700' onClick={handleClickOpen} >
    <HiPencilAlt size={24}  />
    
  </button>

  <Dialog open={open} onClose={handleClose}  className='p-9'>
      <DialogTitle className='font-bold text-blue-700'>Update Task</DialogTitle>
      <DialogContent>
        <TextField
        value={newTitle}
        onChange={(e)=> setNewTitle(e.target.value)}
          autoFocus
          margin="dense"
          id="outlined-title"
          label="Enter the Title of the task"
          type="text"
          fullWidth
          
        />

<TextField
          value={newDesc}
          onChange={(e)=>setNewDesc(e.target.value)}
          multiline
          rows={4}
          autoFocus
          margin="dense"
          id="outlined-description"
          label="Enter the Description of the Task"
          type="text"
          fullWidth
          
        />
      </DialogContent>
      <DialogActions>
        <button onClick={onSubmit} className='bg-blue-500 mr-3 mb-3 py-1 px-3 rounded font-bold'>Update</button>
      </DialogActions>
    </Dialog>
    </div>
        

  
 
  
  )
}

