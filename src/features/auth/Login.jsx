import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { globalViewStates } from 'constants/index';
import LoginHeader from './LoginHeader';
import * as Toast from 'components/toast/Toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logUserIn } from './io';
import RequiredField from 'components/toolbox/RequiredField';
import { changeUserRole } from 'redux/actions/userActions';
import { connect } from 'react-redux';

const Login = ({ changeUserRole, ...props }) => {
  const [viewState, setViewState] = useState(globalViewStates.DEFAULT);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrorModel, setFormErrorModel] = useState({
    email: false,
    password: false
  });

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const obj = {
      email: email.trim() === '',
      password: password.trim() === ''
    };

    setFormErrorModel(obj);

    if (!email || !password) {
      Toast.error('Please fill all required areas.');
      return;
    }

    const sanitizedEmail = email.trim();
    const atSign = email.includes('@');

    if (!sanitizedEmail || !atSign) {
      Toast.error('Please provide a valid email');
      return;
    }

    onFormRequest();
  };

  const onFormRequest = async () => {
    try {
      const { success, payload } = await logUserIn(email, password);

      console.log('payload');
      console.log(payload);

      if (!success) {
        Toast.error('Please check your email and password.');
        return;
      } else {
        const activeUser = {user: email }
        changeUserRole(activeUser);
        Toast.success('I have added the token to sessionStorage. You can check the sessionStorage');
        sessionStorage.setItem('userToken', payload);

        Toast.success('You are being redirected to question 6');
        setTimeout(() => {
          setViewState(globalViewStates.REDIRECT);
        }, 3000);
      }
    } catch (ex) {
      Toast.error('There was a problem. Please try again later.');
    }
  };

  if (viewState === globalViewStates.REDIRECT) {
    return <Navigate to="/question6" />;
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md m-5 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <LoginHeader title={'Sign In'} description={'Welcome! Please sign in to continue.'} />

      <div className="grid grid-cols-1 gap-y-3">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
            Email *
          </label>

          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="email"
              type="email"
              placeholder=""
              value={email}
              onChange={(onChange) => setEmail(onChange.target.value.trim())}
              autoFocus
              required
              className="input-main"
            />
          </div>

          {formErrorModel.email && <RequiredField />}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
            Password *
          </label>

          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="password"
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
              className="input-main"
            />
          </div>

          {formErrorModel.password && <RequiredField />}
        </div>

        <span className="block w-full rounded-md shadow-sm">
          <button className="btn-main" onClick={onFormSubmit}>
            Sign In
          </button>
        </span>
      </div>

      <div className="relative flex items-center py-8">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 flex-shrink text-sm text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <span className="block w-full rounded-md shadow-sm">
        <Link className="btn-main-outline !w-full" to="/question4">
          Sign Up
        </Link>
      </span>
    </div>
  );
};
  
function mapStateToProps(state) {
  return {
    // userRole: state.userReducer
  };
}

const mapDispatchToProps = {
  changeUserRole
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
