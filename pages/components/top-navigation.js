import styles from '../../styles/TopNavigation.module.css'

function TopNavigation(props) {
  const { options } = props

  return (
    <div
      className = {styles.topNavigation}
    >
      {
        (options || []).map((option, optionIndex) => (
          <a
            className = {styles.button}
            href = {option.url}
            key = {optionIndex}
          >
            {
              option.icon != undefined ?
                <div
                  className = {styles.iconContainer}
                >
                  {option.icon}
                </div>
                :
                null
            }

            {option.title}
          </a>
        ))
      }
    </div>
  )
}

export default TopNavigation