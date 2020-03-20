import React from 'react';

function Chat(props) {
  return props.message.map(text => {
    return (
      <div key={text.messageId}>
        <div >
          <div>{text.message}</div>
          <div className="nameTag">-{text.userName}</div>
        </div>
      </div>
    );
  });
}

export default Chat;
