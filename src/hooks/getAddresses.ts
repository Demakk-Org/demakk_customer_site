import { GetAddress, IAddress } from "@/model/addressModel";
import { LANG } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getAddresses = async (token: string) => {
  try {
    const addresses = await axios.get(`${local}/address`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(addresses.data.data.users, "from address hook");

    // let list:GetAddress[] = []
    let list: GetAddress[] = addresses.data.data.users.map(
      (address: IAddress) => {
        return new GetAddress(address);
      }
    );
    console.log(list, "from address hook");
    return list;
  } catch (err: any) {
    console.log(err.response);
    return [];
  }
};

export default getAddresses;
