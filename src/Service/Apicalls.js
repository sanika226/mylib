import axios from "axios";
import React,{useState} from 'react'

function Apicalls() {
    const[name,setName]=useState([]);
    
    axios.get("http://localhost:3000/books")
    .then((response)=>{
     const data=response.data
     console.log(data)
     setName (name)
    })
    return (
         name.map((currentelement)=>{
        const {bookName,authorName,rating}=currentelement;
        return(<div>
            <h1>{bookName}</h1>
            <h2>{authorName}</h2>
            <h2>{rating}</h2>
        
        </div>)
         })

    )
}

export default Apicalls
