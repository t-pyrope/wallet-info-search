import { Avatar, TableCell, TableRow } from "@mui/material";

export const UnitTableRow = async ({
  unit,
  quantity,
}: {
  unit: string;
  quantity: string;
}) => {
  let info;
  let logo = "";

  if (unit !== "lovelace") {
    const response = await fetch(`${process.env.URL}/api/unit?unit=${unit}`);

    info = await response.json();

    const logoUrl = info?.metadata?.logo ?? info?.onchain_metadata?.image;

    if (logoUrl) {
      if (logoUrl.startsWith("ipfs")) {
        logo = logoUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
      } else {
        logo = `data:image/png;base64, ${logoUrl}`;
      }
    }
  }

  return (
    <TableRow
      key={unit}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>{logo && <Avatar src={logo}></Avatar>}</TableCell>
      <TableCell component="th" scope="row">
        {unit}
      </TableCell>
      <TableCell align="right">{quantity}</TableCell>
    </TableRow>
  );
};
