import { Button, Typography } from "@mui/material";
import { LeftArrow } from "next/dist/client/components/react-dev-overlay/ui/icons/left-arrow";
import Link from "next/link";

import { fetchAddresses, postAddress } from "@/app/lib/data";
import { NotFound } from "@/app/address/[slug]/NotFound";
import { UnitTable } from "@/app/address/[slug]/UnitTable";
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

  if (info) {
    const addresses = (await fetchAddresses()) as { address: string }[];
    const savedAddress = addresses.find((address) => address.address === slug);
    if (!savedAddress && addresses.length < 5) {
      await postAddress(slug);
    }
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
            <Typography>Address era: {info.type}</Typography>
            <UnitTable units={info.amount} />
          </>
        ) : (
          <NotFound slug={slug} />
        )}
      </main>
    </>
  );
}
