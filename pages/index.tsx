import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [vercelUrl, setVercelUrl] = useState<string | undefined>();
  const [envKey, setEnvKey] = useState<string | undefined>();

  useEffect(() => {
    setVercelUrl(process.env.NEXT_PUBLIC_VERCEL_URL);
    setEnvKey(process.env.NEXT_PUBLIC_ENV_KEY)
  }, []);

  const msg =
    process.env.NODE_ENV === "development"
      ? "This is development so vercel environment variables on development are empty"
      : "This is production\\preview so vercel environment variables should not be empty";
  return (
    <div className={styles.container}>
      <h3>{msg}</h3>
      <p>process.env.NEXT_PUBLIC_VERCEL_URL :{vercelUrl}</p>
      <h3>ENV_KEY is : 1 for production , 2 for preview , 3 for development</h3>
      <p>process.env.NEXT_PUBLIC_ENV_KEY : {envKey}</p>
    </div>
  );
}
