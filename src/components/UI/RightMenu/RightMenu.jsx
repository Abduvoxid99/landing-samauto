import React, { useEffect } from "react";
import { Drawer } from "@mui/material";
import cls from "./RightMenu.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./muStyles";
import { useRouter } from "next/router";
import Link from "next/link";
import { LogoSamAutoWhite } from "../Icons";
import CloseIcon from "@mui/icons-material/Close";
import { languages } from "./data";
import { TickIcon, WorldIcon } from "../Icons";

export default function RightMenu({
  isOpen,
  setIsOpen = () => {},
  links = [],
}) {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("common");

  const windowScrollTo = (selector, yOffset = -70) => {
    if (typeof window !== "undefined") {
      const el = document.querySelector("#" + selector);
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y });
    }
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const toggleDrawer = () => (event) => {
    if (
      event?.type === "keydown" &&
      (event?.key === "Tab" || event?.key === "Shift")
    ) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <Drawer
      className={classes.root}
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer()}
    >
      <div className={classes.list} role="presentation">
        <div className={cls.menu}>
          <div className={cls.menu__header}>
            <Link href={"/"}>
              <a>
                {" "}
                <LogoSamAutoWhite />
              </a>
            </Link>
            <CloseIcon className={cls.clear__icon} onClick={toggleDrawer()} />
          </div>
          <div className={cls.menu__body}>
            <div className={cls.list}>
              {links.map((item) => (
                <div
                  onClick={() => {
                    toggleDrawer()();
                    windowScrollTo(item.link);
                  }}
                  key={item.name + "link"}
                  className={cls.list__item}
                >
                  <p>{item?.name}</p>
                </div>
              ))}
            </div>
            <div className={cls.language}>
              <div className={cls.language__header}>
                <WorldIcon />
                <p>Язык</p>
              </div>
              {languages.map((item, index) => (
                <Link
                  key={item.lang + index}
                  scroll={false}
                  href={router.asPath}
                  locale={item.lang}
                >
                  <a
                    className={
                      router.locale === item.lang ? cls.activeLink : ""
                    }
                  >
                    <div className={cls.langs}>
                      <p>{t(item.translate)}</p>
                      {router.locale === item.lang && <TickIcon />}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
