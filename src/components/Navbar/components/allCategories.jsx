import {
  Camera,
  CameraAltOutlined,
  HomeOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import SelectBotton from "./selectButton";
import { IoBasketballOutline, IoShirtOutline } from "react-icons/io5";
import { LuSofa, LuWatch } from "react-icons/lu";
import { MdPhoneIphone } from "react-icons/md";

function AllCategories() {
  return (
    // <Box>
    <>
      <SelectBotton icon={<CameraAltOutlined />} name="Consumer Electronics" />
      <SelectBotton
        icon={<IoShirtOutline fontSize={"1rem"} />}
        name={"Men's Clothing"}
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
        name={"Phones and Telecommunicationa"}
      />
      <SelectBotton
        icon={<IoBasketballOutline />}
        name={"Sports and Entertainment"}
      />
      {/* <SelectBotton icon={<CameraAltOutlined />} name="Consumer Electronics" />
      <SelectBotton
        icon={<IoShirtOutline fontSize={"1rem"} />}
        name={"Men's Clothing"}
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
        name={"Phones and Telecommunicationa"}
      />
      <SelectBotton
        icon={<IoBasketballOutline />}
        name={"Sports and Entertainment"}
      /> */}
    </>
    // {/* </Box> */}
  );
}

export default AllCategories;
