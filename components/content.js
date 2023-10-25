"use client"
  
  import React from 'react'
  

  import { getTasks } from './api'

  import DeleteTask from './deleteTask'
  import UpdateTask from './updateTask'
  


  const Content = async() => {


    const tasks = await getTasks() 
    
 
  console.log(tasks)

    return (
      <>
      <div  className='my-12 max-w-6xl  mx-auto  grid  lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2   justify-center '>
        {tasks.map((task)=>(
        
            
            <div key={task._id} className=' max-w-xs bg-sky-200 p-3 rounded border-solid border-t-4 border-cyan-950 '>
            <div className=''>
              <h1 className='bg-cyan-950 text-white max-w-2xl w-fit py-1 px-5 font-bold rounded text-center'>{task.title}</h1>
              <div className='my-5'>
                {task.description}
              </div>
            </div>
      
            <div className='mt-12 float-right flex'>
             <UpdateTask id={task._id} title={task.title} description={task.description} />
              <DeleteTask id={task._id} />
            </div>
            </div>
      
            
        
      
      
                
        
  ))} 
    </div>

        
      </>
    
    )
  }

  export default Content