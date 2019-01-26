import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { UserInputInfo, ButtonStyled, StyledRadio, StyledRadioLabel, StyledRadioGroup } from './styled.js'
// import styled from 'styled-components';
// import classNames from 'classnames';

//material-ui
import { withStyles } from '@material-ui/core/styles'
// import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'

import MaskedInput from 'react-text-mask'

import Axios from 'axios'

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

function TextMaskCustom(props) {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={[
        '(',
        /\d/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
}

// const donation = [
//   {
//     value: 100,
//     label: 'Super Donation ($100)',
//   },
//   {
//     value: 200,
//     label: 'Mega Donation ($200) ',
//   },
//   {
//     value: 500,
//     label: 'Supreme Donation ($500)',
//   },
//   {
//     value: 1000,
//     label: 'Omega Donation ($1000)',
//   },
//   {
//     value: 5000,
//     label: 'Ultra Donation ($5000)',
//   },
//   {
//     value: 10000,
//     label: 'Baller Donation ($10000)',
//   },
// ]

// const state = [
//   {
//     value: 'USA_AL',
//     label: 'AL',
//   },

//   {
//     value: 'USA_AK',
//     label: 'AK',
//   },
//   {
//     value: 'USA_AZ',
//     label: 'AZ',
//   },
//   {
//     value: 'USA_AR',
//     label: 'AR',
//   },
//   {
//     value: 'USA_CA',
//     label: 'CA',
//   },
//   {
//     value: 'USA_CO',
//     label: 'CO',
//   },
//   {
//     value: 'USA_CT',
//     label: 'CT',
//   },
//   {
//     value: 'USA_DE',
//     label: 'DE',
//   },
//   {
//     value: 'USA_FL',
//     label: 'FL',
//   },
//   {
//     value: 'USA_GA',
//     label: 'GA',
//   },
//   {
//     value: 'USA_HI',
//     label: 'HI',
//   },
//   {
//     value: 'USA_ID',
//     label: 'ID',
//   },
//   {
//     value: 'USA_IL',
//     label: 'IL',
//   },
//   {
//     value: 'USA_IN',
//     label: 'IN',
//   },
//   {
//     value: 'USA_IA',
//     label: 'IA',
//   },
//   {
//     value: 'USA_KS',
//     label: 'KS',
//   },
//   {
//     value: 'USA_KY',
//     label: 'KY',
//   },
//   {
//     value: 'USA_LA',
//     label: 'LA',
//   },
//   {
//     value: 'USA_ME',
//     label: 'ME',
//   },
//   {
//     value: 'USA_MD',
//     label: 'MD',
//   },
//   {
//     value: 'USA_MA',
//     label: 'MA',
//   },
//   {
//     value: 'USA_MI',
//     label: 'MI',
//   },
//   {
//     value: 'USA_MN',
//     label: 'MN',
//   },
//   {
//     value: 'USA_MS',
//     label: 'MS',
//   },
//   {
//     value: 'USA_MO',
//     label: 'MO',
//   },
//   {
//     value: 'USA_MT',
//     label: 'MT',
//   },
//   {
//     value: 'USA_NE',
//     label: 'NE',
//   },
//   {
//     value: 'USA_NV',
//     label: 'NV',
//   },
//   {
//     value: 'USA_NH',
//     label: 'NH',
//   },
//   {
//     value: 'USA_NJ',
//     label: 'NJ',
//   },
//   {
//     value: 'USA_NM',
//     label: 'NM',
//   },
//   {
//     value: 'USA_NY',
//     label: 'NY',
//   },
//   {
//     value: 'USA_NC',
//     label: 'NC',
//   },
//   {
//     value: 'USA_ND',
//     label: 'ND',
//   },
//   {
//     value: 'USA_OH',
//     label: 'OH',
//   },
//   {
//     value: 'USA_OK',
//     label: 'OK',
//   },
//   {
//     value: 'USA_OR',
//     label: 'OR',
//   },
//   {
//     value: 'USA_PA',
//     label: 'PA',
//   },
//   {
//     value: 'USA_RI',
//     label: 'RI',
//   },
//   {
//     value: 'USA_SC',
//     label: 'SC',
//   },
//   {
//     value: 'USA_SD',
//     label: 'SD',
//   },
//   {
//     value: 'USA_TN',
//     label: 'TN',
//   },
//   {
//     value: 'USA_TX',
//     label: 'TX',
//   },
//   {
//     value: 'USA_UT',
//     label: 'UT',
//   },
//   {
//     value: 'USA_VT',
//     label: 'VT',
//   },
//   {
//     value: 'USA_VA',
//     label: 'VA',
//   },
//   {
//     value: 'USA_WA',
//     label: 'WA',
//   },
//   {
//     value: 'USA_WV',
//     label: 'WV',
//   },
//   {
//     value: 'USA_WI',
//     label: 'WI',
//   },
//   {
//     value: 'USA_WY',
//     label: 'WY',
//   },
// ]

class TextFields extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    age: '',
    number: '(   )    -    ',
    donation: '',
    customDonation: '',
    note: '',
    checkedBox: true,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  // const change = (name, e) => {
  //   e.persist();
  //   handleChange(e);
  //   setFieldTouched(name, true, false);
  // };

  handleSubmit = event => {
    event.preventDefault()

    // const donor = {
    //   firstName: this.state.firstname,
    //   lastName: this.state.lastname,
    //   address1: this.state.address,
    //   city: this.state.city,
    //   postalCode: this.state.zip,
    //   stateProvinceGeoId: this.state.state,
    //   email: this.state.email,
    //   contactNumber: this.state.number,
    //   donation: this.state.donation,
    //   customDonation: this.state.customdonation,
    //   note: this.state.note,
    // }

    const values = {
      firstName: '',
      lastName: '',
      // address: '',
      // city: '',
      // zip: '',
      // state: '',
      // phoneNumber: '',
      // email: '',
    }

    Axios.post(
      `http://localhost:8080/apps/CreditCardApp/ApplicationForm/createCCOSApplication`,
      values
    )
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.res)
      })
  }

  render() {
    const { classes } = this.props

    const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/

    const values = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zip: '',
      state: '',
      phoneNumber: '',
      email: '',
      donation: '' ,
    }

    const validationSchema = Yup.object({
      firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
      address: Yup.string()
        .min(5, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
      city: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
      zip: Yup.string()
        .matches(zipRegex, 'Enter a valid zip (5 numbers only)')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      phoneNumber: Yup.string()
        .matches(
          phoneRegExp,
          'Phone number is not valid "Be sure to check if you put 10 digits, included your area code and excluded any letters"'
        )
        .min(10, 'Not enough numbers!')
        .max(13, 'Too Long!')
        .required('Required'),
    })

    return (
      <div>
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values)
          }}
        >
          {({
            values: {
              firstName,
              lastName,
              address,
              city,
              zip,
              state,
              email,
              phoneNumber,
              donation,
              customDonation,
              note,
              checkedBox,
            },
            errors,
            touched,
            handleChange,
            handleBlur,
            // handleSubmit,
            isValid,
            // isSubmitting,
          }) => (
            <div>
              <Form
                onSubmit={this.handleSubmit}
                className={classes.container}
                noValidate
                autoComplete="on"
              >
                <Tooltip title="Enter first name here please!">
                  <TextField
                    required
                    name="firstName"
                    label="First Name"
                    helperText={touched.firstName ? errors.firstName : ''}
                    error={touched.firstName && Boolean(errors.firstName)}
                    className={classes.textField}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    value={firstName}
                  />
                </Tooltip>
                <Tooltip title="Enter you lastname here please!">
                  <TextField
                    required
                    name="lastName"
                    label="Last Name"
                    helperText={touched.lastName ? errors.lastName : ''}
                    error={touched.lastName && Boolean(errors.lastName)}
                    className={classes.textField}
                    value={lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                  />
                </Tooltip>
                <Tooltip title="Please enter your address here!">
                  <TextField
                    required
                    name="address"
                    label="Address"
                    helperText={touched.address ? errors.address : ''}
                    error={touched.address && Boolean(errors.address)}
                    className={classes.textField}
                    value={address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                  />
                </Tooltip>
                <Tooltip title="Please enter your City here!">
                  <TextField
                    required
                    name="city"
                    label="City"
                    helperText={touched.city ? errors.city : ''}
                    error={touched.city && Boolean(errors.city)}
                    className={classes.textField}
                    value={city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                  />
                </Tooltip>
                <Tooltip title="Please enter you zip here!">
                  <TextField
                    required
                    name="zip"
                    label="Zip"
                    helperText={touched.zip ? errors.zip : ''}
                    error={touched.zip && Boolean(errors.zip)}
                    className={classes.textField}
                    value={zip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                  />
                </Tooltip>
                {/* <Tooltip title='Please select your State!'> */}
                {/* <TextField
          required
          select
          name="state"
          label="State"
          helperText={touched.state ? errors.state : ""}
          error={touched.state && Boolean(errors.state)}
          className={classes.textField}
          value={state}
          onChange={handleChange}
          onBlur={handleBlur}
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
          </TextField> */}
                {/* </Tooltip> */}
                <Tooltip title="Please enter your e-male here!">
                  <TextField
                    required
                    name="email"
                    label="E-mail"
                    type="email"
                    autoComplete="email"
                    helperText={touched.email ? errors.email : ''}
                    error={touched.email && Boolean(errors.email)}
                    className={classes.textField}
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                  />
                </Tooltip>
                <Tooltip title="Please enter your contact number here!">
                  <TextField
                    required
                    id="Phone-Number"
                    name="phoneNumber"
                    label="Contact Number"
                    helperText={touched.phoneNumber ? errors.phoneNumber : ''}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    className={classes.textField}
                    value={phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    inputComponent={TextMaskCustom}
                  />
                </Tooltip>

                {/* <TextField
          required
          name="donation"
          select
          label="Donate"
          helperText={touched.donation ? errors.donation : ""}
          error={touched.donation && Boolean(errors.donation)}
          className={classes.textField}
          value={donation}
          onChange={handleChange}
          onBlur={handleBlur}
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
          </TextField> */}
                {/* </Tooltip> */}
                <Tooltip title="Please enter how much  you would like to donate!">
                  <TextField
                    required
                    name="customDonation"
                    label="Custom Donation"
                    helperText={
                      touched.customDonation ? errors.customDonation : ''
                    }
                    error={
                      touched.customDonation && Boolean(errors.customDonation)
                    }
                    className={classes.textField}
                    value={customDonation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                  />
                </Tooltip>
                <Tooltip title="You can write an option note here!">
                  <TextField
                    name="note"
                    label="Short Note"
                    helperText={touched.note ? errors.note : ''}
                    error={touched.note && Boolean(errors.note)}
                    value={note}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ margin: 8 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Tooltip>
                {/* <UserInputInfo label="hi" /> */}
                <div className={classes.root}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">
                      How much would you like to donate?
                    </FormLabel>
                    <StyledRadioGroup
                      required
                      aria-label="Gender"
                      name="donation"
                      className={classes.group}
                      value={donation}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="50"
                        control={<Radio color='primary' />}
                        label="$50"
                      />
                      <FormControlLabel
                        value="100"
                        control={<Radio color='primary' />}
                        label="$100"
                      />
                      <FormControlLabel
                        value="150"
                        control={<Radio color='primary' />}
                        label="$150"
                      />
                       <FormControlLabel
                        value="200"
                        control={<Radio color='primary' />}
                        label="$200"
                      />
                      <FormControlLabel
                        value="300"
                        control={<Radio color='primary' />}
                        label="$300"
                      />
                      <FormControlLabel
                        value="1000"
                        control={<Radio color='primary' />}
                        label="$1000"
                      />
                    </StyledRadioGroup>
                  </FormControl>
                  <Tooltip title="Check to recieve news letters!">
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkedBox}
                            helperText={
                              touched.checkedBox ? errors.checkedBox : ''
                            }
                            error={
                              touched.checkedBox && Boolean(errors.checkedBox)
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={checkedBox}
                          />
                        }
                        label="Subscribe to our news letter?"
                      />
                    </FormGroup>
                  </Tooltip>
                  <Tooltip title="Click button when you are ready to donate!">
                    <ButtonStyled
                      type="submit"
                      onClick={() => navigate('/thanks')}
                      role="link"
                      tabIndex="0"
                      onKeyUp={this.handleKeyUp}
                      disabled={!isValid}
                      // style={{ margin: 8 }}
                      fullWidth
                    >
                      submit
                    </ButtonStyled>
                  </Tooltip>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    )
  }
}
TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TextFields)
