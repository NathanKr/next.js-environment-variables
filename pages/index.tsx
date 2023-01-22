import styles from "../styles/Home.module.css";

export default function Home() {
  const msg =
    process.env.NODE_ENV === "development" 
      ? "This is development so vercel environment variables on development are empty"
      : "This is production\\preview so vercel environment variables should not be empty";
  return (
    <div className={styles.container}>
      <h1>dev_22_1_23 !!!!!!!!!!!!!</h1>
      <p>{msg}</p>
      <p>
        process.env.NEXT_PUBLIC_VERCEL_ENV :{process.env.NEXT_PUBLIC_VERCEL_ENV}
      </p>
      <p> 
        process.env.NEXT_PUBLIC_VERCEL_URL :{process.env.NEXT_PUBLIC_VERCEL_URL}
      </p>
    </div>
  );
}
