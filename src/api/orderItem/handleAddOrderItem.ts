import axios from "axios";
import { chosenBackendUrl, LANG } from "@/store/user";
import { ObjectId } from "mongoose";

interface HandleOrderItemProps {
  productVariantId: ObjectId;
  couponCode?: string;
  quantity?: number;
  isChecked?: boolean;
  token: string | null;
  lang?: LANG;
  setLoading: (value: boolean) => void;
  setCart: ({ token }: { token: string }) => void;
}

const handleAddOrderItem = ({
  productVariantId,
  quantity,
  token,
  setLoading,
  couponCode,
  setCart,
  lang,
}: HandleOrderItemProps) => {
  if (!token) return;

  setLoading(true);

  try {
    axios
      .post(
        `${chosenBackendUrl}/orderItem`,
        {
          productVariantId,
          quantity,
          couponCode,
          lang,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setLoading(false);
        setCart({ token });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

export default handleAddOrderItem;
