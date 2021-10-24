import './Login.css';
import React, { useState, useEffect } from 'react';
import {CREATE_USER} from '../../graphQL/mutations';
import {useMutation} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import { Link } from 'react-router-dom';
import EditProfile from '../EditProfile/EditProfile';

const Login = ({assignUser, user, updateTypes}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [passCheck, setPassCheck] = useState('');
  const [id, setId] = useState('');


  const [createUser, { error, loading, data }] = useMutation(CREATE_USER);

  if (data) { assignUser(data.createUser.id)
    }

  if (data) {
    if (!id) {
      setId(data.createUser.id)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // this can fetch our user stats from BE for existing users
  }

  const toggleCreate = () => {
    if (!newUser){
      setNewUser(true)
    } else {
      setNewUser(false)
    }
  }

  const createAccount = (e) => {
    e.preventDefault();
    if (newPassword === passCheck) {
      createUser({
        variables: {
          username: username,
          password: newPassword
        }
      })
      //redirect to Edit Profile
    } else {
      alert('your password did not match')
      //do some sort of error handling
    }
  }


  const signIn = (
    <section className="sign-in">
      <h1>EnneaLink</h1>

      <form className="sign-in-box">

        <input
          className="login-input"
          type="text" value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter your username"
        />

        <input
          className="login-input"
          type="password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
          minlength={8} required
        />

        <Link
          to={'/profile'}
          key='1'
        >

          <button
            className="submit-btn"
            type="submit"
          >
            sign in
          </button>

        </Link>

      </form>

      <button
        onClick={toggleCreate}
        className="create-btn"
      >
        create account
      </button>

    </section>

  );

  const makeAccount = () => {
    
    if (user === undefined) {
      return (
      <section className="create-account">
        <h1 className='ennealink-login'>EnneaLink</h1>

        <form className="sign-in-box">

          <input
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="choose a username"
          />

          <input
            className="login-input"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="create a password (min 8 characters)"
            minlength={8} required
          />

          <input
            className="login-input password"
            type="password"
            value={passCheck}
            onChange={(e) => setPassCheck(e.target.value)}
            placeholder="create a password (min 8 characters)"
            minlength={8} required
          />

            <button
              className="submit-btn next"
              type="submit"
              className="submit-btn next"
              onClick={createAccount}
            >
              Create Account
            </button>
        </form>

        <button
          onClick={toggleCreate}
          className="create-btn"
        >
          Already a user? Sign in!
        </button>

      </section> )
    } else {
      return <EditProfile updateTypes={updateTypes} id={id} username={username}/>
    }
  }

  return (
    <div className="login-container">
      {newUser ? makeAccount() : signIn}
    </div>
  )
}

export default Login;
