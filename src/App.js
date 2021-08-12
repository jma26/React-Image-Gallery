import { BrowserRouter, Switch } from 'react-router-dom';   
import Router from './router/Router';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Router />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
