import { yupResolver } from '@hookform/resolvers/yup';
import { Button, LinearProgress, Typography } from '@material-ui/core';
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
  identifier: yup
    .string()
    .required('Please enter your email.')
    .email('Please enter a valid email.'),

  password: yup.string().required('Please enter your password.'),
});

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
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

  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

function LoginForm(props) {
  const classes = useStyles();

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    console.log('TODO FORM', values);
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <div className={classes.avatar}>
        <img src={fireFly} alt="logo" />
      </div>

      <Typography className={classes.title} component="h3" variant="h5">
        Sign In
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
