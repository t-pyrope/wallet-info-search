import { Typography } from "@mui/material";

import { Chips } from "@/app/Chips";
import { Form } from "@/app/Form";
import styles from "./page.module.css";
import { fetchAddresses } from "@/app/lib/data";

export default async function Home() {
  const addresses = (await fetchAddresses()) as { address: string }[];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography variant="h1">Wallet address search</Typography>
        <Form />
        <Chips addresses={addresses} />
      </main>
    </div>
  );
}
