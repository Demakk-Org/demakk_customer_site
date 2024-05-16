import data from "@/data/library";
import { NextApiRequest, NextApiResponse } from "next";

let users = data.users;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // let { email } = JSON.parse(req.body);
  let email = "melkatole1@gmail.com";

  let exists = users.includes(email);
  res.status(200).json({ exists });
}
