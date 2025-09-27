import axios from "axios";

export default async (link: string) =>
  await axios.get(link)
    .then((res) => res.data)
    .catch((err) => {
      console.error(`something went wrong ${err.message}`)
    });
export const postData = async (link: string) => await axios.post(link).then(res => res.data)

export const updateData = async (link: string) => await axios.put(link).then(res => res.data)
// fetchData;