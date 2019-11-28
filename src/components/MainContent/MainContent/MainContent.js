import React from 'react';
import Message from "../Message/Message";
import css from './MainContent.module.css'

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: {
        text: '',
        id: ''
      }
    };
  }

  onChange = (e) => {
    this.setState({
      newMessage: {
        text: e.target.value,
        id: Date.now()
      }
    })
  };

  addMessage = (e) => {
    e.preventDefault();

    const item = this.state.newMessage;
    this.setState({
      messages: [item, ...this.state.messages],
      newMessage: {
        text: '',
        id: ''
      }
    });
  };

  deleteMessage = (id) => {
    const filteredMessages = this.state.messages.filter(item =>
      item.id !== id
    );
    this.setState({
      messages: filteredMessages
    })
  };

  render() {
    return (
      <div className={css.main_container}>
        <p className={css.title}>
          Adding posts and deleting if necessary
        </p>
        <form onSubmit={this.addMessage} className={css.form}>
          <input type='text'
                 name='message'
                 value={this.state.newMessage.text}
                 onChange={this.onChange}/>
          <button type='submit'>
            <p className={css.plus}>
              +
            </p>
          </button>
        </form>
        <div className={css.message}>
          <Message messages={this.state.messages} deleteMessage={this.deleteMessage}/>
        </div>
      </div>
    )
  }
}

export default MainContent;
