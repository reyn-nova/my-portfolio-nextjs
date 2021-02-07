import { useRef, useState } from 'react'

import styles from '../../styles/LeaveAMessage.module.css'

function LeaveAMessage(props) {
  const { id } = props

  const [name, setName] = useState('')
  const [phoneOrEmail, setPhoneOrEmail] = useState('')
  const [message, setMessage] = useState('')

  const isSendButtonDisabled = name.trim() == '' || phoneOrEmail.trim == '' || message.trim() == ''

  const phoneOrEmailInput = useRef(null)
  const messageTextArea = useRef(null)

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
          autoCapitalize = 'words'
          autoCorrect = 'off'
          className = {styles.nameInput}
          onChange = {event => setName(event.target.value)}
          onKeyPress = {event => {
            if (event.code == 'Enter') {
              phoneOrEmailInput.current.focus()
            }
          }}
          placeholder = 'Name...'
          spellCheck = 'false'
          value = {name}
        />

        <input
          autoCapitalize = 'off'
          autoCorrect = 'off'
          className = {styles.phoneOrEmailInput}
          inputMode = 'email'
          onChange = {event => setPhoneOrEmail(event.target.value)}
          onKeyPress = {event => {
            if (event.code == 'Enter') {
              messageTextArea.current.focus()
            }
          }}
          placeholder = 'Phone or Email...'
          spellCheck = 'false'
          ref = {phoneOrEmailInput}
          value = {phoneOrEmail}
        />

        <textarea
          autoCapitalize = 'sentences'
          className = {styles.messageTextArea}
          onChange = {event => setMessage(event.target.value)}
          placeholder = 'Message...'
          ref = {messageTextArea}
          value = {message}
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
    fetch(
      '../api/leave-a-message',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          phoneOrEmail,
          message
        })
      }
    )
    .then(res => res.json())
    .then(resJSON => {
      alert(resJSON['message'])

      if(resJSON['api_status'] == 1) {
        setName('')
        setPhoneOrEmail('')
        setMessage('')
      }
    })
    .catch(err => alert(err.toString()))
  }
}

export default LeaveAMessage