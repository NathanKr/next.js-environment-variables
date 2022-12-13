
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     ----<p>{process.env.VERCEL_URL}</p>----
    </div>
  )
}
