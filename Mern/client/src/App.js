import {GoogleOAuthProvider} from '@react-oauth/google'
import Messenger from "./components/Messenger";

function App() {
  const clientId = '763202011488-otmrj2ds4q4omg2pu6bs3n6gkc1rr2aq.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider  clientId={clientId}>
    <div>
      <Messenger />
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
