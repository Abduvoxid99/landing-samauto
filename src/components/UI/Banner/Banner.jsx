import cls from "./Banner.module.scss";
import useTranslation from "next-translate/useTranslation";
import { Container } from "@mui/material";
import GreyButton from "../Buttons/GreyButton";
import { descriptions } from "./bannerData";

export default function BannerBody() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.banner}>
      <Container className={cls.banner__body}>
        <div className={cls.banner__body__bottom}>
          <div className={cls.first__col}>
            <p>Следующее поколение безопасности.</p>
            <h2>Новая серия N уже здесь</h2>
            <GreyButton className={cls.frist__col__btn}>
              Заказать у дилера
            </GreyButton>
          </div>
          <div className={cls.second__col}>
            {descriptions.map((item) => (
              <div
                key={`${item.title} + logo`}
                className={cls.second__col__card}
              >
                <span>{item.logo()}</span>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
