import Head from 'next/head'
import Image from 'next/image'
import AppointmentButton from '../components/AppointmentButton'
import Intro from '../components/Intro'
import Covid from "../components/Covid"
import team from "../assets/images/team.PNG"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <AppointmentButton />
      <Intro />
      <Covid />
      <div className={styles.teamImg}>
        <Image src={team} alt="teamPhoto" />
      </div>
      
    </div>
  )
}
