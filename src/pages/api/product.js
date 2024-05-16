import axios from "axios";

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

export default function handler(req, res) {
  let [limit, page, lang] = [5, 5, "en"];
  axios
    .get(
      `${server}/product?${limit && `limit=${10}`}&${5 && `page=${1}`}&${
        lang && `lang=${"en"}`
      }`
    )
    .then((response) => {
      console.log(response, response.headers);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
