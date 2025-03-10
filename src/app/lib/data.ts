import { neon } from "@neondatabase/serverless";
const sql = neon(`${process.env.DATABASE_URL}`);
export async function fetchAddresses() {
  try {
    return await sql(`SELECT * FROM addresses`);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function postAddress(address: string) {
  try {
    await sql(`INSERT INTO addresses (address) VALUES ('${address}')`)
  } catch (e) {
    console.error(e);
  }
}
