import { useState } from "react"

const FunCounter = () =>{
    const [count,setCount] = useState(0)
    return(
        <>
        <div style={{textAlign:'center',marginLeft:"50%",width:"100%"}}>
            <h1 style={{textAlign:"center"}}>{count}</h1>
            <button onClick={()=>setCount(count + 1)}>Increment + </button>
            <button onClick={()=>setCount(count - 1)}>Deccrement - </button>
        
        </div>
        </>
    )
}
export default FunCounter

