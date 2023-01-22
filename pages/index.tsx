import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <p style={{ color: "red" }}>
        You can not access from client , access from api : /api/hello
      </p>
      <p>process.env.NEXT_PUBLIC_VERCEL_URL : {process.env.NEXT_PUBLIC_VERCEL_URL}</p>
    </div>
  );
}
