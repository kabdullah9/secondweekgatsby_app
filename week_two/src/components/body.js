import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
  ];

class TextFields extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    address:'',
    city:'',
    state:'',
    zip:'',
    email:'',
    age: '',
    donation: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="first-name"
          label="First Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          id="last-name"
          label="Last Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          id="city-name"
          label="City"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          id="first-name"
          label="State"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
        required
          id="first-name"
          label="E-mail"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
           <TextField
           required
          id="Age"
          label="Age"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
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
          item xs={6}
        >
          {donation.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="Special-words"
          label="Special Note"
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
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
