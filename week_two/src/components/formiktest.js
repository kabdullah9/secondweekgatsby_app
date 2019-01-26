import React, {Component } from 'react';
import { Formik, Form , Field } from 'formik';
import * as Yup from 'yup';
import './formiktest.css';
import styled from 'styled-components';


// Radio Display 

// const BoxedLabel = Styled.div`
//   display: inline-block;
//   width: 200px;
//   padding: 10px;
//   border: solid 2px #ccc;
//   transition: all 0.3s;
// `

// const BoxedField = styled(Field)`
//   display: none;
// `

// .boxed input[type="radio"]:checked + label {
//   border: solid 2px green;
// }

// Formik components styling

const StyledField = styled(Field)`
  flex-direction: row;
  border: solid royalblue 3px;
  border-radius: 25px;
  width: 20vw;
  flex-wrap: wrap;
`
// Material UI components styling


// regular elements
const ButtonContainer = styled.div`
  text-align : center;
  padding: 5px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`
const Labeler = styled.label`
font-size: 20px;
font-weight: bold ;
`

const StyledErrors = styled.div`
  color: red;
`

const RadioLabel = styled.label`
  background-color: blue;
  color: white;
  width: 50px;
  border-radius: 50px;
  text-align: center;
  display: inline-block;
  padding: 10px;
  margin: 5px;
  z-index: 1;
`

const Radio = styled(Field)`
  margin-right:-2%;
`

// const RadioWrapper = styled.div`

// `

export class Basic extends Component {
  
// constructor() {
//   super();

  state = { donationAmount: '' 
};

//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }

testingClick = () => {
  console.log('works!')
}

handleRadioChange = event =>
this.setState({ donationAmount: event.target.value })

handleSubmit(event) {
  event.preventDefault();
  
  alert(`You donated ${this.state.donationAmount}.`);
}
  render() {
    const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/
    
    
    const SignupSchema = Yup.object().shape({
      firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
      lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
      address: Yup.string()
      .min(5, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
      city: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
      zip: Yup.string()
      .matches(zipRegex, 'Enter a valid zip (5 numbers only)')
      .required('Required'),
      phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid "Be sure to check if you put 10 digits, included your area code and excluded any letters"')
      .max(13, 'Too Long!')
      .required('Required'),
      email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    });
    return (
      <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address:'',
        city:'',
        zip:'',
        state:'',
        phoneNumber:'',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
      >

      {({ errors, touched }) => (
      <div>
        <Form onSubmit={this.handleSubmit}>
          
          <InputWrapper>
            <Labeler>First Name</Labeler>
            <StyledField name="firstName" placeholder='John'/>
            {errors.firstName && touched.firstName ? (<StyledErrors>{errors.firstName}</StyledErrors>) : null}
          </InputWrapper>
          
          <InputWrapper>
            <Labeler>Last Name</Labeler>
            <StyledField name="lastName" placeholder='Snow' />
            {errors.lastName && touched.lastName ? (<StyledErrors>{errors.lastName}</StyledErrors>) : null}
          </InputWrapper>

          <InputWrapper>
            <Labeler>Address</Labeler>
            <StyledField name="address" placeholder='123 a st' />
            {errors.address && touched.address ? (<StyledErrors>{errors.address}</StyledErrors>) : null}
          </InputWrapper> 

          <InputWrapper>
            <Labeler>City</Labeler>
            <StyledField name="city" placeholder='San Diego' />
            {errors.city && touched.city ? (<StyledErrors>{errors.city}</StyledErrors>) : null}
          </InputWrapper>

          <InputWrapper>
            <Labeler>Zip</Labeler>
            <StyledField name="zip" placeholder='54321' />
            {errors.zip && touched.zip ? (<StyledErrors>{errors.zip}</StyledErrors>) : null}
          </InputWrapper>

          <InputWrapper>
            <Labeler>State</Labeler>
            <StyledField name="state" placeholder='CA' />
            {errors.state && touched.state ? (<StyledErrors>{errors.state}</StyledErrors>) : null}
          </InputWrapper>

          <InputWrapper>
            <Labeler>Phone Number</Labeler>
            <StyledField name="phoneNumber" placeholder='619-555-5555' />
            {errors.phoneNumber && touched.phoneNumber ? (<StyledErrors>{errors.phoneNumber}</StyledErrors>) : null}
          </InputWrapper>

          <InputWrapper>
            <Labeler>E-mail</Labeler>
            <StyledField name="email" type="email" placeholder='John.Snow@got.com' />
            {errors.email && touched.email ? <StyledErrors>{errors.email}</StyledErrors> : null}
          </InputWrapper>

         
       
            <div>
              <Radio type='radio' value='50' checked={this.state.donationAmount === "50"} onChange={this.handleRadioChange} />
              <RadioLabel onClick={this.testingClick}>$50</RadioLabel>
            </div>

            <div>
              <Radio type='radio' value='75' checked={this.state.donationAmount === "75"} onChange={this.handleRadioChange}/>
              <RadioLabel onClick={this.testingClick}>$75</RadioLabel>
            </div>
              

            
             <Radio type='radio' value='100' checked={this.state.donationAmount === "100"} onChange={this.handleRadioChange}/>
          
          
            
              <Radio type='radio' value='200' checked={this.state.donationAmount === "200"} onChange={this.handleRadioChange}/>
            
          
            
              <Radio type='radio' value='500' checked={this.state.donationAmount === "500"} onChange={this.handleRadioChange}/>
            
          
          
              <Radio type='radio' value='1000' checked={this.state.donationAmount === "1000"} onChange={this.handleRadioChange}/>
            

       
          
          <ButtonContainer>
            <button type="submit">Submit</button>
          </ButtonContainer>

        </Form>
      </div>
      )}
    </Formik>
  </div>
)
}
}
export default Basic;
