import useUserStore from "@/store/user";
import { Edit } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import useTokenStore from "@/store/token";
import MoreToLoveComponent from "./MoreToLoveComponent";
import useProductStore from "@/store/product";
import FavoriteProductListComponent from "./FavoriteProductListComponent";
import ListForFavoritesComponent from "./ListForFavoritesComponent";

function WishListComponent() {
  const { setBreadcrumbs, user } = useUserStore();
  const { t } = useTranslation(["order"]);
  const { token } = useTokenStore();
  const { favoriteProducts, setFavoriteProducts } = useProductStore();
  const [selectedTab, setSelectedTab] = useState<"items" | "lists">("items");

  useEffect(() => {
    setBreadcrumbs([{ name: t("home", { ns: "common" }), url: "/" }]);
    user?.getFavoriteProducts().then((data) => {
      console.log(data);
      setFavoriteProducts(data);
    });
  }, [token, user]);

  return (
    <Stack spacing={2}>
      <Stack
        p={1}
        direction={"row"}
        bgcolor={"background.light"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Button
            color="contrast"
            sx={{ fontWeight: selectedTab == "items" ? "bold" : "light" }}
            onClick={() => setSelectedTab("items")}
          >
            {t("allItems")}({favoriteProducts?.length || 0})
          </Button>
          <Button
            color="contrast"
            sx={{ fontWeight: selectedTab == "lists" ? "bold" : "light" }}
            onClick={() => setSelectedTab("lists")}
          >
            {t("myLists")}(0)
          </Button>
        </Stack>

        <Button disabled color="contrast" size="small" startIcon={<Edit />}>
          {t("edit", { ns: "actions" })}
        </Button>
      </Stack>

      <Stack spacing={2}>
        {selectedTab == "items" ? (
          <FavoriteProductListComponent favoriteProducts={favoriteProducts} />
        ) : (
          <ListForFavoritesComponent favoriteLists={["some"]} />
        )}
      </Stack>

      <MoreToLoveComponent />
    </Stack>
  );
}

export default WishListComponent;
