import axios from "axios";

let limit = 5;
let page = 1;
let lang = "en";

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

export default async function handler(req, res) {
  // let { email } = JSON.parse(req.body);
  const products = await axios.get(
    `${local}/product?${limit && `limit=${limit}`}&${page && `page=${page}`}&${
      lang && `lang=${lang}`
    }`
    // {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //   },
    // }
  );

  // let exists = users.includes(email);
  res.status(200).json({ products });
}
