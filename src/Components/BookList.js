import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

function BookList() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axios
        .get("http://localhost:3000/books")
        .then((response)=>{
        //   const data = response.data;
          setBookList( response.data)
          console.log(response)
        })
        .catch((error)=>{
        console.log(error)
    })
  }, [])
  
  return (
  <div>
      <div className="addbtn">
        <Link to="/addbook" className="btn btn-dark">Addbook</Link>

      </div>
    <table class="table table-striped">
    <thead>
      <tr>
        <th>Book Name</th>
        <th>Author Name</th>
        <th>Rating</th>
    
      </tr>
    </thead>
    <tbody>
   { bookList.map((element,id) => (
    <tr key={id}>
      
    
        <td>{element.bookName}</td>
        <td>{element.authorName}</td>
        <td>{element.rating}</td>
        <td><Link to={`/editbook/${element.id}`}>Edit</Link></td>
        <button>Delete</button>
      </tr>
        
    ))}
    
    </tbody>
      </table>
      </div>
  )}

export default BookList