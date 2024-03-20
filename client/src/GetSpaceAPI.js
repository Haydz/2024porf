import axios from "axios";

export const fetchSpaceData = async () => {
  const response = await axios.get("http://localhost:4000/space");
  return response.data;
};
