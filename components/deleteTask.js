"use client"

import React from 'react'
import { HiOutlineTrash } from "react-icons/hi"

export default function DeleteTask({id}){
    // console.log(id)
    const removeTask = async() => {
        const confirmed = confirm("Are You Sure You Want to Delete ?")
        if(confirmed){
            await fetch(`http://localhost:3000/api/task?id=${id}`,{
                    method:"DELETE"
                })
              
        }

        window.location.reload()
    }

    return(
    <button className='text-teal-200 cursor-pointer' onClick={removeTask} >
        <HiOutlineTrash size={24} className='cursor-pointer text-red-700' />
      </button>
    )

   
}