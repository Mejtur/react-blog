import Home from './pages/Home';
import "./sass/main.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>  
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
