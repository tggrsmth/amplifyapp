import logo from './logo.svg';
import './App.css';
import Landing from './cspages/landing.js';
import Account from './cspages/newaccount.js'; 
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
         <Landing/>
    </div>	  
  );
}

//export default withAuthenticator(App);
export default App;
