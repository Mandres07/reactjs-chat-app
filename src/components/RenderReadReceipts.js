import React from 'react';

const RenderReadReceipts = ({ message, isMyMessage, chat }) => {
   return chat.people.map((person, index) => person.last_read === message.id && (
      <div key={`read_${index}`} className='read-receipt' style={{ float: isMyMessage ? 'right' : 'left', backgroundImage: `url(${person?.person?.avatar})` }} />
   ));
};

export default RenderReadReceipts;