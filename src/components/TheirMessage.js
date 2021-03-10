import React from 'react';


const TheirMessage = ({ message, lastMessage }) => {
   const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
   const lineStyle = { marginLeft: isFirstMessageByUser ? '4px' : '48px' };

   let msg = message?.attachments?.length > 0 ?
      <img className='message-image' src={message.attachments[0].file} alt='message-attachment' style={lineStyle} />
      :
      <div className='message' style={{ float: 'left', backgroundColor: '#CABCDC', ...lineStyle }}>
         {message.text}
      </div>;

   return (
      <div className='message-row'>
         {isFirstMessageByUser && (
            <div className='message-avatar' style={{ backgroundImage: `url(${message?.sender?.avatar})` }} />
         )}
         {msg}
      </div>
   );
}

export default TheirMessage;