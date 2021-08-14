import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css';
import FormContainer from './components/FormContainer'
import {Store} from './store/index.js'

function App() {
  return (
    <div className="App">
     <Store>
     <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={FormContainer} />
         </Switch>
        </Router>
     </Store>
              
    </div>
  );
}

export default App;
