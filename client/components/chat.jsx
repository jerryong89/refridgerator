import React from 'react';

function Chat(props) {
  return props.message.map(text => {
    return (
      <div key={text.messageId}>
        <div >
          <div>{text.userName}{': '}{text.message}</div>
          <div></div>
        </div>
      </div>
    );
  });
}

export default Chat;
