import React from 'react';
import ReactDOM from 'react-dom';
import Disqualify from './disqualification.js';

class Landing extends React.Component {
        constructor() {
        super();
	this.state = {
	  input: {},
	  error: {},
	  isSubmitted: false
        };
	this.handleChange = this.handleChange.bind(this);	
	this.handleSubmit = this.mockFetch.bind(this);
       }
	handleChange(event){
	      let input = this.state.input;
	      input[event.target.name] = event.target.value;

	      this.setState({
		      input
		   });
	}

	
        mockFetch(event){
		let input = this.state.input;
		let errors = {};
		event.preventDefault();
		console.log(input["invamount"] + " " + input["networth"] + " " + input["yearlyinc"] + " " + input["creditscore"]);
		//mock url
		const URL = "https://www.mockapi.com/qualify";
		
                
		      if (URL=="https://www.mockapi.com/qualify"){
		           return new Promise((resolve, reject) => {
			    if  (input["invamount"]/5 <= input["yearlyinc"] && input["creditscore"]>=600 &&  input["invamount"]*.03<=input["networth"]){
				console.log("got here");    
				this.setState({isSubmitted: true});   
				resolve({status: 401, text: () => Promise.resolve(JSON.stringify({ message: "Disqualified" })) });
			    } else if (input["invamount"]>9000000) {
                                resolve({status: 400, text: () => Promise.resolve(JSON.stringify({ message: "Bad Request" })) });
				return;
			    } else {
				resolve({status: 200, text: () => Promise.resolve(JSON.stringify({ message: "Successful" })) });
				return;
			    }
			   });
			      
		      } else if (URL == "<real url>"){
				//perform api fetch here using real "Qualify" api
				
		      } else {
				//code to deal with an invalid fetch api url
			
		      }
	}		


    render() {
        return (
            <div>
                <form onSubmit={this.mockFetch}>
                <h2>CROWDSTREET</h2>   
                <br/>
                <br/> 
                <label for="invamount">Investment Amount  </label>
                <input type="number" name="invamount" id="invamount" min="1" step="any" required onInvalid="this.setCustomValidity('Investment Amount must have a currency valuee!')" value={this.state.input.invamount} onChange={this.handleChange}/>
                <br/>
                <br/>
                <label for="invtype">Investment Type  </label>
                <input type="text" name="invtype" id="invtype" required required onInvalid="this.setCustomValidity('Investment Type must be entered!')"/>
                <br/>
                <br/>
                <label for="networth">Total Net Worth  </label>
                <input type="number" name="networth" id="networth" required min="1" step="any" required onInvalid="this.setCustomValidity('Total Net Worth must have a currency value!')" value={this.state.input.networth} onChange={this.handleChange}/>
                <br/>
                <br/>
                 <label for="yearlyinc">User Estimated Yearly Income  </label>
                <input type="number" name="yearlyinc" id="yearlyinc" required min="1" step="any" required onInvalid="this.setCustomValidity('Total Net Worth must have a currency value!')" value={this.state.input.yearlyinc} onChange={this.handleChange}/>
                <br/>
                <br/>
                <label for="creditscore">User Estimated Credit Score  </label>
                <input type="number" name="creditscore" id="creditscore" required min="300" max="850" step="any" required onInvalid="this.setCustomValidity('Estimated Credit Score must be between 300 and 850!')" value={this.state.input.creditscore} onChange={this.handleChange}/>
                <br/>
                <br/>
                <label for="lorumipsem">Lorum Ipsem</label>
                <textarea id="lorumipsem" rows="4" cols="50">
                </textarea>
                <br/>
                <br/>
                <button type="submit" value="Submit">Check Qualification</button>
                </form>
		{this.state.isSubmitted && <Disqualify/>}
            </div>
        )
    }
}
export default Landing;
