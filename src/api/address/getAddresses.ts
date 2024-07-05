import { GetAddress, IAddress } from "@/model/addressModel";
import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const getAddresses = async (token: string | null) => {
  if (!token) return [];

  try {
    const addresses = await axios.get(`${chosenBackendUrl}/address`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let list: GetAddress[] = addresses.data.data.addresses.map(
      (address: IAddress) => {
        return new GetAddress(address);
      }
    );
    return list;
  } catch (err: any) {
    console.log(err.response);
    return [];
  }
};

export default getAddresses;
