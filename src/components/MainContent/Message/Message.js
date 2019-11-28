import React from "react";
import css from './Messages.module.css';
import icon from './icon.png'
import {MdDelete} from "react-icons/md";

function Message(props) {
  const messages = props.messages;

  const itemList = messages.map(item => {
    return (
      <div key={item.id} className={css.item}>
        <div className={css.info}>
          <img src={icon} className={css.icon} alt=''/>
        </div>
        <div className={css.info}>
          <p className={css.name}>
            Lilit
          </p>
          <p className={css.text}>
            {item.text}
          </p>
        </div>
        <div className={css.info}>
          <MdDelete className={css.delete_btn} onClick={(id) => props.deleteMessage(item.id)}/>
        </div>
      </div>
    )
  });

  return (
    <div className={css.list_item}>{itemList}</div>
  )
}

export default Message;