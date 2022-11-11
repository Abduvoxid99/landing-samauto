import cls from "./Header.module.scss";

import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import Headroom from "react-headroom";
import { LogoSamAutoWhite } from "../Icons";
import { links } from "./data";
import Language from "./Language/Language";
import classNames from "classnames";
import { HamburgerIcon } from "../Icons";
import RightMenu from "../RightMenu/RightMenu";

export function Header() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [activeNav, setActiveNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const windowScrollTo = (selector, yOffset = -70) => {
    if (typeof window !== "undefined") {
      const el = document.querySelector("#" + selector);
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const listenScrollEvent = () => {
        window.scrollY > 70 ? setActiveNav(true) : setActiveNav(false);
      };
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }
  }, []);

  return (
    <Headroom>
      <header
        className={classNames(cls.header, {
          [cls.activeHeader]: activeNav,
        })}
      >
        <Container className={cls.container}>
          <div className={cls.logo}>
            <Link href="/">
              <a>
                <LogoSamAutoWhite />
              </a>
            </Link>
          </div>
          <div className={cls.row}>
            <nav>
              <ul>
                {links.map((item) => (
                  <li key={item.name + "link"}>
                    <a
                      onClick={() => {
                        windowScrollTo(item.link);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={cls.right}>
              <Language />
            </div>
          </div>

          <div onClick={() => setIsOpen(true)} className={cls.hamburger}>
            <HamburgerIcon />
          </div>
        </Container>
        <RightMenu links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </Headroom>
  );
}
