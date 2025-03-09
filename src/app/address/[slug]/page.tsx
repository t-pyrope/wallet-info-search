import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { LeftArrow } from "next/dist/client/components/react-dev-overlay/ui/icons/left-arrow";
import Link from "next/link";
import { NotFound } from "@/app/address/[slug]/NotFound";
import styles from "./page.module.css";

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

  const response = await fetch(
    `${process.env.URL}/api/address?address=${slug}`,
  );

  let info: Address | null = null;

  if (response.ok) {
    info = (await response.json()) as Address;
  }

  return (
    <>
      <header className={styles.header}>
        <Button startIcon={<LeftArrow />} component={Link} href="/">
          Back
        </Button>
      </header>
      <main className={styles.main}>
        {info ? (
          <>
            <Typography variant="h1" typography="h5">
              {info.address}
            </Typography>
            <Typography>Type: {info.type}</Typography>
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
          </>
        ) : (
          <NotFound slug={slug} />
        )}
      </main>
    </>
  );
}
