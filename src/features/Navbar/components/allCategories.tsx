import {
  CameraAltOutlined,
  HomeOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import SelectBotton from "./SelectButton";
import { IoBasketballOutline, IoShirtOutline } from "react-icons/io5";
import { LuSofa, LuWatch } from "react-icons/lu";
import { MdPhoneIphone } from "react-icons/md";

function AllCategories() {
  return (
    <>
      <SelectBotton
        icon={<CameraAltOutlined />}
        name={"Consumer Electronics"}
      />
      <SelectBotton
        icon={<IoShirtOutline fontSize={"1rem"} />}
        name={"mensClothes"}
        subList={{
          title: "Shirts",
          list: [
            "Long Sleeve",
            "Sleevless",
            "Tutle Neck",
            "Printed Shirt",
            "Cotton Shirt",
          ],
        }}
      />
      <SelectBotton icon={<SportsEsportsOutlined />} name={"Toys and Games"} />
      <SelectBotton icon={<HomeOutlined />} name={"Home and Garden"} />
      <SelectBotton
        icon={<LuWatch />}
        name={"Accessories"}
        subList={{
          title: "Camera and Photo",
          list: [
            "Photo Studio Kits",
            "Camcorders",
            "Digital Cameras",
            "Sports Video Cameras",
          ],
        }}
      />
      <SelectBotton icon={<LuSofa />} name={"Furniture"} />
      <SelectBotton
        icon={<MdPhoneIphone />}
        name={"Phones And Telecommunications"}
      />
      <SelectBotton
        icon={<IoBasketballOutline />}
        name={"Sports And Entertainment"}
      />
    </>
  );
}

export default AllCategories;
