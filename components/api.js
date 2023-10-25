"use client"

export async function getTasks(){
    try{
        const res = await fetch( `${process.env.URL}/api/task`,{
            cache:"no-store",
        })

        if(!res.ok)
        {
            throw new Error("Failed to Get Data")
        }

        return res.json()
    } catch(error){
        console.log("Error Loading Data", error)
    }
}

