import logo from './logo.svg';
import './App.css';
import { RouterComponent } from './Router/RouterComponent';
import { ParentForm } from './RouteOnSubmit/ParentForm';
import ParamsExample from './RouterParams/Params';
import { ParentRoute } from './NewRoutes/ParentRoute';
import RouterObject from './RouterArrayOfObject/RouterObject';
import { BrowserRouter } from 'react-router-dom';
import NestedRoutes from './NestedRoutes/NestedRoutes';

function App() {
  return (
    <div>
      <NestedRoutes />
      <RouterComponent />
      <ParamsExample />
      <ParentForm />
      <ParentRoute />
      <BrowserRouter>
        <RouterObject />
      </BrowserRouter>
    </div>
  );
}

export default App;
