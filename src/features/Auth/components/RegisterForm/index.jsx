import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import fireFly from 'firefly.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './styles.scss';

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('Please enter your full name.')
    .test('should has at least two words', 'Please enter at least two words.', (value) => {
      return value.split(' ').length >= 2;
    }),

  email: yup
    .string()
    .required('Please enter your email.')
    .email('Please enter a valid email.'),

  password: yup
    .string()
    .required('Please enter your password.')
    .min(6, 'Please enter at least 6 character.'),

  retypePassword: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Password does not match'),
});

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 10px',
  },

  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: 'center',
  },

  avatar: {
    margin: '0 auto',
    width: '50px',
    height: '50px',
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
    color: '#f2f2f2',
    backgroundColor: '#2196f3',
    '&:hover': {
      backgroundColor: '#217fcc',
    },
  },
}));

function RegisterForm(props) {
  const classes = useStyles();

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log('TODO FORM', values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <div className={classes.root}>
      <div className={classes.avatar}>
        <img src={fireFly} alt="logo" />
      </div>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          fullWidth
          variant="contained"
          color="primary"
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
