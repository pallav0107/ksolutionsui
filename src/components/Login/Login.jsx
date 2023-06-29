
import React, {  useState } from 'react'
import { Box, Button, Link } from '@material-ui/core'
import { Field, Form, reduxForm } from 'redux-form';
import { auth } from '../../firebase';
import '../Login/Login.css';
import createBrowserHistory  from '../../history.js';
import TextField from '../Common/TextField';
import loginValidation from '../Validation/loginValidation';

const Login = props => {
    const { handleSubmit, pristine, submitting } = props
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const signIn = (e) =>
    {
        e.PreventDefault();

    }
    const login = (e) =>
    {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
        
          if(auth)
          {
            createBrowserHistory.push('/quotes');
          }
        }
        ).catch(error => alert(error.message));
    }
    return (
      <Box className='login__Container'>
          <Link to='/' >
              <img></img>
          </Link>
          <Box >
            <h1>Sign In</h1>
            <Form onSubmit={handleSubmit}>
            <Box>
                <Field name="userName" component={TextField} type="text" label="Email" />
            </Box>
            <Box>
                <Field name="password" component={TextField}  type="password" label="Password" />
            </Box>
            <Box marginTop= '20px'>
              <Button type="submit" disabled={pristine || submitting}>
                  Login
              </Button>
                
            </Box>
            </Form>
         </Box>
      </Box>
      
    )
  }
  export default reduxForm({
    form: 'editLogin' ,
    loginValidation,
  })(Login)
  //export default Login;