"use client";

import { Box, Chip, Typography } from "@mui/material";
import Link from "next/link";

export const Chips = ({ addresses }: { addresses: { address: string }[] }) => {
  return (
    <Box>
      <Typography variant="h2" typography="h6">
        Or check recent searches:
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
        {addresses.map(({ address }) => (
          <Chip
            key="address"
            label={address}
            component={Link}
            href={`/address/${address}`}
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Box>
    </Box>
  );
};
