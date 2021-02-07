import styles from '../../styles/SelfDetails.module.css'

function SelfDetails(props) {
  const { photo, greeting, tagline, description } = props

  return (
    <div
      className={styles.selfDetails}
    >
      <img
        alt={photo?.alt || ''}
        className={styles.selfPhoto}
        height="150"
        src={photo?.url || ''}
        width="150"
      />

      <div
        className={styles.selfName}
      >
        {greeting}
      </div>

      <div
        className={styles.selfTagline}
      >
        {tagline}
      </div>

      <div
        className={styles.selfDescription}
      >
        {description}
      </div>
    </div>
  )
}

export default SelfDetails