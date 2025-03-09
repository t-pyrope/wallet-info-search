"use client";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const NotFound = ({ slug }: { slug: string }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "flex-start" }}>
      <Typography>
        Could not find a wallet for:{" "}
        <Typography sx={{ fontWeight: "bolder" }} component="span">
          {slug}
        </Typography>
      </Typography>
      <Button onClick={handleGoBack} variant="contained">
        Go back
      </Button>
    </Box>
  );
};
