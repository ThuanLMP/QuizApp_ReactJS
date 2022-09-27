
import { useEffect } from 'react';
import loginApi from './api/loginApi';
import './assets/App.css'
import Routing from './routes/Routing';


function App() {

  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const response = await loginApi.post();
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchLogin()
  }, [])
  return (
    <div className="App">

      <Routing />
    </div>
  );
}

export default App;
