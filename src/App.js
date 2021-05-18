import logo from './logo.svg';
import './App.css';
import BookList from './Components/BookList';
import Addbook from './Components/Addbook';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Apicalls from './Service/Apicalls';
import Editbook from './Components/Editbook';

 
function App() {
    return(
      <div>
      
         <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BookList}></Route>
          <Route path="/Addbook" component={Addbook}></Route>
          <Route path="/Editbook/:id" component={Editbook}></Route>
        

        </Switch>
        </BrowserRouter> 
      </div>
    )

  return (
    <div>
      <BookList/>
      <Apicalls/>
      <Addbook/>
      <Editbook/>
    
    
      
    </div>
  );
}

export default App;
