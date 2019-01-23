import React, { Component } from 'react'
import './footer.css'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="sticky"> © {new Date().getFullYear()}, learn more about 
            {` `}
            <a href="https://www.sikhnet.com/pages/who-are-sikhs-what-is-sikhism">Sikhism</a></footer>      
        </div>
    )
  }
}

export default Footer
