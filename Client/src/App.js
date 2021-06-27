import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AllUsers from './Components/AllUsers'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'
import NotFound from './Components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/all" component={AllUsers} />
        <Route exact path = "/add" component={AddUser} />
        <Route exact path = "/edit/:id" component={EditUser} />
        <Route exact path = "/*" component={NotFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
