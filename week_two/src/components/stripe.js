// import React, {Component} from 'react';
// import {CardElement, injectStripe} from 'react-stripe-elements';
// import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'


// import './stripe.css'



// class CheckoutForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {complete: false};
//     this.submit = this.submit.bind(this);
//   }

  
  
//   async submit(ev) {
//     let {token} = await this.props.stripe.createToken({name: "Name"});
//     let response = await fetch("/charge", {
//       method: "POST",
//       headers: {"Content-Type": "text/plain"},
//       body: token.id
//     });
    
//     if (response.ok) console.log("Purchase Complete!")
//     this.setState({complete: true});
//   }

//   handleChange = event => {
//     alert(event.target.value)
//     console.log(event.target.value)
//   };
  
//   render() {
//     return (
//       <div>
//         <RadioGroup onClick={event => this.handleChange(event)} horizontal>
//           <RadioButton value="100" >
//             100
//           </RadioButton>
//           <ReversedRadioButton value="500">
//             500
//           </ReversedRadioButton>
//           <ReversedRadioButton value="1000">
//             1000
//           </ReversedRadioButton>
//           <ReversedRadioButton value="5000">
//             5000
//           </ReversedRadioButton>
//       </RadioGroup>

//         <div className="checkout">
//           <p>Enter Card Information To Donate!</p>
//           <CardElement />
//           <button className=".stybutton" onClick={this.submit}>Donate!</button>
//         </div>
//     </div>
//     );
//   }
// }

// export default injectStripe(CheckoutForm);

import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';


import './stripe.css'



class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  
  
  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
    
    if (response.ok) console.log("Purchase Complete!")
    this.setState({complete: true});
  }

  handleChange = event => {
    console.log(event.target.value)
  };
  
  render() {
    return (
      <div>

       
          <input type="radio" name="donationAmount" value="100" onClick={event => this.handleChange(event)}/>
            $100
          
          <input type="radio" name="donationAmount" value="500" onClick={event => this.handleChange(event)}/>
            $500
        
          <input type="radio" name="donationAmount" value="1000" onClick={event => this.handleChange(event)}/>
            $1000
          
          <input type="radio" name="donationAmount" value="5000" onClick={event => this.handleChange(event)}/>
            $5000
          
        <div className="checkout">
          <p>Enter Card Information To Donate!</p>
          <CardElement />
          <button className=".stybutton" onClick={this.submit}>Donate!</button>
        </div>
        
    </div>
    );
  }
}

export default injectStripe(CheckoutForm);