import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Main from './pages/main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/login">
          <Login></Login>  
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
