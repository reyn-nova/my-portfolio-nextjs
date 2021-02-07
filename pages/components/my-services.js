import styles from '../../styles/MyServices.module.css'

function MyServices(props) {
  const { id, services } = props

  return (
    <div
      className={styles.portfolioBackground}
      id = {id}
    >
      <div
        className={styles.portfolioContainerTitle}
      >
        My Services
      </div>

      <div
        className={styles.portfolioContainer}
      >
        {
          (services || []).map((service, serviceIndex) => (
            <div
              className={styles.portfolio}
              key = {serviceIndex}
            >
              <img
                alt={`${service.thumbnail_url} Thumbnail`}
                className={styles.portfolioImage}
                src={service.thumbnail_url}
              />

              <div
                className={styles.portfolioTitle}
              >
                {service.title}
              </div>

              <div
                className={styles.portfolioSubtitle}
              >
                {service.subtitle}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyServices