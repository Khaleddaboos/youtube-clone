import axios from "axios";

export const Base_url = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'x-rapidapi-key': 'c179247536mshb2b51846ddc901dp162459jsn7fcaabaa68b9',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${Base_url}/${url}`, options);

  return data;
};
