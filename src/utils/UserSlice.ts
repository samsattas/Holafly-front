import axios from "axios";

interface CardData {
  status: string;
  dateStart: string;
  dateEnd: string | null;
  consumption: {
    totalConsumption: number;
  } | null;
  flag: string;
  country: string;
  plan: string;
}

export async function getUserByUsername(username: string) {
  const response = await axios.get<CardData[]>(
    "https://holafly-backend.onrender.com/user/" + username
  );
  const data = await response.data;
  return data;
}

export async function getCardsByUsername(username: string) {
  const response = await axios.get(
    "https://holafly-backend.onrender.com/cardsByUser/" + username
  );
  const data = await response.data;
  return data;
}
