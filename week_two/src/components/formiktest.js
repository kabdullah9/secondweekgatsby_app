import React, {Component} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './formiktest.css'



export class Basic extends Component {
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
        <Form>
            <div className='formdiv'>
          <Field name="firstName" placeholder='First Name' />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          </div>
          <Field name="lastName" placeholder='Last Name' />
          {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
          ) : null}
          <Field name="address" placeholder='Address' />
          {errors.address && touched.address ? (
            <div>{errors.address}</div>
          ) : null}
          <Field name="city" placeholder='City' />
          {errors.city && touched.city ? (
            <div>{errors.city}</div>
          ) : null}
          <Field name="zip" placeholder='Zip' />
          {errors.zip && touched.zip ? (
            <div>{errors.zip}</div>
          ) : null}
          <Field name="state" placeholder='State' />
          {errors.state && touched.state ? (
            <div>{errors.state}</div>
          ) : null}
          <Field name="phoneNumber" placeholder='Phone Number' />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
          <Field name="email" type="email" placeholder='E-mail' />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)
}
}
export default Basic;
