import useTranslation from "next-translate/useTranslation";
import cls from "./Regions.module.scss";
import Image from "next/image";
import { regionsData } from "./regionsData";

const Regions = ({ region }) => {
  const { t } = useTranslation("common");

  return (
    <div className={cls.card}>
      <h3>{region}</h3>
      <div className={cls.regions}>
        {regionsData.map((item, index) => (
          <div key={item.phone + index} className={cls.regions__item}>
            <div className={cls.left}>
              <div className={cls.left__img}>
                <Image
                  src={item.img}
                  alt="banner"
                  objectFit="cover"
                  width={144}
                  height={122}
                />
              </div>
              <div className={cls.left__content}>
                <h3>{item.company_name}</h3>
                <p>{item.service}</p>
                <p>{item.address}</p>
              </div>
            </div>
            <div className={cls.right}>
              <div className={cls.right__content}>
                <p>
                  <a href={`tel:${item.phone}`}>{item.phone}</a>
                </p>
                <p>
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regions;
