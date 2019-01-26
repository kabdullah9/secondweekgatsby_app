import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Form = (props) => {


    const {
        values: { name, email },
        errors,
        touched,
        // handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
        } = props;
        
        
        const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
        };

  return (
   <form onSubmit={() => {alert("submitted");}}>
     <TextField
       id="name"
       name="name"
       helperText={touched.name ? errors.name : ""}
       error={touched.name && Boolean(errors.name)}
       label="Name"
       value={name}
       onChange={change.bind(null, "name")}
       fullWidth

     />
     <TextField
       id="email"
       name="email"
       helperText={touched.email ? errors.email : ""}
       error={touched.email && Boolean(errors.email)}
       label="Email"
       value={email}
       onChange= {change.bind(null, "email")}
       fullWidth
     />
     <TextField
       id="password"
       name="password"
       label="Password"
       fullWidth
       type="password"
     />
     <TextField
       id="confirmPassword"
       name="confirmPassword"
       label="Confirm Password"
       fullWidth
       type="password"
     />
     <Button
       type="submit"
       fullWidth
       variant="contained"
       color="primary"
       disabled={!isValid}
     >
       Submit
     </Button>
   </form>
 );
};