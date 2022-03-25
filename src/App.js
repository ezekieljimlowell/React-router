import logo from './logo.svg';
import './App.css';
import { RouterComponent } from './Router/RouterComponent';
import { ParentForm } from './RouteOnSubmit/ParentForm';
import ParamsExample from './RouterParams/Params';
import { ParentRoute } from './NewRoutes/ParentRoute';


function App() {
  return (
    <div>
      <RouterComponent />
      <ParamsExample />
      <ParentForm />
      <ParentRoute />
    </div>
  );
}

export default App;
