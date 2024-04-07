import {
  CameraAltOutlined,
  HomeOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import SelectBotton from "./selectButton";
import { IoBasketballOutline, IoShirtOutline } from "react-icons/io5";
import { LuSofa, LuWatch } from "react-icons/lu";
import { MdPhoneIphone } from "react-icons/md";
import language from "@/data/dictionary";

function AllCategories() {
  return (
    <>
      <SelectBotton
        icon={<CameraAltOutlined />}
        name={language.en.consumerElectronics}
      />
      <SelectBotton
        icon={<IoShirtOutline fontSize={"1rem"} />}
        name={language.en.mensClothes}
        subList={{
          title: language.en.shirts,
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
        name={language.en.accessories}
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
      <SelectBotton icon={<LuSofa />} name={language.en.furniture} />
      <SelectBotton
        icon={<MdPhoneIphone />}
        name={"Phones and Telecommunicationa"}
      />
      <SelectBotton
        icon={<IoBasketballOutline />}
        name={"Sports and Entertainment"}
      />
    </>
  );
}

export default AllCategories;
