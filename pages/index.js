import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBuilding, faEnvelope, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/Home.module.css'

import TopNavigation from './components/top-navigation'
import SelfDetails from './components/self-details'
import MyServices from './components/my-services'
import ConnectWithMeOn from './components/connect-with-me-on'
import LeaveAMessage from './components/leave-a-message'

library.add(faBuilding, faProjectDiagram, faEnvelope)

export default function Home() {
  const myServicesId = 'my-services'
	const connectWithMeId = 'connect-with-me-on'
  const leaveAmessageId = 'leave-a-message'

  return (
    <>
      <Head>
        <title>Reynald Prabha's Portfolio</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopNavigation
          options = {[
            {
              icon: (
                <FontAwesomeIcon
                  className = {styles.icon}
                  icon = 'building'
                />
              ),
              title: 'My Services',
              url: `#${myServicesId}`
            },
            {
              icon: (
                <FontAwesomeIcon
                  className = {styles.icon}
                  icon = 'envelope'
                />
              ),
              title: 'Leave A Message',
              url: `#${leaveAmessageId}`
            }
          ]}
        />

        <SelfDetails
          photo = {{
            alt: "Reynald Prabha",
            url: "images/self-photo.jpg"
          }}
          greeting = "Hi, I'm Reynald Prabha"
          tagline = '"Learning, building & teaching about digital things"'
          description = {
            <>
              {'mainly a '}
              
              <strong>{'React-Native Engineer Contributor'}</strong>
              
              {' at Crocodic Studio in Semarang, Indonesia.'}
              
              <br />
              
              {'also can contribute on other digital fields. And love teaching to empowering others.'}
            </>
          }
        />

        <MyServices
          id = {myServicesId}
          services = {[
            {
              thumbnail_url: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              title: "React-Native App Developer",
              subtitle: "On weekdays, I'm working mainly as a React-Native Programmer at Crocodic Studio."
            },
            {
              thumbnail_url: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYnNpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              title: "Front-End Developer",
              subtitle: "I have abilities to program Front-End side using HTML and CSS or with JavaScript Framework using React.js or Svelte.js."
            },
            {
              thumbnail_url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              title: "Back-End Developer",
              subtitle: "I can create API to connect frontend with database using PHP or Express.js for API creation and PostgreSQL for Database."
            },
            {
              thumbnail_url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxzZWFyY2h8Mnx8YXBwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60",
              title: "Developers Empowering Support",
              subtitle: "I love teach anyone from zero to be able create something."
            }
          ]}
        />

        <LeaveAMessage
          id = {leaveAmessageId}
        />

        <ConnectWithMeOn
          id = {connectWithMeId}
          options = {[
            {
              title: 'Email',
              url: 'mailto: rynvva@gmail.com'
            },
            {
              title: 'GitHub',
              url: 'https://github.com/reynald-prabha'
            }
          ]}
        />
      </main>
    </>
  )
}