"use client";
import { Box, Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const Form = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchTerm) {
      return;
    }

    router.push(`/address/${searchTerm}`);
  };

  return (
    <Box
      sx={{ display: "flex", gap: 1, width: "100%" }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Wallet address"
        style={{ flexGrow: 1 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Get information
      </Button>
    </Box>
  );
};
