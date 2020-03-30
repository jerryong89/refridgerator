import React from 'react';

function Chat(props) {
  return props.message.map(text => {
    return (
      <div key={text.messageId}>
        <div><p className="bold-font">{text.userName}:</p>{text.message}</div>
      </div>
    );
  });
}

export default Chat;
