import data from "@/data/library";
import { Addresses } from "@/store/user";

export default function getRegion(code: Addresses): {
  code: string;
  name: string;
  flag: string;
} {
  let regionIndex: number = 0;

  for (let i = 0; i < data.region.length; i++) {
    if (data.region[i].code === code) {
      regionIndex = i;
      break;
    }
  }

  return data.region[regionIndex];
}
