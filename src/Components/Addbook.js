import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from 'react-router'

function Addbook() {
    let history=useHistory();
    const [newBook,setNewBook]=useState([{
        bookName:"",
        authorName:"",
        rating:""
    }
    ]);
    const handleInputChange=(e)=>{
    setNewBook({...newBook,[e.target.name]:e.target.value})
    }
    const saveBook=(e)=>{
        e.preventDefault();
    axios.post("http://localhost:3000/books",newBook)
    .then((response)=>{
        setNewBook(response.data)
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })
    history.push("/");
    }
    return (
        <div className="container">
            <form>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Bookname</label>
  <input type="text"
   class="form-control"
   id="exampleFormControlInput1" 
  placeholder="Enter Book name"
  name="bookName" 
  value={newBook.bookName}
  onChange={handleInputChange}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label">Authorname</label>
  <input type="text"
   class="form-control"
   id="exampleFormControlInput2"
   placeholder=" enter authorname" 
  name="authorName" 
  value={newBook.auhtorName}
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
  value={newBook.ratings}
  onChange={handleInputChange}/>
</div>
<div className="mb-3">
<button className="btn btn-dark" onClick={saveBook}>Save Book</button>

        </div>
        </form>
        </div>
    )
}

export default Addbook
