import axios from "axios";

const fetchData = async (link: string) =>
  await axios.get(link)
    .then((res) => res.data)
    .catch((err) => {
      console.error(`something went wrong ${err.message}`)
    });

export default fetchData;