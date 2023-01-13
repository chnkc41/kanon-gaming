import React, { useEffect } from 'react';
import { useState } from 'react';
import LoginHeader from './LoginHeader';
import { globalViewStates } from 'constants';
import * as Toast from 'components/toast/Toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import RequiredField from 'components/toolbox/RequiredField';
import NotConfirmedPassword from 'components/toolbox/NotConfirmedPassword';
import { addNewUser } from './io';

const Register = () => {
  const [viewState, setViewState] = useState(globalViewStates.DEFAULT);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formErrorModel, setFormErrorModel] = useState({
    name: false,
    email: false,
    password: false,
    passwordConfirm: false
  });

  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    const obj = {
      name: name.trim() === '',
      email: email.trim() === '',
      password: password.trim() === '',
      confirmPassword: confirmPassword.trim() === ''
    };

    setFormErrorModel(obj);

    if (!name || !email || !password || !confirmPassword) {
      Toast.error('Please fill all required areas.');
      return;
    }

    const sanitizedEmail = email.trim();
    const atSign = email.includes('@');

    if (!sanitizedEmail || !atSign) {
      Toast.error('Please provide a valid email');
      return;
    }

    if (password !== confirmPassword) {
      Toast.error(`Password did not match! Please try again.`);
      return;
    }

    onFormSave();
  };

  const onFormSave = async () => {
    try {
      setViewState(globalViewStates.POSTING);

      const { success } = await addNewUser(name, email, password);

      if (!success) {
        Toast.error('There was a problem saving your user. Please try again later.');
        setViewState(globalViewStates.IDLE);
        return;
      } else {
        setViewState(globalViewStates.REDIRECT);
        Toast.success('You are being redirected to the log in page');
      }
    } catch (ex) {
      console.log(ex);
      Toast.error('There was a problem saving your command. Please try again later.');
    }
  };

  if (viewState === globalViewStates.REDIRECT) {
    return <Navigate to="/question5" />;
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md m-5 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <LoginHeader title={'Sign Up'} description={'We will get you in in no-time.'} />

      <div className="grid grid-cols-1 gap-y-3">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium leading-5 text-gray-700">
            Name *
          </label>

          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="fullName"
              type="text"
              placeholder=""
              value={name}
              onChange={(onChange) => setName(onChange.target.value.trim())}
              autoFocus
              required
              className="input-main"
            />
          </div>
          {formErrorModel.name && <RequiredField />}
        </div>

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

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Password Confirm *
          </label>

          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="confirmPassword"
              type="password"
              placeholder=""
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoFocus
              required
              className="input-main"
            />
          </div>

          {formErrorModel.confirmPassword && <RequiredField />}
          {password !== confirmPassword ? <NotConfirmedPassword /> : ''}
        </div>

        <div>
          <span className="block w-full rounded-md shadow-sm">
            <button className="btn-main" onClick={onFormSubmit}>
              Register
            </button>
          </span>
        </div>
      </div>

      <div className="relative flex items-center py-8">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 flex-shrink text-sm text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <span className="block w-full rounded-md shadow-sm">
        <Link className="btn-main-outline !w-full" to="/question5">
          Sign In
        </Link>
      </span>
    </div>
  );
};

export default Register;
