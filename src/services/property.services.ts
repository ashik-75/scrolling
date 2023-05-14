import axios from "axios";

const BASE_URL = `https://booknola.com`;
export async function getProperties(endpoint: string) {
  const url = `${BASE_URL}/${endpoint}`;
  const response = await axios.get(url);

  return response.data;
}
