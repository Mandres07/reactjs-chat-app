import React, { useState } from 'react';
import axios from 'axios';
import { projectID } from '../data/config';

const LoginForm = (props) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState(null);

   const usernameChangeHandler = (event) => {
      setUsername(event.target.value);
   };

   const passwordChangeHandler = (event) => {
      setPassword(event.target.value);
   };

   const submitFormHandler = async (event) => {
      event.preventDefault();
      const authObject = {
         'Project-ID': projectID,
         'User-Name': username,
         'User-Secret': password
      };

      try {
         await axios.get('https://api.chatengine.io/chats', { headers: authObject });
         localStorage.setItem('username', username);
         localStorage.setItem('password', password);

         window.location.reload();
      } catch (err) {
         setError('Please try again with another credentials');
      }
   };

   return (
      <div className='wrapper'>
         <div className='form'>
            <h1 className='title'>Textier App</h1>
            <form onSubmit={submitFormHandler}>
               <input className='input' placeholder='Username' type='text' value={username} onChange={usernameChangeHandler} required />
               <input className='input' placeholder='Password' type='password' value={password} onChange={passwordChangeHandler} required />
               <div align='center'>
                  <button type='submit' className='button'>
                     <span>Get In</span>
                  </button>
               </div>
               <h2 className='error'>{error}</h2>
            </form>
         </div>
      </div>
   );
}

export default LoginForm;