import styled from 'styled-components';
import { Field } from 'formik';
import {TextField, Button, Radio, RadioGroup , FormControlLabel} from '@material-ui/core';

export const StyledField = styled(Field)`
  flex-direction: row;
  border: solid royalblue 3px;
  border-radius: 25px;
  width: 20vw;
  flex-wrap: wrap;
`       
// Material UI components styling
export const UserInputInfo = styled(TextField)`
 background-color: orange;
 border-radius: 26px;
`

export const ButtonStyled = styled(Button)`
  text-align : center;
  padding: 5px;
  background-color: green;
  float: right ;
  `
  // regular elements

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`
export const Labeler = styled.label`
font-size: 20px;
font-weight: bold ;
`

export const StyledErrors = styled.div`
  color: red;
`

export const RadioLabel = styled.label`
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

export const StyledRadioLabel = styled(FormControlLabel)`
  /* display: inline-block;
  width: 50px;
  padding: 10px;
  border: solid 2px #ccc;
  transition: all 0.3s;
  background-color:white;
  & :hover  {
    color: green;
  }
  text-align: center; */
`
export const StyledRadioGroup = styled(RadioGroup)`
  && {
      display: flex;
      flex-direction: row;
    }
 `

 export const StyledRadio = styled(Radio).attrs({ type: 'radio' })`
 /* && {
     display: none;
    } */
 `
//  export const StyledRadio = styled(Radio).attrs({ type: 'radio' })`
 
//  &&{
//     border: solid 2px green;
//     background: ${props => props.checked ? 'salmon' : 'papayawhip'}
//     }
//  `

