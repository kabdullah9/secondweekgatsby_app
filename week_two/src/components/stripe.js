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
  
    if (response.ok) console.log("Purchase Complete!")  }

  render() {
    return (
      <div className="checkout">
        <p>Enter Card Information To Donate!</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);