import axios from "./axios";

export const translateWord = async (text) => {
  const response = await axios.post("/word/translate", { text: text });
  return response.data;
};

export const getWord = async (text) => {
  try {
    const response = await axios.get("/request");
    return response.data;
  } catch (error) {
    return error.message;
  }
};
