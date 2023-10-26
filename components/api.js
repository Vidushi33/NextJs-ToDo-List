

const uri = process.env.URL
// console.log(uri,"uri")


export async function getTasks(){
    try{
        const res = await fetch(`${uri}/api/task`, {
            cache:'no-store'
        })
            

        if(!res.ok)
        {
            throw new Error("Failed to Get Data")
        }

        return res.json()
    } catch(error){
        console.log("Error Loading Data", error)
    }
    // console.log(uri)
}

