import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

const handleUserImageUpdate = ({
  token,
  image,
  setUser,
}: {
  token: string;
  image: string[];
  setUser: (token: string) => void;
}) => {
  try {
    axios
      .post(
        `${chosenBackendUrl}/user/image`,
        {
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setUser(token);
      });
  } catch (error) {
    console.log(error);
  }
};

export default handleUserImageUpdate;
