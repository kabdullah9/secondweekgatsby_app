import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
})

const donation = [
  {
    value: 100,
    label: 'Super Donation ($100)',
  },
  {
    value: 200,
    label: 'Mega Donation ($200) ',
  },
  {
    value: 500,
    label: 'Supreme Donation ($500)',
  },
  {
    value: 1000,
    label: 'Omega Donation ($1000)',
  },
  {
    value: 5000,
    label: 'Ultra Donation ($5000)',
  },
  {
    value: 10000,
    label: 'Baller Donation ($10000)',
  },
]

const state = [
  {
    value: 'Alabama - AL',
    label: 'AL',
  },

  {
    value: 'Alaska - AK',
    label: 'AK',
  },
  {
    value: 'Arizona - AZ',
    label: 'AZ',
  },
  {
    value: 'Arkansas - AR',
    label: 'AR',
  },
  {
    value: 'California - CA',
    label: 'CA',
  },
  {
    value: 'Colorado - CO',
    label: 'CO',
  },
  {
    value: 'Connecticut - CT',
    label: 'CT',
  },
  {
    value: 'Delaware - DE',
    label: 'DE',
  },
  {
    value: 'Florida - FL',
    label: 'FL',
  },
  {
    value: 'Georgia - GA',
    label: 'GA',
  },
  {
    value: 'Hawaii - HI',
    label: 'HI',
  },
  {
    value: 'Idaho - ID',
    label: 'ID',
  },
  {
    value: 'Illinois - IL',
    label: 'IL',
  },
  {
    value: 'Indiana - IN',
    label: 'IN',
  },
  {
    value: 'Iowa - IA',
    label: 'IA',
  },
  {
    value: 'Kansas - KS',
    label: 'KS',
  },
  {
    value: 'Kentucky - KY',
    label: 'KY',
  },
  {
    value: 'Louisiana - LA',
    label: 'LA',
  },
  {
    value: 'Maine - ME',
    label: 'ME',
  },
  {
    value: 'Maryland - MD',
    label: 'MD',
  },
  {
    value: 'Massachusetts - MA',
    label: 'MA',
  },
  {
    value: 'Michigan - MI',
    label: 'MI',
  },
  {
    value: 'Minnesota - MN',
    label: 'MN',
  },
  {
    value: 'Mississippi - MS',
    label: 'MS',
  },
  {
    value: 'Missouri - MO',
    label: 'MO',
  },
  {
    value: 'Montana - MT',
    label: 'MT',
  },
  {
    value: 'Nebraska - NE',
    label: 'NE',
  },
  {
    value: 'Nevada - NV',
    label: 'NV',
  },
  {
    value: 'New Hampshire - NH',
    label: 'NH',
  },
  {
    value: 'New Jersey - NJ',
    label: 'NJ',
  },
  {
    value: 'New Mexico - NM',
    label: 'NM',
  },
  {
    value: 'New York - NY',
    label: 'NY',
  },
  {
    value: 'North Carolina - NC',
    label: 'NC',
  },
  {
    value: 'North Dakota - ND',
    label: 'ND',
  },
  {
    value: 'Ohio - OH',
    label: 'OH',
  },
  {
    value: 'Oklahoma - OK',
    label: 'OK',
  },
  {
    value: 'Oregon - OR',
    label: 'OR',
  },
  {
    value: 'Pennsylvania - PA',
    label: 'PA',
  },
  {
    value: 'Rhode Island - RI',
    label: 'RI',
  },
  {
    value: 'South Carolina - SC',
    label: 'SC',
  },
  {
    value: 'South Dakota - SD',
    label: 'SD',
  },
  {
    value: 'Tennessee - TN',
    label: 'TN',
  },
  {
    value: 'Texas - TX',
    label: 'TX',
  },
  {
    value: 'Utah - UT',
    label: 'UT',
  },
  {
    value: 'Vermont - VT',
    label: 'VT',
  },
  {
    value: 'Virginia - VA',
    label: 'VA',
  },
  {
    value: 'Washington - WA',
    label: 'WA',
  },
  {
    value: 'West Virginia - WV',
    label: 'WV',
  },
  {
    value: 'Wisconsin - WI',
    label: 'WI',
  },
  {
    value: 'Wyoming - WY',
    label: 'WY',
  },
]

class TextFields extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    age: '',
    donation: '',
    customdonation: '',
    note: '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="first-name"
          label="First Name"
          className={classes.textField}
          value={this.state.firstname}
          onChange={this.handleChange('firstname')}
          margin="normal"
        />
        <TextField
          required
          id="last-name"
          label="Last Name"
          className={classes.textField}
          value={this.state.lastname}
          onChange={this.handleChange('lastname')}
          margin="normal"
        />
        <TextField
          required
          id="city-name"
          label="City"
          className={classes.textField}
          value={this.state.city}
          onChange={this.handleChange('city')}
          margin="normal"
        />
        <TextField
          required
          select
          id="first-name"
          label="State"
          className={classes.textField}
          value={this.state.state}
          onChange={this.handleChange('state')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {state.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="first-name"
          label="E-mail"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <TextField
          required
          id="Age"
          label="Age"
          className={classes.textField}
          value={this.state.age}
          onChange={this.handleChange('age')}
          margin="normal"
        />

        <TextField
          required
          id="select-donation"
          select
          label="Donate"
          className={classes.textField}
          value={this.state.donation}
          onChange={this.handleChange('donation')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select your donation level!"
          margin="normal"
        >
          {donation.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="Custom-donation"
          label="Custom Donation"
          className={classes.textField}
          value={this.state.customdonation}
          onChange={this.handleChange('customdonation')}
          margin="normal"
        />
        <TextField
          id="Special-words"
          label="Short Note"
          value={this.state.note}
          onChange={this.handleChange('note')}
          style={{ margin: 8 }}
          placeholder=""
          helperText="Say what is in your heart! (optionl)"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TextFields)
