import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { Form } from 'formik';
// import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MaskedInput from 'react-text-mask'

import Axios from 'axios';

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
});

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={ref => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }
  
  TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };

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
    value: 'USA_AL',
    label: 'AL',
  },

  {
    value: 'USA_AK',
    label: 'AK',
  },
  {
    value: 'USA_AZ',
    label: 'AZ',
  },
  {
    value: 'USA_AR',
    label: 'AR',
  },
  {
    value: 'USA_CA',
    label: 'CA',
  },
  {
    value: 'USA_CO',
    label: 'CO',
  },
  {
    value: 'USA_CT',
    label: 'CT',
  },
  {
    value: 'USA_DE',
    label: 'DE',
  },
  {
    value: 'USA_FL',
    label: 'FL',
  },
  {
    value: 'USA_GA',
    label: 'GA',
  },
  {
    value: 'USA_HI',
    label: 'HI',
  },
  {
    value: 'USA_ID',
    label: 'ID',
  },
  {
    value: 'USA_IL',
    label: 'IL',
  },
  {
    value: 'USA_IN',
    label: 'IN',
  },
  {
    value: 'USA_IA',
    label: 'IA',
  },
  {
    value: 'USA_KS',
    label: 'KS',
  },
  {
    value: 'USA_KY',
    label: 'KY',
  },
  {
    value: 'USA_LA',
    label: 'LA',
  },
  {
    value: 'USA_ME',
    label: 'ME',
  },
  {
    value: 'USA_MD',
    label: 'MD',
  },
  {
    value: 'USA_MA',
    label: 'MA',
  },
  {
    value: 'USA_MI',
    label: 'MI',
  },
  {
    value: 'USA_MN',
    label: 'MN',
  },
  {
    value: 'USA_MS',
    label: 'MS',
  },
  {
    value: 'USA_MO',
    label: 'MO',
  },
  {
    value: 'USA_MT',
    label: 'MT',
  },
  {
    value: 'USA_NE',
    label: 'NE',
  },
  {
    value: 'USA_NV',
    label: 'NV',
  },
  {
    value: 'USA_NH',
    label: 'NH',
  },
  {
    value: 'USA_NJ',
    label: 'NJ',
  },
  {
    value: 'USA_NM',
    label: 'NM',
  },
  {
    value: 'USA_NY',
    label: 'NY',
  },
  {
    value: 'USA_NC',
    label: 'NC',
  },
  {
    value: 'USA_ND',
    label: 'ND',
  },
  {
    value: 'USA_OH',
    label: 'OH',
  },
  {
    value: 'USA_OK',
    label: 'OK',
  },
  {
    value: 'USA_OR',
    label: 'OR',
  },
  {
    value: 'USA_PA',
    label: 'PA',
  },
  {
    value: 'USA_RI',
    label: 'RI',
  },
  {
    value: 'USA_SC',
    label: 'SC',
  },
  {
    value: 'USA_SD',
    label: 'SD',
  },
  {
    value: 'USA_TN',
    label: 'TN',
  },
  {
    value: 'USA_TX',
    label: 'TX',
  },
  {
    value: 'USA_UT',
    label: 'UT',
  },
  {
    value: 'USA_VT',
    label: 'VT',
  },
  {
    value: 'USA_VA',
    label: 'VA',
  },
  {
    value: 'USA_WA',
    label: 'WA',
  },
  {
    value: 'USA_WV',
    label: 'WV',
  },
  {
    value: 'USA_WI',
    label: 'WI',
  },
  {
    value: 'USA_WY',
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
    number:'(   )    -    ',
    donation: '',
    customdonation: '',
    note: '',
    checkedA: true,
  }
  


handleChange = name => event => {
  this.setState({ [name]: event.target.checked });
}
  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit = event => {
      event.preventDefault();


      const doner ={
        firstName: this.state.firstname ,
        lastName: this.state.lastname ,
        address1: this.state.address ,
        city: this.state.city ,
        postalCode: this.state.zip ,
        stateProvinceGeoId: this.state.state ,
        // email: this.state.email,
        contactNumber: this.state.number,
        // donation: this.state.donation,
        // customDonation: this.state.customdonation,
        // note: this.state.note,
  };

  Axios.post(`http://localhost:8080/apps/CreditCardApp/ApplicationForm/createCCOSApplication` , doner)
    .then(res =>{
        console.log(res)
        console.log(res.data);
    })
    .catch(error =>{
        console.log(error.res)
    })

}

  

  render() {
    const { classes } = this.props

    return (
      <Form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
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
          id="address"
          label="Address"
          className={classes.textField}
          value={this.state.address}
          onChange={this.handleChange('address')}
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
            id="zip"
            label="Zip"
            className={classes.textField}
            value={this.state.zip}
            onChange={this.handleChange('zip')}
            margin="normal"
          />
        <TextField
          required
          select
          id="state"
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
          id="email"
          label="E-mail"
          type="email"
          name="email"
          autoComplete="email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <div className={classes.container}>
        <FormControl className={classes.FormControl}/>
        <InputLabel htmlFor="Phone-number">Number</InputLabel>
           <Input
          required
          id="Phone-number"
          value={this.state.number}
          onChange={this.handleChange('number')}
          inputComponent={TextMaskCustom}
        />
        </div>
        <FormControl/>
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
        <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Subscribe to our news letter?"
        />
        </FormGroup>
        <button type='submit' onClick={ () => navigate('/thanks')} role="link" tabIndex="0" onKeyUp={this.handleKeyUp}>submit</button>
      </Form>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TextFields)
