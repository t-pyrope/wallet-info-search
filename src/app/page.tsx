import { Typography } from "@mui/material";
import { Chips } from "@/app/Chips";
import { Form } from "@/app/Form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography variant="h1">Wallet address search</Typography>
        <Form />
        <Chips />
      </main>
    </div>
  );
}
