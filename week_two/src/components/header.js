import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faCheck } from '@fortawesome/free-solid-svg-icons'



import './header.css'

export class  Header extends Component {
  render() {
    library.add(faLock, faCheck)
    return (
      <header>
       <div  className="icon"><span className="fa-layers fa-fw"> 
  <FontAwesomeIcon  icon="lock" color="green" size="2x"/>
  <FontAwesomeIcon icon="check" inverse transform="shrink-6" />
</span></div>
        <h1>Help A Nation Make  A donation!</h1>
      </header>
    )
  }
}

export default Header

