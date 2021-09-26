import React from 'react';
import ReactDOM from 'react-dom';

class Account extends React.Component {
	constructor() {
        super();
	this.state = {
	  input: {},
	  error: {}
        };
	this.handleChange = this.handleChange.bind(this);	
	this.handleSubmit = this.handleSubmit.bind(this);
       }
	handleChange(event){
	      let input = this.state.input;
	      input[event.target.name] = event.target.value;

	      this.setState({
		      input
		   });
	}


        handleSubmit(event){
		let input = this.state.input;
		let errors = {};
		event.preventDefault();
		console.log(input["password"] + " " + input["confirm"]);
		if(input["password"]!=input["confirm"]){
			console.log("Error during validation");
			errors["password"]="Password and Confirm Password don't match";
			this.setState({
				errors:errors
			});
			alert('Password and Confirm passwords don' + 't match, please correct');
		} else {
		       console.log("Passed field validation");	
		       //let input = {};
		       //input["password"]="";
		       //input["confirm"]="";
		       //this.setState({input:input});
		       alert('New Account is created');	
		}	
      	
       }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h2>CROWDSTREET</h2>   
                <br/>
                <br/> 
                <h5>Congratulations, you have qualified for an investment!</h5>
                <h5>Now please enter a username, password, and confirm password then click the 'Create Account' button so your account can be created.</h5>
                <br/>
                <br/>
                <label for="username">Username  </label>
                <input type="email" id="username" min="1" required/>
                <br/>
                <br/>
                <label for="password">Password  </label>
                <input name="password" type="password" id="password" pattern="((?=.*\d)|(?=.*[\W_])).{9,}" title="Password requires a number or special character(9 characters minimum)" value={this.state.input.password} onChange={this.handleChange}  required/>
                <br/>
                <br/>   
                <label for="confirm">Confirm Password  </label>
                <input name="confirm" type="password" id="confirm" value={this.state.input.confirm} onChange={this.handleChange}/>
                <br/>
                <br/>  
                <button type="submit" value="Submit">Create Account</button>
                </form>
            </div>
        )
    }
}
export default Account;
