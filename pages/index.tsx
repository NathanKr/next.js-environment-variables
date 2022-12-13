
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <p>You can not access from client , access from server</p>
    <p>process.env.VERCEL_URL : {process.env.VERCEL_URL}</p>
    </div>
  )
}
