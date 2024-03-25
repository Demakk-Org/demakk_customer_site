import data from "@/data/library";

let users = data.users;
export default function handler(req, res) {
  let { email } = JSON.parse(req.body);

  let exists = users.includes(email);
  res.status(200).json({ exists });
}
