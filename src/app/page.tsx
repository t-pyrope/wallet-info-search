import styles from "./page.module.css";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { Chips } from "@/app/Chips";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography variant="h1">Wallet address search</Typography>
        <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
          <TextField label="Wallet address" style={{ flexGrow: 1 }} />
          <Button variant="contained">Get information</Button>
        </Box>
        <Chips />
      </main>
    </div>
  );
}
