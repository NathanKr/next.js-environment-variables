import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const msg =
    process.env.NODE_ENV === "development"
      ? "This is development so vercel environment variables on development are empty"
      : "This is production\\preview so vercel environment variables should not be empty";
  return (
    <div className={styles.container}>
      <h3>{msg}</h3>
      <p>
        process.env.NEXT_PUBLIC_VERCEL_URL :{process.env.NEXT_PUBLIC_VERCEL_URL}
      </p>
      <p>
        process.env.NEXT_PUBLIC_VERCEL_ENV :{process.env.NEXT_PUBLIC_VERCEL_ENV}
      </p>
      <h3>
        ENV_KEY is : 1 for production , 2 for preview , 3 for development{" "}
        <span style={{color:'red'}}>but it is not working on the browser, not clear why</span>
      </h3>
      <p>process.env.NEXT_PUBLIC_ENV_KEY : {process.env.NEXT_PUBLIC_ENV_KEY}</p>
      <h3>Get env from the server via /api/get-env</h3>
      
    </div>
  );
}
