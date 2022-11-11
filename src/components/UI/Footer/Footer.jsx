import { Container } from "@mui/material";

import FooterNavbar from "./Navbar";
import { FooterLogo } from "../Icons";
import Contacts from "./Contacts";
import { socialMedias } from "./contactsData";
import { navigationsData } from "./navigationsData";

import cls from "./style.module.scss";

export function Footer() {
  return (
    <footer className={cls.footer}>
      <Container>
        <div className={cls.box}>
          <FooterNavbar
            Logo={FooterLogo}
            navigations={navigationsData}
            phone="+998 78 140 80 00"
            socialMedias={socialMedias}
          />
          <div className={cls.footer__info}>
            <span>SamAuto.uz - Все права защищены.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
