
import { useEffect } from 'react';
import './assets/App.css'
import Routing from './routes/Routing';
import { ToastContainer, toast } from 'react-toastify';

function App() {


  return (
    <div className="App">
      <ToastContainer />
      <Routing />
    </div>
  );
}

export default App;
