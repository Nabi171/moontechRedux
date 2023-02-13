import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { Provider } from "react-redux"
import store from './redux/store';
import { RouterProvider } from 'react-router';
import routes from './routes/routes';
function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
