import axios from "axios";

export const fetchSpaceData = async () => {
  const response = await axios.get("http://inspace.com/space");
  return response.data;
};
