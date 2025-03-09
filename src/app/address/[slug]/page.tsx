import styles from "@/app/page.module.css";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface Address {
  address: string;
  amount: { unit: string; quantity: string }[];
  stake_address: string;
  type: string;
  script: boolean;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await fetch(`api/address?address=${slug}`);

  const info = (await response.json()) as Address;

  console.log(info);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography variant="h1" typography="h5">
          {info.address}
        </Typography>
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>Unit</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info.amount.map(({ unit, quantity }) => (
              <TableRow
                key={unit}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {unit}
                </TableCell>
                <TableCell align="right">{quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </main>
    </div>
  );
}
