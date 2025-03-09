"use client";

import { Box, Chip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const Chips = () => {
  const router = useRouter();
  const recentAddresses = [
    "addr1x88ttk0fk6ssan4g2uf2xtx3anppy3djftmkg959tufsc6qkqt76lg22kjjmnns37fmyue765qz347sxfnyks27ysqaqd3ph23",
  ];

  const handleChipClick = (address: string) => {
    router.push(`/address/${address}`);
  };

  return (
    <Box>
      <Typography variant="h2" typography="h6">
        Or check recent searches:
      </Typography>
      <Box>
        {recentAddresses.map((address) => (
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
