import axios from "axios";
import { Response } from "../../types";

const BASE_URL = `https://rickandmortyapi.com`;
export const getListOfData = async (endpoint: string): Promise<Response> => {
  const response = await axios.get(BASE_URL + endpoint);

  return response.data;
};

export const getInfiniteData = async (endpoint: string) => {
  const response = await axios.get(endpoint);

  return response.data;
};
