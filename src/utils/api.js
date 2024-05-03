import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

// abhinandanbansal123@gmail.com
// const params = {
//   key: "AIzaSyDXUn58J9D0889VQFWxnzIXPy7SoJlADhs",
//   cx: "416babdf35eef40e4",
// };

// abhinandanjain829@gmail.com
const params = {
  key: "AIzaSyAEhU-p5glmpbbnU2XDq47fPtj3BfBIJV8",
  cx: "c515f9e8eec324a8b",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
