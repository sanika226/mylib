import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useHistory, useParams } from 'react-router'

function Editbook() {
    const {id}=useParams();
    let history=useHistory();
    // const [bookList,setBookList]=useState([]);
    const [updatebook,setUpdateBook]=useState([
        {
            bookName:"",
            auhtorName:"",
            rating:""
        }
    ]);
    useEffect(()=>{
     axios
     .get("http://localhost:3000/books",updatebook)
     .then((response)=>{
         setUpdateBook(response.data);
         console.log(response);
     })
     .catch((error)=>{
     console.log(error);
     })
    
     
    },[])
    const updateBook=(e)=>{
     e.preventDefault();
        axios
        .put(`http://localhost:3000/books /${id}`,updatebook)
        .then((response)=>{
            console.log(response.data);
            console.log(response)
        })
        .catch((error)=>{
            console.log(error);
        })
        history.push("/")
    }
    const handleInputChange=(e)=>{
        setUpdateBook({...updateBook,[e.target.name]:e.target.value});
    }
    return (
        <div className="container p-4">
            <form>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Bookname</label>
  <input type="text"
   class="form-control"
   id="exampleFormControlInput1" 
  placeholder="Enter Book name"
  name="bookName" 
  value={updatebook.bookName}
  onChange={handleInputChange}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label">Authorname</label>
  <input type="text"
   class="form-control"
   id="exampleFormControlInput2"
   placeholder=" enter authorname" 
  name="auhtorName" 
  value={updatebook.authorName}
  onChange={handleInputChange}
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput3" class="form-label">Ratings</label>
  <input type="number"
   class="form-control"
   id="exampleFormControlInput3"
   placeholder=" enter Ratings" 
  name="ratings" 
  value={updatebook.ratings}
  onChange={handleInputChange}/>
</div>
<div className="mb-3">
<button className="btn btn-dark" onClick={updateBook}>Update Book</button>
   </div>
            </form>
        </div>
    )
}

export default Editbook
