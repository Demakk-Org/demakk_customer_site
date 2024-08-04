import useCartStore from "@/store/cart";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import { useRouter } from "next/router";
import React, { Fragment, ReactElement, useEffect } from "react";

function NavBarContainer({ children }: { children?: ReactElement }) {
  const router = useRouter();
  const { token } = useTokenStore();
  const { user, setUser } = useUserStore();
  const { setCart } = useCartStore();

  useEffect(() => {
    if (token && !user) {
      setUser(token);
      setCart({ token });
    } else {
      setCart({ token });
    }

    const { pathname, asPath, query } = router;
    user?.getUser().lang !== router.locale &&
      router.push({ pathname, query }, asPath, {
        locale: user?.getUser().lang,
      });
  }, [token, setUser, setCart, user]);

  return <Fragment>{children}</Fragment>;
}

export default NavBarContainer;
