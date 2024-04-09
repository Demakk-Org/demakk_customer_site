import { Addresses } from "@/store/user";

export default function getAddress(address: string): Addresses {
  switch (address) {
    case "addis-ababa":
      return Addresses["addis-ababa"];
    case "afar":
      return Addresses.afar;
    case "oromia":
      return Addresses.oromia;
    case "amhara":
      return Addresses.amhara;
    case "gumuz":
      return Addresses.gumuz;
    case "harari":
      return Addresses.harari;
    default:
      return Addresses["addis-ababa"];
  }
}
