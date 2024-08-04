import GetUser from "@/model/userModel";
import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

const getUser = async (token?: string) => {
  if (!token) return null;

  try {
    const { data } = await axios.get(`${chosenBackendUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = new GetUser(data.user);
    // changeLanguage(getLang(user.getUser().lang));
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getUser;
