import { GetAddress } from "@/model/addressModel";

const orderShippingAddress = (shippingAddresses: GetAddress[]) => {
  let sortedAddress = shippingAddresses.sort(
    (a, b) =>
      Number(b.getAddress().asDefault) - Number(a.getAddress().asDefault)
  );
  return sortedAddress;
};

export default orderShippingAddress;
