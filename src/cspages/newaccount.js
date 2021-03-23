import React from 'react';
import ReactDOM from 'react-dom';

class Landing extends React.Component {
    render() {
        return (
            <div>
                <form>
                <h2>CROWDSTREET</h2>   
                <br/>
                <br/> 
                <h5>Congratulations, you have qualified for an investment!  Now please enter a username and password</h5>
                <br/>
                <h5>and click the 'Create Account' button so your account can be created.</h5>
                <br/>
                <br/>
                <label for="username">Username  </label>
                <input type="email" id="username" min="1" required/>
                <br/>
                <br/>
                <label for="password">Password  </label>
                <input type="password" id="password" minlength="9" required pattern="(?=.*\d)(?=.*\W)"/>
                <br/>
                <br/>   
                <label for="validate">Confirm Password  </label>
                <input type="password" id="validate" minlength="9" required pattern="(?=.*\d)(?=.*\W)"/>
                <br/>
                <br/>  
                <button type="submit" value="Submit">Create Account</button>
                </form>
            </div>
        )
    }
}
export default Landing;