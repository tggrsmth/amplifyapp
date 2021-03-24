import logo from './logo.svg';
import './App.css';
import Landing from  './cspages/landing.js';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
         <Landing/>
	 <AmplifySignOut />
    </div>	  
  );
}

export default withAuthenticator(App);
