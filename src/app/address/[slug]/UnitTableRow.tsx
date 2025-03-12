"use client";

import { Avatar, TableCell, TableRow } from "@mui/material";
import { pink } from "@mui/material/colors";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useEffect, useState } from "react";

export const UnitTableRow = ({
  unit,
  quantity,
}: {
  unit: string;
  quantity: string;
}) => {
  const [logo, setLogo] = useState<string>("");

  useEffect(() => {
    if (unit === "lovelace") return;
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/unit?unit=${unit}`,
      );

      const info = await response.json();

      const logoUrl = info?.metadata?.logo ?? info?.onchain_metadata?.image;
      let tempLogo;

      if (logoUrl && typeof logoUrl === "string") {
        if (logoUrl.startsWith("ipfs")) {
          tempLogo = logoUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
        } else {
          tempLogo = `data:image/png;base64, ${logoUrl}`;
        }
      }
      if (tempLogo) {
        setLogo(tempLogo);
      }
    };

    fetchData();
  }, [unit]);

  return (
    <TableRow
      key={unit}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>
        <Avatar src={logo} sx={{ bgcolor: pink[500] }}>
          <EmojiEmotionsIcon />{" "}
        </Avatar>
      </TableCell>
      <TableCell component="th" scope="row">
        {unit}
      </TableCell>
      <TableCell align="right">{quantity}</TableCell>
    </TableRow>
  );
};
