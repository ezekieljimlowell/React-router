import logo from './logo.svg';
import './App.css';
import { RouterComponent } from './Router/RouterComponent';
import { ParentForm } from './RouteOnSubmit/ParentForm';

function App() {
  return (
    <div>
      <RouterComponent />
      <ParentForm />
    </div>
  );
}

export default App;
