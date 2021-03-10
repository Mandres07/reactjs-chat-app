import React, { useEffect, useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
   const { chatId, creds } = props;
   const [value, setValue] = useState('');

   const formSubmitHandler = (event) => {
      event.preventDefault();
      const text = value.trim();
      if (text.length > 0) {
         sendMessage(creds, chatId, { text });
      }
      setValue('');
   };

   useEffect(() => {
      const timer = setTimeout(() => {
         isTyping(props, chatId);
      }, 1500);
      return () => clearTimeout(timer);
   }, [value, chatId, props]);

   const inputChangeHandler = (event) => {
      setValue(event.target.value);
   };

   const uploadImageHandler = (event) => {
      sendMessage(creds, chatId, { files: event.target.files, text: '' });
   };

   return (
      <form className='message-form' onSubmit={formSubmitHandler}>
         <input className='message-input' placeholder='Text here' value={value} onChange={inputChangeHandler} onSubmit={formSubmitHandler} />
         <label htmlFor='upload-button'>
            <span className='image-button'>
               <PictureOutlined className='picture-icon' />
            </span>
         </label>
         <input type='file' multiple={false} id='upload-button' style={{ display: 'none' }} onChange={uploadImageHandler} />
         <button type='submit' className='send-button'>
            <SendOutlined className='send-icon' />
         </button>
      </form>
   );
};

export default MessageForm;