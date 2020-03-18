import React from 'react';

function FridgeChat(props) {
  // console.log('this is props', props.post);
  // return props.post.map(chatList => {
  return (
    <div>
      <h1 className="center">-FRIDGE CHAT-</h1>
      <h3 className="center">Garland Boys</h3>
      <div >
        {/* <tr key={chatList.id}>
        <td>{chatList.name}</td>
      </tr> */}
     Hey David, let me get two eggs.
      </div>
      <div ><input className="chatBox"type="text"/></div>
    </div>
  );
  // });
}

export default FridgeChat;
