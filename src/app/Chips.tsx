"use client";

import { Box, Chip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const Chips = ({ addresses }: { addresses: { address: string }[] }) => {
  const router = useRouter();

  const handleChipClick = (address: string) => {
    router.push(`/address/${address}`);
  };

  return (
    <Box>
      <Typography variant="h2" typography="h6">
        Or check recent searches:
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
        {addresses.map(({ address }) => (
          <Chip
            key="address"
            onClick={() => handleChipClick(address)}
            label={address}
          />
        ))}
      </Box>
    </Box>
  );
};
