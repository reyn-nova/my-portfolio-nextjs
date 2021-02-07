import styles from '../../styles/ConnectWithMeOn.module.css'

function ConnectWithMeOn(props) {
  const { id, options } = props

  return (
    <div
      className = {styles.container}
      id = {id}
    >
      <div
        className = {styles.title}
      >
        Connect With Me On...
      </div>

      <div
        className = {styles.mediasContainer}
      >
        {
          (options || []).map((option, optionIndex) => (
            <a
              className = {styles.mediaButton}
              href = {option.url}
              key = {optionIndex}
            >
              {option.title}
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default ConnectWithMeOn