import Register from './register';
import axios from "axios";

function App() {
  
  axios.defaults.baseUrl = "https://localhost:4040";
  axios.defaults.withCredentials = true;

  return (
   <Register/>
  )
}

export default App
