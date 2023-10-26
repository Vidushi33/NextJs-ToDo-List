import ConnectToMongoDb from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";
import Cors from 'micro-cors';

const cors = Cors({
    allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // Customize the allowed HTTP methods as needed.
  });

  export default cors((req, res) => {
    res.status(200).json({ message: 'API response' });
  });

export async function POST(req){
    const {title, description} = await req.json()
    // console.log(title)
    await ConnectToMongoDb()
    await Task.create({title, description})
    return NextResponse.json({message: "Added The Task Successfully"}, {status: 201})
}


export async function GET(){
    await ConnectToMongoDb()
    const task = await Task.find()
    return NextResponse.json(task)
}

export async function DELETE(req){
    // console.log(req.nextUrl)
    const id = req.nextUrl.searchParams.get('id')
    // console.log(id)
    await ConnectToMongoDb()
    await Task.findByIdAndDelete(id)
    return NextResponse.json({message:"Deleted The Task !!"}, {status:200})
}

export async function PUT(req){
    const id = req.nextUrl.searchParams.get('id')
    const {title : title, description:description} =await req.json()
    await ConnectToMongoDb()
    await Task.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message:"Updated the Data !!"}, {status:200})
}

