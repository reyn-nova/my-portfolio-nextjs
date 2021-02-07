import { useState } from 'react'

import styles from '../../styles/LeaveAMessage.module.css'

function LeaveAMessage(props) {
  const { id } = props

  const [name, setName] = useState('')
  const [phoneOrEmail, setPhoneOrEmail] = useState('')
  const [message, setMessage] = useState('')

  const isSendButtonDisabled = name.trim() == '' || phoneOrEmail.trim == '' || message.trim() == ''

  return (
    <div
      className = {styles.container}
      id = {id}
    >
      <div
        className = {styles.title}
      >
        Leave A Message
      </div>

      <div
        className = {styles.formContainer}
      >
        <input
          className = {styles.nameInput}
          onChange = {event => setName(event.target.value)}
          placeholder = 'Name...'
        />

        <input
          className = {styles.phoneOrEmailInput}
          onChange = {event => setPhoneOrEmail(event.target.value)}
          placeholder = 'Phone or Email...'
        />

        <textarea
          className = {styles.messageTextArea}
          onChange = {event => setMessage(event.target.value)}
          placeholder = 'Message...'
        />
        
        <a
          className = {styles.submitButton}
          href = {`#${id}`}
          onClick = {submit}
          style = {{
            backgroundColor: isSendButtonDisabled ? 'rgb(50, 50, 50)' : 'crimson',
            color: isSendButtonDisabled ? 'darkgray' : 'white',
            pointerEvents: isSendButtonDisabled ? 'none' : 'visible'
          }}
        >
          Send
        </a>
      </div>
    </div>
  )

  function submit() {
    alert(name + ' ' + phoneOrEmail + ' ' + message)
  }
}

export default LeaveAMessage