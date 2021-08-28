import { BrowserRouter, Switch } from 'react-router-dom';   
import Router from '../router/Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Router />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
