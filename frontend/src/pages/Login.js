import React from 'react';

const Login = () => {
  return (
    <>
      <div className='div-center'>
        <div className='content'>
          <h3>Login</h3>
          <hr />
          <form>
            <div className='form-group'>
              <label for='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <label for='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Login
            </button>
            <hr />
            <button type='button' className='btn btn-link'>
              Signup
            </button>
            <button type='button' className='btn btn-link'>
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
