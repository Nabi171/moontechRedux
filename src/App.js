import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { Provider } from "react-redux"
import store from './redux/store';
function App() {
  return (
    <div className="container mx-auto ">
      <Provider store={store} >
        <Navbar></Navbar>
        <Home></Home>
      </Provider>
    </div>
  );
}

export default App;
