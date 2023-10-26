import ConnectToMongoDb from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export default async (req, res) => {
    // Enable CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your actual origin or origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, PATCH, POST, PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
  
    // Specific logic for the preflight request
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    // Your API route logic here
    const currentDate = new Date();
    res.status(200).json({ timestamp: currentDate.getTime(), message: 'API response' });
  };
  


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

