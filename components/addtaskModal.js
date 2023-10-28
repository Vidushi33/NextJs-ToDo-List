"use client"

import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';


const uri = process.env.URL

export default function AddTaskModal() {

    
    const [open, setOpen] =useState(false);
    const[title,setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const onSubmit = async(e) => {
        

        if(!title || !desc)
        {
          alert("Title and Description are Required !!")
        }
        else{
          try{
            const res = await fetch(`${uri}/api/task`, {
              method:"POST",
              headers:{
                "Content-type" : "application/json",
              },
              body:JSON.stringify({title:title, description:desc}),
              
            })
    
            console.log(res)
            
        }catch(error){
          console.log(error)
        }

         
      handleClose()
      window.location.reload()
      setTitle('')
      setDesc('')
        }
      
      
  } 
      

  return (
    <div>
      <button onClick={handleClickOpen} className='cursor-pointer' >
        Create Task
      </button>
      <Dialog open={open} onClose={handleClose}  className='p-9'>
        <DialogTitle className='font-bold text-blue-700'>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
            autoFocus
            margin="dense"
            id="outlined-title"
            label="Enter the Title of the task"
            type="text"
            fullWidth
            
          />

<TextField
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            multiline
            rows={4}
            
            margin="dense"
            id="outlined-description"
            label="Enter the Description of the Task"
            type="text"
            fullWidth
            
          />
        </DialogContent>
        <DialogActions>
          <button onClick={onSubmit} className='bg-blue-500 mr-3 mb-3 py-1 px-3 rounded font-bold'>Save</button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

