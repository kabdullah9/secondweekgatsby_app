import React, { Component } from 'react'
import "./about.css"

export class About extends Component {
  render() {
    return (
      <div>
        <h2>About us!</h2>

        <img src="http://glendaledailyplanet.com/clients/glendaledailyplanet/6-26-2017-7-06-00-AM-9934441.JPG" alt=''/>

        <p>
          {' '}
          (RNS) Sikhism is the world’s fifth-largest religion, a monotheistic
          faith founded in the Punjab region of India about 500 years ago. Most
          of the world’s 25 million Sikhs live in India, but more than 500,000
          make the U.S. their home.
        </p>

        <p>Here are some facts about what Sikhs believe and Sikh culture.</p>

        <p>
          {' '}
          Sikhs believe everyone, men and women, has equal status before God,
          who created the universe and all faiths. Human beings are encouraged
          to develop their moral character through generosity, humility and
          self-reliance.
        </p>

        <p>
          {' '}
          Sikh means “seeker of knowledge” in Punjabi, the language of India’s
          Punjab region and of Sikhism’s holy books.
        </p>

        <p>
          Sikhism was divinely revealed to its first guru, or prophet, Guru
          Nanak, who died in 1539. Nine gurus followed him, the last of which,
          Guru Gobind Singh, died in 1708.
        </p>

        <p>
          Sikhs keep their hair uncut, or natural, as a sign of living in
          harmony with God. Men — and some women — cover their hair with turbans
          as a mark of their faith. Boys start wearing a patka over their hair
          when it is long enough to tie into a topknot.
        </p>
      </div>
    )
  }
}

export default About
