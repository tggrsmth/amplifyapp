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
                <label for="invamount">Investment Amount  </label>
                <input type="number" id="invamount" min="1" step="any" required oninvalid="this.setCustomValidity('Investment Amount must have a currency valuee!')"
                oninput="this.setCustomValidity('')"/>
                <br/>
                <br/>
                <label for="invtype">Investment Type  </label>
                <input type="text" id="invtype" required required oninvalid="this.setCustomValidity('Investment Type must be entered!')"
                oninput="this.setCustomValidity('')"/>
                <br/>
                <br/>
                <label for="networth">Total Net Worth  </label>
                <input type="number" id="networth" required min="1" step="any" required oninvalid="this.setCustomValidity('Total Net Worth must have a currency value!')"
                oninput="this.setCustomValidity('')"/>
                <br/>
                <br/>
                 <label for="yearlyinc">User Estimated Yearly Income  </label>
                <input type="number" id="yearlyinc" required min="1" step="any" required oninvalid="this.setCustomValidity('Total Net Worth must have a currency value!')"
                oninput="this.setCustomValidity('')"/>
                <br/>
                <br/>
                <label for="creditscore">User Estimated Credit Score  </label>
                <input type="number" id="creditscore" required min="300" max="850" step="any" required oninvalid="this.setCustomValidity('Estimated Credit Score must be between 300 and 850!')"
                oninput="this.setCustomValidity('')"/>
                <br/>
                <br/>
                <label for="lorumipsem">Lorum Ipsem</label>
                <textarea id="lorumipsem" rows="4" cols="50">
                </textarea>
                <br/>
                <br/>
                <button type="submit" value="Submit">Check Qualification</button>
                </form>
            </div>
        )
    }
}
export default Landing;