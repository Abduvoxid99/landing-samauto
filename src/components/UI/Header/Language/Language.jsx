import { useEffect, useState, useCallback } from "react";
import { Popover } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import cls from "../Header.module.scss";
import { useStyles } from "./styles";
import { useRouter } from "next/router";
import { ArrowBottomIcon, ArrowTopIcon } from "components/UI/Icons";
import { languages } from "./data";
import { TickIcon } from "components/UI/Icons";

export default function Language() {
  const { t } = useTranslation("common");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const classes = useStyles();
  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      handleClose();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div ref={anchorEl} onClick={handleClick} className={cls.language}>
        {router.locale.charAt(0).toUpperCase() + router.locale.slice(1)}
        {open ? <ArrowTopIcon /> : <ArrowBottomIcon />}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: 37,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={classes}
      >
        <div className={cls.languagePopUp}>
          {languages.map((item, index) => (
            <Link
              key={item.lang + index}
              scroll={false}
              href={router.asPath}
              locale={item.lang}
            >
              <a className={router.locale === item.lang ? cls.activeLink : ""}>
                <div className={cls.langs}>
                  {t(item.translate)}
                  {router.locale === item.lang && <TickIcon />}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Popover>
    </>
  );
}
