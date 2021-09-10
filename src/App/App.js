import { BrowserRouter, Switch } from 'react-router-dom';
import Router from '../router/Router';

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
